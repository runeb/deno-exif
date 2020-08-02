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
  offset: number;
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

async function readAscii(file: Deno.File, fileOffset: number, length: number) {
  // Subtract 1 because the length is \0 terminator included.
  await file.seek(fileOffset, Deno.SeekMode.Start);
  const strBuf = new Uint8Array(length - 1);
  await Deno.read(file.rid, strBuf);
  return new TextDecoder().decode(strBuf);
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

async function readApp1(
  file: Deno.File,
  fileOffset: number,
  headerOffset: number,
  littleEndian: boolean,
) {
  await file.seek(fileOffset, Deno.SeekMode.Start);
  const size = await readUint16(file, 0, littleEndian);
  // Skip EXIF header
  await file.seek(6, Deno.SeekMode.Current);
}

async function readIfd(
  file: Deno.File,
  fileOffset: number,
  headerOffset: number,
  littleEndian: boolean,
) {
  await file.seek(fileOffset, Deno.SeekMode.Start);
  const count = await readUint16(file, 0, littleEndian);
  let result: ExifEntry[] = [];
  const ifds = new Uint8Array(IFD_SIZE * count);
  await Deno.read(file.rid, ifds);
  console.log("Current loc", await file.seek(0, Deno.SeekMode.Current));
  for (let i = 0; i < count; i++) {
    const tagOffset = fileOffset + (IFD_SIZE * i);
    const view = new DataView(ifds.buffer, i * IFD_SIZE);
    const tag = view.getUint16(0, littleEndian);
    const type = view.getUint16(2, littleEndian);
    const count = view.getUint32(4, littleEndian);
    const offsetOrValue = view.getUint32(8, littleEndian);

    const res: ExifEntry = {
      tag,
      type,
      count,
      offset: offsetOrValue + headerOffset,
      size: valueSize(count, type),
      value: offsetOrValue,
    };

    switch (tag) {
      case Tag.EXIF_IFD_POINTER:
        const subResult = await readIfd(
          file,
          res.offset,
          headerOffset,
          littleEndian,
        );
        result = result.concat(subResult);
        continue;
      case Tag.JPEG_INTERCHANGE_FORMAT:
      case Tag.JPEG_INTERCHANGE_FORMAT_LENGTH:
      case Tag.GPS_INFO_IFD_POINTER:
      case Tag.INTEROPERABILITY_IFD_POINTER:
        console.log("Some other bullshit", tag);
        continue;
    }

    switch (res.type) {
      case IFDType.ASCII:
        res.value = await readAscii(file, res.offset, res.count);
        break;
      case IFDType.BYTE:
      case IFDType.SHORT:
        res.value = view.getUint16(8, littleEndian);
        break;
      case IFDType.RATIONAL:
        if (res.tag === Tag.Y_RESOLUTION) {
          const xRes = result.find((r) => r.tag === Tag.X_RESOLUTION);
          if (xRes) {
            res.value = xRes.value;
          } else {
            res.value = 72;
          }
        } else {
          const buf = new Uint8Array(64);
          await file.seek(res.offset, Deno.SeekMode.Start);
          await Deno.read(file.rid, buf);
          const v = new DataView(buf.buffer, 8);
          const numerator = v.getUint32(0, littleEndian);
          const denominator = v.getUint32(4, littleEndian);
          if (denominator) {
            res.value = (numerator / denominator);
          } else {
            res.value = `${numerator}/0`;
          }
        }
        break;
      default:
        break;
    }

    console.log(tagOffset, res);

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
  while (0xFFe1 !== await readUint16(file)) {}
  const headerOffset = await file.seek(8, Deno.SeekMode.Current);
  let byteOrder = await readUint16(file);
  let littleEndian = byteOrder === 0x4949;
  const curr = await file.seek(6, Deno.SeekMode.Current);

  const result = await readIfd(
    file,
    curr,
    headerOffset,
    littleEndian,
  );

  Deno.close(file.rid);
  return result;
}
