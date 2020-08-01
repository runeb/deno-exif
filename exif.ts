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

enum Tag {
  X_RESOLUTION = 0x011a,
  Y_RESOLUTION = 0x011b,
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

async function readIFD() {
  // 0-1 TAG
  // 2-3 TYPE
  /*
  */
  // 4-7 COUNT
  /*
  The number of values. It should be noted carefully that the count is not
  the sum of the bytes. In the case of one value of SHORT (16 bits), for
  example, the count is '1' even though it is 2 Bytes.
  */
  // 8-11 VALUE OFFSET
  /*
  This tag records the offset from the start of the TIFF header to the
  position where the value itself is recorded. In cases where the value fits
  in 4 Bytes, the value itself is recorded. If the value is smaller than 4
  Bytes, the value is stored in the 4-Byte area starting from the left, i.e.,
  from the lower end of the byte offset area. For example, in big endian
  format, if the type is SHORT and the value is 1, it is recorded as
  00010000.H.
  */
}

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

export async function entries(
  path: string,
): Promise<ExifEntry[]> {
  const file = await Deno.open(path);
  const buffer = new Uint8Array(2);

  async function readAscii(length: number) {
    // Subtract 1 because the length is \0 terminator included.
    const strBuf = new Uint8Array(length - 1);
    await Deno.read(file.rid, strBuf);
    return new TextDecoder().decode(strBuf);
  }

  async function readUint16(littleEndian = false): Promise<number> {
    let buf: number = 0;
    await Deno.read(file.rid, buffer);
    if (littleEndian) {
      buf = (buffer[1] << 8) + buffer[0];
    } else {
      buf = (buffer[0] << 8) + buffer[1];
    }
    return buf;
  }

  // JPEG?
  if (0xFFD8 !== await readUint16()) {
    console.error("Not a JPEG");
    return [];
  }
  // Seek to APP1
  while (0xFFe1 !== await readUint16()) {}
  const app1len = await readUint16(false);
  let curr = file.seekSync(0, Deno.SeekMode.Current);
  const tiffHeader = file.seekSync(6, Deno.SeekMode.Current);

  // TIFF header
  let byteOrder = await readUint16();
  let littleEndian = byteOrder === 0x4949;
  file.seekSync(6, Deno.SeekMode.Current);
  let count = await readUint16(littleEndian);

  const result: ExifEntry[] = [];
  const ifds = new Uint8Array(IFD_SIZE * count);
  curr = file.seekSync(0, Deno.SeekMode.Current);
  await Deno.read(file.rid, ifds);
  for (let i = 0; i < count; i++) {
    console.log("current offset: ", curr + i * IFD_SIZE);
    const view = new DataView(ifds.buffer, i * IFD_SIZE);
    const tag = view.getUint16(0, littleEndian);
    const type = view.getUint16(2, littleEndian);
    const count = view.getUint32(4, littleEndian);
    const offset = view.getUint32(8, littleEndian);
    const res: ExifEntry = {
      tag,
      type,
      count,
      offset: offset + tiffHeader,
      size: valueSize(count, type),
      value: -1,
    };

    switch (res.type) {
      case IFDType.ASCII:
        await file.seek(res.offset, Deno.SeekMode.Start);
        res.value = await readAscii(res.count);
        break;
      case IFDType.BYTE:
      case IFDType.SHORT:
        res.value = view.getUint16(8, littleEndian);
        break;
      case IFDType.LONG:
        res.value = offset;
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

    console.log(res);

    result.push(res);
  }

  Deno.close(file.rid);
  return result;
}
