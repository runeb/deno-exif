// https://www.exiv2.org/tags.html

const JPEG_MARKER_SOI = 0xFFD8;
const JPEG_MARKER_APP0 = 0xFFE0;
const JPEG_MARKER_APP1 = 0xFFE1;

enum IFDType {
  // 1 = BYTE (An 8-bit unsigned integer.)
  BYTE = 1,
  // 2 = ASCII (An 8-bit byte containing one 7-bit ASCII code. The final byte is
  // terminated with NULL.)
  ASCII = 2,
  // 3 = SHORT (16bit (2 byte) unsigned int)
  SHORT = 3,
  // 4 = LONG (32bit (4 byte) unsigned int)
  LONG = 4,
  // 5 = RATIONAL Two longs. First numerator, second denominator
  RATIONAL = 5,
  // 7 = UNDEFINED (8-bit byte may take any value, depending on field def.)
  UNDEFINED = 7,
  //9 = SLONG (32bit (4 byte) signed int) (2-bits complement)
  SLONG = 9,
  // 10 = SRATIONAL Two slongs. First numerator, second denominator
  SRATIONAL = 10,
}

// https://www.exiv2.org/tags.html
enum Tag {
  X_RESOLUTION = 0x011a,
  Y_RESOLUTION = 0x011b,
  EXIF_IFD_POINTER = 0x8769,
  JPEG_INTERCHANGE_FORMAT = 0x0201,
  /* 
   * The number of bytes of JPEG compressed thumbnail data. This is not used for
   * primary image JPEG data. JPEG thumbnails are not divided but are recorded
   * as a continuous JPEG bitstream from SOI to EOI. Appn and COM markers should
   * not be recorded. Compressed thumbnails must be recorded in no more than 64
   * Kbytes, including all other data to be recorded in APP1. */
  JPEG_INTERCHANGE_FORMAT_LENGTH = 0x0202,
  GPS_INFO_IFD_POINTER = 0x8825,
  INTEROPERABILITY_IFD_POINTER = 0xa005,
}

const IFD_SIZE = 12;

export type ExifEntry = {
  tag: number;
  type: IFDType;
  count: number;
  size: number;
  value: string | number;
};

function valueSize(count: number, type: IFDType): number {
  switch (type) {
    case IFDType.BYTE:
      return count * 1;
    case IFDType.ASCII:
      return count * 1;
    case IFDType.SHORT:
      return count * 2;
    case IFDType.LONG:
      return count * 4;
    case IFDType.RATIONAL:
      return count * 8;
    case IFDType.UNDEFINED:
      return count * 1;
    case IFDType.SLONG:
      return count * 8;
    case IFDType.SRATIONAL:
      return count * 8;
  }
}

function name(tag: number): string {
  switch (tag) {
    case 0x112:
      return "Orientation";
    default:
      return String(tag);
  }
}

function text(tag: number, value: number): string | number {
  switch (tag) {
    // ORIENTATION
    case 0x112:
      return [
        "",
        "Top-left",
        "Top-right",
        "Bottom-right",
        "Bottom-left",
        "Left-top",
        "Right-top",
        "Right-bottom",
        "Left-bottom",
      ][value];
    default:
      return value;
  }
}

async function readAscii(view: DataView, offset: number, length: number) {
  // Subtract 1 because the length is \0 terminator included.
  return "TODO";
  /*
  await file.seek(fileOffset, Deno.SeekMode.Start);
  const strBuf = new Uint8Array(length - 1);
  await Deno.read(file.rid, strBuf);
  return new TextDecoder().decode(strBuf);
  */
}

async function readUint16(
  file: Deno.File,
  offset: number = 0,
  littleEndian = false,
): Promise<number> {
  const uint16Buf = new Uint8Array(2);
  let buf: number = 0;
  if (offset) {
    await file.seek(offset, Deno.SeekMode.Current);
  }
  await Deno.read(file.rid, uint16Buf);
  if (littleEndian) {
    buf = (uint16Buf[1] << 8) + uint16Buf[0];
  } else {
    buf = (uint16Buf[0] << 8) + uint16Buf[1];
  }
  return buf;
}

function innerDataview(
  view: DataView,
  offset: number,
): DataView {
  return new DataView(
    view.buffer,
    offset + view.byteOffset,
  );
}

async function readApp1(
  file: Deno.File,
  fileOffset: number,
) {
  const size = await readUint16(file);
  await file.seek(fileOffset, Deno.SeekMode.Start);

  // This is the offset into out view that is the TIFF header. All offsets that
  // appear as values are meant to be calculated with this as a start.
  const offset = 8;

  const app1 = new Uint8Array(size);
  await Deno.read(file.rid, app1);
  const view = new DataView(app1.buffer, 0);

  const byteOrder = view.getUint16(8);
  const littleEndian = byteOrder === 0x4949;

  const count0 = view.getUint16(16, littleEndian);
  const ifd0 = innerDataview(view, 16);

  const valueView = new DataView(app1.buffer, 8);

  let tags = await readIfd(ifd0, valueView, littleEndian);

  const next = ifd0.getUint32(2 + (12 * count0), littleEndian);
  if (next) {
    const ifd1 = new DataView(view.buffer, next + offset);
    tags = tags.concat(await readIfd(ifd1, valueView, littleEndian));
  }
  return tags;
}

async function readIfd(
  view: DataView,
  valueview: DataView,
  littleEndian: boolean,
) {
  const count = view.getInt16(0, littleEndian);
  console.debug("Parsing tag count", count);
  let result: ExifEntry[] = [];
  for (let i = 0; i < count; i++) {
    const tagView = innerDataview(view, 2 + (i * IFD_SIZE));
    const tag = tagView.getUint16(0, littleEndian);
    const type = tagView.getUint16(2, littleEndian);
    const count = tagView.getUint32(4, littleEndian);
    const size = valueSize(count, type);
    let value: string | number = -1;
    let offset;
    if (size > 4) {
      offset = tagView.getUint32(8, littleEndian);
    }

    switch (tag) {
      case Tag.EXIF_IFD_POINTER:
        // Thumbnail data
        const ptr = tagView.getUint32(8, littleEndian);
        const subView = innerDataview(view, ptr - 8);
        const subs = await readIfd(subView, valueview, littleEndian);
        result = result.concat(subs);
        continue;
      case Tag.JPEG_INTERCHANGE_FORMAT:
      case Tag.JPEG_INTERCHANGE_FORMAT_LENGTH:
      case Tag.GPS_INFO_IFD_POINTER:
      case Tag.INTEROPERABILITY_IFD_POINTER:
        continue;
    }

    switch (type) {
      case IFDType.ASCII:
        if (offset) {
          const b = [];
          for (let x = 0; x < size - 1; x++) {
            const strOffset = offset + (x);
            b.push(valueview.getUint8(strOffset));
          }

          let strArray;
          // Fix for 0-termination bug
          if (b[b.length - 1] === 0) {
            strArray = new Uint8Array(b.slice(0, b.length - 1));
          } else {
            strArray = new Uint8Array(b);
          }
          value = new TextDecoder().decode(strArray);
          console.log("Last byte", b[b.length - 2], size, value);
        }
        break;
      case IFDType.LONG:
        value = tagView.getUint32(8, littleEndian);
        break;
      case IFDType.BYTE:
      case IFDType.SHORT:
        value = tagView.getUint16(8, littleEndian);
        break;
      case IFDType.UNDEFINED:
        value = `${size} bytes undefined data`;
        break;
      case IFDType.RATIONAL:
        if (tag === Tag.Y_RESOLUTION) {
          const xRes = result.find((r) => r.tag === Tag.X_RESOLUTION);
          if (xRes) {
            value = xRes.value;
          } else {
            value = 72;
          }
        } else if (offset) {
          const numerator = valueview.getUint32(offset, littleEndian);
          const denominator = valueview.getUint32(offset + 4, littleEndian);
          value = (numerator / denominator);
        }
        break;
      case IFDType.SRATIONAL:
        if (offset) {
          const numerator = valueview.getInt32(offset, littleEndian);
          const denominator = valueview.getInt32(offset + 4, littleEndian);
          value = numerator / denominator;
        }
        /*
  case EXIF_BYTE_ORDER_MOTOROLA:
                return (((uint32_t)b[0] << 24) | ((uint32_t)b[1] << 16) | ((uint32_t)b[2] << 8) | (uint32_t)b[3]);
        case EXIF_BYTE_ORDER_INTEL:
                return (((uint32_t)b[3] << 24) | ((uint32_t)b[2] << 16) | ((uint32_t)b[1] << 8) | (uint32_t)b[0]);
                */

        break;
      default:
        break;
    }

    const res: ExifEntry = {
      tag,
      type,
      count,
      size,
      value,
    };

    result.push(res);
  }
  return result;
}

export async function entries(
  path: string,
): Promise<ExifEntry[]> {
  const file = await Deno.open(path);

  // JPEG?
  if (0xFFD8 !== await readUint16(file)) {
    console.error("Not a JPEG");
    return [];
  }

  // Seek to APP1
  while (0xFFe1 !== await readUint16(file)) {} // Fix this
  const fileOffset = await file.seek(0, Deno.SeekMode.Current);
  const result = await readApp1(file, fileOffset);
  Deno.close(file.rid);
  return result;
}
