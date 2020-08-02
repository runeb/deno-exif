import { entries } from "../exif.ts"
import { assert, assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
Deno.test('exif-samples/jpg/orientation/portrait_4.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_4.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 4)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_5.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_5.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_7.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_7.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 7)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_6.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_6.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_2.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_2.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_3.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_3.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_1.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_1.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_8.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_8.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 8)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_5.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_5.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_4.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_4.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 4)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_6.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_6.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_7.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_7.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 7)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_3.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_3.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_2.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_2.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/portrait_8.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/portrait_8.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 8)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/orientation/landscape_1.jpg', async () => {
  const path = 'test/exif-samples/jpg/orientation/landscape_1.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
});

Deno.test('exif-samples/jpg/Panasonic_DMC-FZ30.jpg', async () => {
  const path = 'test/exif-samples/jpg/Panasonic_DMC-FZ30.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "Panasonic")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "DMC-FZ30")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 16:39:24")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 208)
    assertEquals(entry.size, 208)
    assertEquals(entry.value, "208 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 8)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Nikon_COOLPIX_P1.jpg', async () => {
  const path = 'test/exif-samples/jpg/Nikon_COOLPIX_P1.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "          ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "COOLPIX P1")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:43:03")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Samsung_Digimax_i50_MP3.jpg', async () => {
  const path = 'test/exif-samples/jpg/Samsung_Digimax_i50_MP3.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 34)
    assertEquals(entry.size, 34)
    assertEquals(entry.value, "<Digimax i50 MP3, Samsung #1 MP3>")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "Samsung Techwin")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 34)
    assertEquals(entry.size, 34)
    assertEquals(entry.value, "<Digimax i50 MP3, Samsung #1 MP3>")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 19:03:37")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "COPYRIGHT, 2005")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat(" 1").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat(" 1").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Canon_40D_photoshop_import.jpg', async () => {
  const path = 'test/exif-samples/jpg/Canon_40D_photoshop_import.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 10:05:49")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/corrupted.jpg', async () => {
  const path = 'test/exif-samples/jpg/corrupted.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "OLYMPUS DIGITAL CAMERA         ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "OLYMPUS IMAGING CORP.  ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 17)
    assertEquals(entry.size, 17)
    assertEquals(entry.value, "u1020,S1020     ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("314").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("314").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "Version 1.0                    ")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:09:08 11:02:17")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 528)
    assertEquals(entry.size, 528)
    assertEquals(entry.value, "528 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Konica_Minolta_DiMAGE_Z3.jpg', async () => {
  const path = 'test/exif-samples/jpg/Konica_Minolta_DiMAGE_Z3.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 30)
    assertEquals(entry.size, 30)
    assertEquals(entry.value, "KONICA MINOLTA DIGITAL CAMERA")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "KONICA MINOLTA ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "DiMAGE Z3")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 16:45:37")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 118)
    assertEquals(entry.size, 118)
    assertEquals(entry.value, "118 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0021.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0021.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:08")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0027.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0027.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:09")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0025.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0025.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:09")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0042.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0042.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:11")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0040.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0040.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:11")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0029.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0029.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:09")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0012.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0012.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:07")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0038.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0038.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:11")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/gps/DSCN0010.jpg', async () => {
  const path = 'test/exif-samples/jpg/gps/DSCN0010.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "COOLPIX P6000")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Nikon Transfer 1.1 W")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:11:01 21:15:07")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Fujifilm_FinePix6900ZOOM.jpg', async () => {
  const path = 'test/exif-samples/jpg/Fujifilm_FinePix6900ZOOM.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "FUJIFILM")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "FinePix6900ZOOM")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:17:56")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "    ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Canon_40D.jpg', async () => {
  const path = 'test/exif-samples/jpg/Canon_40D.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "Canon EOS 40D")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 10:38:11")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Kodak_CX7530.jpg', async () => {
  const path = 'test/exif-samples/jpg/Kodak_CX7530.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "EASTMAN KODAK COMPANY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "KODAK CX7530 ZOOM DIGITAL CAMERA")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 10:39:26")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/hdr/canon_hdr_NO.jpg', async () => {
  const path = 'test/exif-samples/jpg/hdr/canon_hdr_NO.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "Canon PowerShot SX60 HS")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:26 04:20:03")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/hdr/iphone_hdr_NO.jpg', async () => {
  const path = 'test/exif-samples/jpg/hdr/iphone_hdr_NO.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Apple")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "iPhone 6")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "8.3")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/hdr/iphone_hdr_YES.jpg', async () => {
  const path = 'test/exif-samples/jpg/hdr/iphone_hdr_YES.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Apple")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "iPhone 6")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "8.3")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/hdr/canon_hdr_YES.jpg', async () => {
  const path = 'test/exif-samples/jpg/hdr/canon_hdr_YES.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "Canon PowerShot SX60 HS")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:26 04:20:24")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/sony-cybershot.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/sony-cybershot.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "                               ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "SONY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "CYBERSHOT")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:30 10:59:45")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "SONY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "CYBERSHOT")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:30 10:59:45")
  }
});

Deno.test('exif-samples/jpg/exif-org/fujifilm-finepix40i.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/fujifilm-finepix40i.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "FUJIFILM")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "FinePix40i")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 34)
    assertEquals(entry.size, 34)
    assertEquals(entry.value, "Digital Camera FinePix40i Ver1.39")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:08:04 18:22:57")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "          ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/sony-d700.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/sony-d700.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "SONY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "DSC-D700")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:12:01 14:22:36")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
});

Deno.test('exif-samples/jpg/exif-org/kodak-dc240.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/kodak-dc240.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "EASTMAN KODAK COMPANY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "KODAK DC240 ZOOM DIGITAL CAMERA")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("192").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("192").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 33)
    assertEquals(entry.size, 33)
    assertEquals(entry.value, "KODAK DC240 ZOOM DIGITAL CAMERA ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/olympus-c960.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/olympus-c960.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "OLYMPUS DIGITAL CAMERA         ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "OLYMPUS OPTICAL CO.,LTD")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 12)
    assertEquals(entry.size, 12)
    assertEquals(entry.value, "C960Z,D460Z")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 23)
    assertEquals(entry.size, 23)
    assertEquals(entry.value, "OLYMPUS CAMEDIA Master")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:08 20:14:38")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/sanyo-vpcg250.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/sanyo-vpcg250.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "SANYO DIGITAL CAMERA")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "SANYO Electric Co.,Ltd.")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "SR6 ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "V06P-74")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:01:01 00:00:00")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/ricoh-rdc5300.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/ricoh-rdc5300.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 12)
    assertEquals(entry.size, 12)
    assertEquals(entry.value, "RICOH      ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "RDC-5300       ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 26)
    assertEquals(entry.size, 26)
    assertEquals(entry.value, "(C) by RDC-5300 User     ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/nikon-e950.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/nikon-e950.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "          ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "NIKON")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "E950")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "v981-79")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:06 11:51:40")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/fujifilm-mx1700.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/fujifilm-mx1700.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "FUJIFILM")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 12)
    assertEquals(entry.size, 12)
    assertEquals(entry.value, "MX-1700ZOOM")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 35)
    assertEquals(entry.size, 35)
    assertEquals(entry.value, "Digital Camera MX-1700ZOOM Ver1.00")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:02 14:30:10")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "          ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/fujifilm-dx10.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/fujifilm-dx10.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "FUJIFILM")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "DX-10")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 29)
    assertEquals(entry.size, 29)
    assertEquals(entry.value, "Digital Camera DX-10 Ver1.00")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:12 20:33:14")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "J P Bowen ")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/kodak-dc210.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/kodak-dc210.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "Eastman Kodak Company")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "DC210 Zoom (V05.00)")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("216").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("216").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
});

Deno.test('exif-samples/jpg/exif-org/canon-ixus.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/canon-ixus.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "Canon DIGITAL IXUS")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:06:09 15:17:32")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/exif-org/sanyo-vpcsx550.jpg', async () => {
  const path = 'test/exif-samples/jpg/exif-org/sanyo-vpcsx550.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "SANYO DIGITAL CAMERA")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "SANYO Electric Co.,Ltd.")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 7)
    assertEquals(entry.size, 7)
    assertEquals(entry.value, "SX113 ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "V113p-73")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:18 21:14:19")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/33-type_error.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/33-type_error.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 44)
    assertEquals(entry.size, 44)
    assertEquals(entry.value, "El cielo sobre Berlin (Heaven above Berlin)")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 19)
    assertEquals(entry.size, 19)
    assertEquals(entry.value, "Canon PowerShot G9")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("350").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("350").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 12)
    assertEquals(entry.size, 12)
    assertEquals(entry.value, "GIMP 2.6.11")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2011:08:25 15:09:41")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/35-empty.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/35-empty.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "CASIO COMPUTER CO.,LTD ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "EX-Z750")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "1.00                 ")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:07:19 18:25:29")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 46)
    assertEquals(entry.size, 46)
    assertEquals(entry.value, "46 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/30-type_error.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/30-type_error.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 29)
    assertEquals(entry.size, 29)
    assertEquals(entry.value, "Adobe Photoshop Elements 7.0")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2013:07:07 17:20:59")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 19)
    assertEquals(entry.size, 19)
    assertEquals(entry.value, "Francisco Gonzalez")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/42_IndexError.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/42_IndexError.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "OLYMPUS DIGITAL CAMERA         ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "OLYMPUS IMAGING CORP.  ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 17)
    assertEquals(entry.size, 17)
    assertEquals(entry.value, "E-P3            ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("314").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("314").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "Version 1.3                    ")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:08:23 13:05:43")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 64)
    assertEquals(entry.size, 64)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 64)
    assertEquals(entry.size, 64)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 528)
    assertEquals(entry.size, 528)
    assertEquals(entry.value, "528 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/67-0_length_string.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/67-0_length_string.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "samsung")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "SM-G930F")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2016:09:12 10:05:31")
  }
});

Deno.test('exif-samples/jpg/tests/11-tests.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/11-tests.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "Canon DIGITAL IXUS 40")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:09:03 16:03:45")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 4097)
  assert(entry, "Did not find tag 4097")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2272)
  }
  entry = result.find(r => r.tag === 4098)
  assert(entry, "Did not find tag 4098")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1704)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/22-canon_tags.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/22-canon_tags.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "Canon PowerShot SD300")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:11:29 16:16:21")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/36-memory_error.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/36-memory_error.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 24)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "CASIO COMPUTER CO.,LTD.")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "EX-M2  ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "1.01+R               ")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2002:04:21 00:30:33")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 40)
    assertEquals(entry.size, 40)
    assertEquals(entry.value, "40 bytes undefined data")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/28-hex_value.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/28-hex_value.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 22)
    assertEquals(entry.size, 22)
    assertEquals(entry.value, "Canon DIGITAL IXUS 40")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 47)
    assertEquals(entry.size, 47)
    assertEquals(entry.value, "Microsoft Windows Photo Gallery 6.0.6001.18000")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:08:31 10:41:19")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("0.01").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("0.01").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/45-gps_ifd.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/45-gps_ifd.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 15)
    assertEquals(entry.size, 15)
    assertEquals(entry.value, "Gran Turismo 5")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 23)
    assertEquals(entry.size, 23)
    assertEquals(entry.value, "Polyphony Digital Inc.")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 15)
    assertEquals(entry.size, 15)
    assertEquals(entry.value, "Gran Turismo 5")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "PMB Service Uploader")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:23 08:24:05")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 55)
    assertEquals(entry.size, 55)
    assertEquals(entry.value, "TM&Copyright (C) 2010 Sony Computer Entertainment Inc.")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/tests/46_UnicodeEncodeError.jpg', async () => {
  const path = 'test/exif-samples/jpg/tests/46_UnicodeEncodeError.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "Arion ater")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 21)
    assertEquals(entry.size, 21)
    assertEquals(entry.value, "Canon EOS-1D Mark IV")
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("240").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("240").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 42)
    assertEquals(entry.size, 42)
    assertEquals(entry.value, "Adobe Photoshop Lightroom 4.0 (Macintosh)")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:23 16:19:48")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 15)
    assertEquals(entry.size, 15)
    assertEquals(entry.value, "Robert Muckley")
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 33)
    assertEquals(entry.size, 33)
    assertEquals(entry.value, "Copyright © 2012 Robert Muckley")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Sony_HDR-HC3.jpg', async () => {
  const path = 'test/exif-samples/jpg/Sony_HDR-HC3.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "SONY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "HDR-HC3")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:20:21")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "SONY")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "HDR-HC3")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/PaintTool_sample.jpg', async () => {
  const path = 'test/exif-samples/jpg/PaintTool_sample.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Pentax_K10D.jpg', async () => {
  const path = 'test/exif-samples/jpg/Pentax_K10D.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "PENTAX Corporation ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "PENTAX K10D        ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("350").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("350").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 15:56:49")
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 45)
    assertEquals(entry.size, 45)
    assertEquals(entry.value, "Laitche (This file is in the public domain.)")
  }
  entry = result.find(r => r.tag === 40093)
  assert(entry, "Did not find tag 40093")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "0x77, 0x00, 0x77, 0x00, 0x77, 0x00, 0x2e, 0x00, 0x6c, 0x00, 0x61, 0x00, 0x69, 0x00, 0x74, 0x00, 0x63, 0x00, 0x68, 0x00, 0x65, 0x00, 0x2e, 0x00, 0x63, 0x00, 0x6f, 0x00, 0x6d, 0x00, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/xmp/BlueSquare.jpg', async () => {
  const path = 'test/exif-samples/jpg/xmp/BlueSquare.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 88)
    assertEquals(entry.size, 88)
    assertEquals(entry.value, "XMPFiles BlueSquare test file, created in Photoshop CS2, saved as .psd, .jpg, and .tif.")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72.0000").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72.0000").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 30)
    assertEquals(entry.size, 30)
    assertEquals(entry.value, "Adobe Photoshop CS2 Macintosh")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:09:07 15:09:51")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/xmp/no_exif.jpg', async () => {
  const path = 'test/exif-samples/jpg/xmp/no_exif.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 256)
  assert(entry, "Did not find tag 256")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 4134)
  }
  entry = result.find(r => r.tag === 257)
  assert(entry, "Did not find tag 257")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5906)
  }
  entry = result.find(r => r.tag === 258)
  assert(entry, "Did not find tag 258")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "8, 8, 8")
  }
  entry = result.find(r => r.tag === 262)
  assert(entry, "Did not find tag 262")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 18)
    assertEquals(entry.size, 18)
    assertEquals(entry.value, "Der Goalie bin ig")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 277)
  assert(entry, "Did not find tag 277")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("300").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 31)
    assertEquals(entry.size, 31)
    assertEquals(entry.value, "Adobe Photoshop CC (Macintosh)")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:09:22 10:56:35")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 7)
    assertEquals(entry.size, 7)
    assertEquals(entry.value, "CREDIT")
  }
  entry = result.find(r => r.tag === 40091)
  assert(entry, "Did not find tag 40091")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 36)
    assertEquals(entry.size, 36)
    assertEquals(entry.value, "0x44, 0x00, 0x65, 0x00, 0x72, 0x00, 0x20, 0x00, 0x47, 0x00, 0x6f, 0x00, 0x61, 0x00, 0x6c, 0x00, 0x69, 0x00, 0x65, 0x00, 0x20, 0x00, 0x62, 0x00, 0x69, 0x00, 0x6e, 0x00, 0x20, 0x00, 0x69, 0x00, 0x67, 0x00, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 40092)
  assert(entry, "Did not find tag 40092")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 304)
    assertEquals(entry.size, 304)
    assertEquals(entry.value, "0x44, 0x00, 0x65, 0x00, 0x72, 0x00, 0x20, 0x00, 0x47, 0x00, 0x6f, 0x00, 0x61, 0x00, 0x6c, 0x00, 0x69, 0x00, 0x65, 0x00, 0x20, 0x00, 0x62, 0x00, 0x69, 0x00, 0x6e, 0x00, 0x20, 0x00, 0x69, 0x00, 0x67, 0x00, 0x2c, 0x00, 0x20, 0x00, 0x28, 0x20, 0x46, 0x00, 0x69, 0x00, 0x6c, 0x00, 0x6d, 0x00, 0x20, 0x00, 0x76, 0x00, 0x6f, 0x00, 0x6e, 0x00, 0x20, 0x00, 0x53, 0x00, 0x61, 0x00, 0x62, 0x00, 0x69, 0x00, 0x6e, 0x00, 0x65, 0x00, 0x20, 0x00, 0x42, 0x00, 0x6f, 0x00, 0x73, 0x00, 0x73, 0x00, 0x20, 0x00, 0x6d, 0x00, 0x69, 0x00, 0x74, 0x00, 0x20, 0x00, 0x4d, 0x00, 0x61, 0x00, 0x72, 0x00, 0x63, 0x00, 0x75, 0x00, 0x73, 0x00, 0x20, 0x00, 0x53, 0x00, 0x69, 0x00, 0x67, 0x00, 0x6e, 0x00, 0x65, 0x00, 0x72, 0x00, 0x2c, 0x00, 0x20, 0x00, 0x53, 0x00, 0x6f, 0x00, 0x6e, 0x00, 0x6a, 0x00, 0x61, 0x00, 0x20, 0x00, 0x52, 0x00, 0x69, 0x00, 0x65, 0x00, 0x73, 0x00, 0x65, 0x00, 0x6e, 0x00, 0x2c, 0x00, 0x20, 0x00, 0x50, 0x00, 0x61, 0x00, 0x73, 0x00, 0x63, 0x00, 0x61, 0x00, 0x6c, 0x00, 0x20, 0x00, 0x55, 0x00, 0x6c, 0x00, 0x6c, 0x00, 0x69, 0x00, 0x2")
  }
  entry = result.find(r => r.tag === 40093)
  assert(entry, "Did not find tag 40093")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "0x43, 0x00, 0x52, 0x00, 0x45, 0x00, 0x44, 0x00, 0x49, 0x00, 0x54, 0x00, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 40094)
  assert(entry, "Did not find tag 40094")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "0x74, 0x00, 0x61, 0x00, 0x67, 0x00, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 40095)
  assert(entry, "Did not find tag 40095")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 14)
    assertEquals(entry.size, 14)
    assertEquals(entry.value, "0x43, 0x00, 0x69, 0x00, 0x6e, 0x00, 0x65, 0x00, 0x6d, 0x00, 0x61, 0x00, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 59932)
  assert(entry, "Did not find tag 59932")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 2060)
    assertEquals(entry.size, 2060)
    assertEquals(entry.value, "2060 bytes undefined data")
  }
});

Deno.test('exif-samples/jpg/Ricoh_Caplio_RR330.jpg', async () => {
  const path = 'test/exif-samples/jpg/Ricoh_Caplio_RR330.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "Caplio ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 12)
    assertEquals(entry.size, 12)
    assertEquals(entry.value, "RR330      ")
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:36:21")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Fujifilm_FinePix_E500.jpg', async () => {
  const path = 'test/exif-samples/jpg/Fujifilm_FinePix_E500.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "FUJIFILM")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 16)
    assertEquals(entry.size, 16)
    assertEquals(entry.value, "FinePix E500   ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("96").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("96").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 16:49:10")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "    ")
  }
  entry = result.find(r => r.tag === 50341)
  assert(entry, "Did not find tag 50341")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 28)
    assertEquals(entry.size, 28)
    assertEquals(entry.value, "28 bytes undefined data")
  }
});

Deno.test('exif-samples/jpg/mobile/jolla.jpg', async () => {
  const path = 'test/exif-samples/jpg/mobile/jolla.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Jolla")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Jolla")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:09:21 16:00:56")
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Olympus_C8080WZ.jpg', async () => {
  const path = 'test/exif-samples/jpg/Olympus_C8080WZ.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "OLYMPUS CORPORATION")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "C8080WZ")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 13:03:47")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Canon_PowerShot_S40.jpg', async () => {
  const path = 'test/exif-samples/jpg/Canon_PowerShot_S40.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "Canon PowerShot S40")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2003:12:14 12:01:44")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("180").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Nikon_D70.jpg', async () => {
  const path = 'test/exif-samples/jpg/Nikon_D70.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 18)
    assertEquals(entry.size, 18)
    assertEquals(entry.value, "NIKON CORPORATION")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "NIKON D70")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("240").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("240").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 10:03:44")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/Canon_DIGITAL_IXUS_400.jpg', async () => {
  const path = 'test/exif-samples/jpg/Canon_DIGITAL_IXUS_400.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Canon")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 23)
    assertEquals(entry.size, 23)
    assertEquals(entry.value, "Canon DIGITAL IXUS 400")
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:15:01")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/WWL_(Polaroid)_ION230.jpg', async () => {
  const path = 'test/exif-samples/jpg/WWL_(Polaroid)_ION230.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "WWL     ")
  }
  entry = result.find(r => r.tag === 271)
  assert(entry, "Did not find tag 271")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 9)
    assertEquals(entry.size, 9)
    assertEquals(entry.value, "WWL     ")
  }
  entry = result.find(r => r.tag === 272)
  assert(entry, "Did not find tag 272")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 8)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "ION230")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 17:32:06")
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 6)
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 531)
  assert(entry, "Did not find tag 531")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

Deno.test('exif-samples/jpg/long_description.jpg', async () => {
  const path = 'test/exif-samples/jpg/long_description.jpg'
  const result = await entries(path);
  let entry
  entry = result.find(r => r.tag === 270)
  assert(entry, "Did not find tag 270")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 420)
    assertEquals(entry.size, 420)
    assertEquals(entry.value, "Operation Mountain Viper put the soldiers of A Company, 2nd Battalion 22nd Infantry Division, 10th Mountain in the Afghanistan province of Daychopan to search for Taliban and or weapon caches that could be used against U.S. and allied forces. Soldiers quickly walk to the ramp of the CH-47 Chinook cargo helicopter that will return them to Kandahar Army Air Field.  (U.S. Army photo by Staff Sgt. Kyle Davis) (Released)")
  }
  entry = result.find(r => r.tag === 274)
  assert(entry, "Did not find tag 274")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 305)
  assert(entry, "Did not find tag 305")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "GIMP 2.4.5")
  }
  entry = result.find(r => r.tag === 306)
  assert(entry, "Did not find tag 306")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:31 10:50:00")
  }
  entry = result.find(r => r.tag === 315)
  assert(entry, "Did not find tag 315")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 15)
    assertEquals(entry.size, 15)
    assertEquals(entry.value, "SSG KYLE DAVIS")
  }
  entry = result.find(r => r.tag === 33432)
  assert(entry, "Did not find tag 33432")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 259)
  assert(entry, "Did not find tag 259")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 282)
  assert(entry, "Did not find tag 282")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(parseFloat(entry.value as string).toPrecision(3), parseFloat("72").toPrecision(3))
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
});

