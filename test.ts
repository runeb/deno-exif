import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";

type ExifTags = Record<string, string | number>;

enum IFDType {
  BYTE = 1,
  ASCII = 2,
  SHORT = 3,
  LONG = 4,
  RATIONAL = 5,
  UNDEFINED = 7,
  SLONG = 9,
  SRATIONAL = 10,
}

type IFD = {
  tag: number;
  type: IFDType;
  count: number;
  offset: number;
};

async function readIFD() {
  // 0-1 TAG
  // 2-3 TYPE
  /*
  1 = BYTE (An 8-bit unsigned integer.)
  2 = ASCII (An 8-bit byte containing one 7-bit ASCII code. The final byte is
  terminated with NULL.)
  3 = SHORT (16bit (2 byte) unsigned int)
  4 = LONG (32bit (4 byte) unsigned int)
  5 = RATIONAL Two longs. First numerator, second denominator
  7 = UNDEFINED (8-bit byte may take any value, depending on field def.)
  9 = SLONG (32bit (4 byte) signed int) (2-bits complement)
  10 = SRATIONAL Two slongs. First numerator, second denominator
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
async function exif(path: string): Promise<ExifTags | null> {
  const file = await Deno.open(path);

  const buffer = new Uint8Array(2);

  let idx = 0;
  let maxBytes = 100000;

  async function readAscii(length: number) {
    const strBuf = new Uint8Array(length);
    await Deno.read(file.rid, strBuf);
    return new TextDecoder().decode(strBuf);
  }

  async function readUint32(
    offset: number = 0,
    littleEndian = false,
  ): Promise<number> {
    const b = new Uint8Array(4);
    const read = await Deno.read(file.rid, b);
    return new DataView(b.buffer).getUint32(0, littleEndian);
  }

  async function readUint16(
    offset: number = 0,
    littleEndian = false,
  ): Promise<number> {
    let buf: number = 0;
    const bytes = await Deno.read(file.rid, buffer);
    if (littleEndian) {
      buf = (buffer[1] << 8) + buffer[0];
    } else {
      buf = (buffer[0] << 8) + buffer[1];
    }
    idx += bytes || 0;
    return buf;
  }

  async function readIFD(littleEndian = false) {
    const cursor = (await file.seek(0, Deno.SeekMode.Current));
    const b = new Uint8Array(12);
    const read = await Deno.read(file.rid, b);
    if (read !== 12) {
      console.error("Brokenn stuff");
    }
    const offset = new DataView(b.buffer).getUint32(8, littleEndian);
    const res: IFD = {
      tag: new DataView(b.buffer).getUint16(0, littleEndian),
      type: new DataView(b.buffer).getUint16(2, littleEndian),
      count: new DataView(b.buffer).getUint32(4, littleEndian),
      offset: offset,
    };

    if (res.type == IFDType.ASCII) {
      await file.seek(res.offset, Deno.SeekMode.Start);
      const str = await readAscii(res.count);
      console.log(str);
    }
    await file.seek(cursor + (read || 0), Deno.SeekMode.Start);
  }

  console.log("jpeg", 0xFFd8 === await readUint16());
  console.log("APP", await readUint16());
  let len = await readUint16();
  console.log("length", len);
  file.seekSync(len - 2, Deno.SeekMode.Current);
  console.log("APP", await readUint16());
  len = await readUint16();
  console.log("length", len);
  const tiffHeader = file.seekSync(6, Deno.SeekMode.Current);
  // TIFF header
  file.seekSync(8, Deno.SeekMode.Current);
  let count = await readUint16(0, true);
  while (--count > 0) {
    await readIFD(true);
  }

  return {};
  /*
  const result: ExifTags = {};

  // http://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf
  while (idx < maxBytes) {
    await readUint16();
    switch (buf) {
      case 0xFFE1: // Start of EXIF
        var exifLength = await readUint16();
        console.log("exif len", exifLength);
        maxBytes = exifLength - idx;
        break;
      case 0x000B:
        const res =
          // Read the value, its 6 bytes further out
          // See page 102 at the following URL
          // http://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
          maxBytes = 0; // Stop scanning
        break;
    }
  }
  Deno.close(file.rid);
  return result;
  */
}

Deno.test("tag", async () => {
  const path = "./exif-samples/jpg/Canon_40D.jpg";
  const result = await exif(path);
  assert(result);
  assertEquals(result["Software"], "GIMP 2.4.5");
});
