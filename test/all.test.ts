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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 450)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.033)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.2)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:16 11:33:20")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:07:16 11:33:20")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 4)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 9)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 14.1)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 5722)
    assertEquals(entry.size, 5722)
    assertEquals(entry.value, "5722 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 82)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0046)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 50)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:03:07 09:55:46")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:03:07 09:55:46")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  2)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.5)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 2151)
    assertEquals(entry.size, 2151)
    assertEquals(entry.value, "2151 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 36)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.2)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.5)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 150)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:08:15 17:50:57")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:08:15 17:50:57")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.9893515)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.59)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.62)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.62)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 40960)
    assertEquals(entry.size, 40960)
    assertEquals(entry.value, "40960 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 40964)
  assert(entry, "Did not find tag 40964")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 13)
    assertEquals(entry.size, 13)
    assertEquals(entry.value, "RelatedSound")
  }
  entry = result.find(r => r.tag === 41493)
  assert(entry, "Did not find tag 41493")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 39)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 77)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 314)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 314)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.004)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.5)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 80)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:09:08 11:02:17")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:09:08 11:02:17")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.44)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.60)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 6940)
    assertEquals(entry.size, 6940)
    assertEquals(entry.value, "6940 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 3648)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2736)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.00)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.8)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 200)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:03:10 15:10:48")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:03:10 15:10:48")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, -0.5)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.00)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 15)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.85938)
  }
  entry = result.find(r => r.tag === 37396)
  assert(entry, "Did not find tag 37396")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "1136, 852, 280, 280")
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 33270)
    assertEquals(entry.size, 33270)
    assertEquals(entry.value, "33270 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 64)
    assertEquals(entry.size, 64)
    assertEquals(entry.value, "64 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 70)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 35)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.01044932)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.7)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:38:20")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:38:20")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 16.6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 77)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 1.49399999")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 53, 4.33799999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 36, 47.23")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "06")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00676132)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.1)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:44:01")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:44:01")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 28)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 6.39000000")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 53.4540000")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 42, 29.03")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "05")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00813669)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.7)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:43:21")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:43:21")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.1)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 38)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 6.11400000")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 53.8859999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 41, 49.03")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "05")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.01)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.4)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 17:00:07")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 17:00:07")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 15)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 70)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 27, 52.0380000")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 53.322")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 57, 41.37")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "04")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00761035)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.1)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:55:37")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:55:37")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 28)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 27, 57.6419999")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 44.8019999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 54, 0.19")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "04")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.01543209)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:46:53")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:46:53")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 22.1)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 103)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 5.67599999")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 48.6179999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 45, 20.91")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "05")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00560852)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.5)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:29:49")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:29:49")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 28)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 1.76399999")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 53, 7.42199999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 28, 17.240")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "06")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.01555209)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.9)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 103)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:52:15")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:52:15")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 112)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 2.11799999")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 52, 45.1680000")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 50, 40.9")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "04")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.013)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.9)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:28:39")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:10:22 16:28:39")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.9)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3298)
    assertEquals(entry.size, 3298)
    assertEquals(entry.value, "3298 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 126)
    assertEquals(entry.size, 126)
    assertEquals(entry.value, "126 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 112)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "43, 28, 2.81400000")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "11, 53, 6.45599999")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "14, 27, 7.24")
  }
  entry = result.find(r => r.tag === 8)
  assert(entry, "Did not find tag 8")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "06")
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 18)
  assert(entry, "Did not find tag 18")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 10)
    assertEquals(entry.size, 10)
    assertEquals(entry.value, "WGS-84   ")
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2008:10:23")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:02:19 06:40:05")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:02:19 06:40:05")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.2)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.50)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.49)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.00)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 21.8)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 238)
    assertEquals(entry.size, 238)
    assertEquals(entry.value, "238 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3704)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3704)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.006)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.1)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:30 15:56:01")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:30 15:56:01")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.37500)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.62500)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 9)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 135)
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37520)
  assert(entry, "Did not find tag 37520")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "00")
  }
  entry = result.find(r => r.tag === 37521)
  assert(entry, "Did not find tag 37521")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "00")
  }
  entry = result.find(r => r.tag === 37522)
  assert(entry, "Did not find tag 37522")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "00")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 68)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4438.356)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4445.969)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 0)
  assert(entry, "Did not find tag 0")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "0x02, 0x02, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.004)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.6)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 19)
    assertEquals(entry.size, 19)
    assertEquals(entry.value, "2005:08:13 09:47:23")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 19)
    assertEquals(entry.size, 19)
    assertEquals(entry.value, "2005:08:13 09:47:23")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "3 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  8)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.4)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.4)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 16.8)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "100, 0")
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "78, 0")
  }
  entry = result.find(r => r.tag === 41493)
  assert(entry, "Did not find tag 41493")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 80)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 102)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 0)
  assert(entry, "Did not find tag 0")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "0x02, 0x02, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "S")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 0, 22.278,  0")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "36, 3.385,  0")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.02)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 800)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:09 22:47:44")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:09 22:47:44")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.91)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.97)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 57.019)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 5414)
    assertEquals(entry.size, 5414)
    assertEquals(entry.value, "5414 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2048)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1536)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8427.98)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8439.56)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42032)
  assert(entry, "Did not find tag 42032")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 0)
  assert(entry, "Did not find tag 0")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "0x02, 0x03, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 4097)
  assert(entry, "Did not find tag 4097")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2048)
  }
  entry = result.find(r => r.tag === 4098)
  assert(entry, "Did not find tag 4098")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1536)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.2)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 32)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.322)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.2750)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.290)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.3264)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.15)
  }
  entry = result.find(r => r.tag === 37396)
  assert(entry, "Did not find tag 37396")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "1754, 1356, 612, 607")
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 826)
    assertEquals(entry.size, 826)
    assertEquals(entry.value, "826 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37521)
  assert(entry, "Did not find tag 37521")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "016")
  }
  entry = result.find(r => r.tag === 37522)
  assert(entry, "Did not find tag 37522")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "016")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 3264)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2448)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 4)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.97)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 57)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42034)
  assert(entry, "Did not find tag 42034")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "4.15, 4.15, 2.2, 2.2")
  }
  entry = result.find(r => r.tag === 42035)
  assert(entry, "Did not find tag 42035")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Apple")
  }
  entry = result.find(r => r.tag === 42036)
  assert(entry, "Did not find tag 42036")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 34)
    assertEquals(entry.size, 34)
    assertEquals(entry.value, "iPhone 6 back camera 4.15mm f/2.2")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "40, 26, 49.10")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "W")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 3, 43, 29.11")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 6)
  assert(entry, "Did not find tag 6")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 639.588)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "18, 12, 22.06")
  }
  entry = result.find(r => r.tag === 12)
  assert(entry, "Did not find tag 12")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "K")
  }
  entry = result.find(r => r.tag === 13)
  assert(entry, "Did not find tag 13")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "T")
  }
  entry = result.find(r => r.tag === 17)
  assert(entry, "Did not find tag 17")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 212.872)
  }
  entry = result.find(r => r.tag === 23)
  assert(entry, "Did not find tag 23")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "T")
  }
  entry = result.find(r => r.tag === 24)
  assert(entry, "Did not find tag 24")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 32.872)
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2015:04:10")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.2)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 32)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:04:10 20:12:23")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.322)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.2750)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.2791)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.15)
  }
  entry = result.find(r => r.tag === 37396)
  assert(entry, "Did not find tag 37396")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, "1754, 1356, 612, 607")
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 826)
    assertEquals(entry.size, 826)
    assertEquals(entry.value, "826 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37521)
  assert(entry, "Did not find tag 37521")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "550")
  }
  entry = result.find(r => r.tag === 37522)
  assert(entry, "Did not find tag 37522")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "550")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 3264)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2448)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.97)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 57)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42034)
  assert(entry, "Did not find tag 42034")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "4.15, 4.15, 2.2, 2.2")
  }
  entry = result.find(r => r.tag === 42035)
  assert(entry, "Did not find tag 42035")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 6)
    assertEquals(entry.size, 6)
    assertEquals(entry.value, "Apple")
  }
  entry = result.find(r => r.tag === 42036)
  assert(entry, "Did not find tag 42036")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 34)
    assertEquals(entry.size, 34)
    assertEquals(entry.value, "iPhone 6 back camera 4.15mm f/2.2")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "40, 26, 49.10")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "W")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 3, 43, 29.11")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 6)
  assert(entry, "Did not find tag 6")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 639.61)
  }
  entry = result.find(r => r.tag === 7)
  assert(entry, "Did not find tag 7")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "18, 12, 23.06")
  }
  entry = result.find(r => r.tag === 12)
  assert(entry, "Did not find tag 12")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "K")
  }
  entry = result.find(r => r.tag === 13)
  assert(entry, "Did not find tag 13")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "T")
  }
  entry = result.find(r => r.tag === 17)
  assert(entry, "Did not find tag 17")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 211.201)
  }
  entry = result.find(r => r.tag === 23)
  assert(entry, "Did not find tag 23")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "T")
  }
  entry = result.find(r => r.tag === 24)
  assert(entry, "Did not find tag 24")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 31.201)
  }
  entry = result.find(r => r.tag === 29)
  assert(entry, "Did not find tag 29")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2015:04:10")
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.005)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1000)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:09 22:48:10")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2015:02:09 22:48:10")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.66)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.97)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 57.019)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 5414)
    assertEquals(entry.size, 5414)
    assertEquals(entry.value, "5414 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2048)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1536)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8427.98)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8439.56)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42032)
  assert(entry, "Did not find tag 42032")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "")
  }
  entry = result.find(r => r.tag === 0)
  assert(entry, "Did not find tag 0")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "0x02, 0x03, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 4097)
  assert(entry, "Did not find tag 4097")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2048)
  }
  entry = result.find(r => r.tag === 4098)
  assert(entry, "Did not find tag 4098")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1536)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.005)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:30 10:59:45")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:30 10:59:45")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  2)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 21.6)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.80)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 200)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:08:04 18:22:57")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:08:04 18:22:57")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.5)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.50)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.00)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.26)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.00)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.70)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 214)
    assertEquals(entry.size, 214)
    assertEquals(entry.value, "214 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2400)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1800)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2381)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2381)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 200)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:12:01 14:22:36")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:12:01 14:22:36")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  6)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.00)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.50)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1344)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1024)
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
    assertEquals(entry.value, 192)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 192)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1999:05:25 21:00:09")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1999:05:25 21:00:09")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.0)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.8)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 14.0)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 564)
    assertEquals(entry.size, 564)
    assertEquals(entry.value, "564 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1280)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 960)
  }
  entry = result.find(r => r.tag === 41493)
  assert(entry, "Did not find tag 41493")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 140)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.003)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 125)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:07 10:41:43")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:07 10:41:43")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  1)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 176)
    assertEquals(entry.size, 176)
    assertEquals(entry.value, "176 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1280)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 960)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.006)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.0)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:01:01 00:00:00")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "1998:01:01 00:00:00")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.7)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.0)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 142)
    assertEquals(entry.size, 142)
    assertEquals(entry.value, "142 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 40964)
  assert(entry, "Did not find tag 40964")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 13)
    assertEquals(entry.size, 13)
    assertEquals(entry.value, "            ")
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:05:31 21:50:40")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:05:31 21:50:40")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.00)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.5)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, -2.0)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.9)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 13.3)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 112)
    assertEquals(entry.size, 112)
    assertEquals(entry.value, "112 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1792)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1200)
  }
  entry = result.find(r => r.tag === 40964)
  assert(entry, "Did not find tag 40964")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 13)
    assertEquals(entry.size, 13)
    assertEquals(entry.value, "            ")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.013)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.5)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 80)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:06 11:51:40")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:06 11:51:40")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.6)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 12.8)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 308)
    assertEquals(entry.size, 308)
    assertEquals(entry.value, "308 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1200)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 125)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:02 14:30:10")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:09:02 14:30:10")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  2)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.4)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.6)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 9.9)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1087)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1087)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.2)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 150)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:12 20:33:14")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:04:12 20:33:14")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.4)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.6)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.1)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, -2.7)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.1)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.8)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1024)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 768)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2151)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2151)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 216)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 216)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:10:26 16:46:51")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0/0)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.0)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.5)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00)
  }
  entry = result.find(r => r.tag === 37382)
  assert(entry, "Did not find tag 37382")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0/0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.4)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 72)
    assertEquals(entry.size, 72)
    assertEquals(entry.value, "72 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.003)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:06:09 15:17:32")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2001:06:09 15:17:32")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.45122)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00000)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97086)
  }
  entry = result.find(r => r.tag === 37382)
  assert(entry, "Did not find tag 37382")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.750)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10.81)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 310)
    assertEquals(entry.size, 310)
    assertEquals(entry.value, "310 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 136)
    assertEquals(entry.size, 136)
    assertEquals(entry.value, "136 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3106.796)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3096.774)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 4097)
  assert(entry, "Did not find tag 4097")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 4098)
  assert(entry, "Did not find tag 4098")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 480)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.021)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.4)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 400)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:18 21:14:19")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2000:11:18 21:14:19")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.7)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.0)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 178)
    assertEquals(entry.size, 178)
    assertEquals(entry.value, "178 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 640)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 480)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 350)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 350)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0008)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.0)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 80)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "0220")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:25 19:31:26")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:25 19:31:26")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  5)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10.28)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.643856)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.400)
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37520)
  assert(entry, "Did not find tag 37520")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "0")
  }
  entry = result.find(r => r.tag === 37521)
  assert(entry, "Did not find tag 37521")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "0")
  }
  entry = result.find(r => r.tag === 37522)
  assert(entry, "Did not find tag 37522")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "0")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 5)
    assertEquals(entry.size, 5)
    assertEquals(entry.value, "0100")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2560)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 13745.704)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 13698.630)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.0000)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.004)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:07:19 18:25:29")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2005:07:19 18:25:29")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.0925926)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.90)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 31814)
    assertEquals(entry.size, 31814)
    assertEquals(entry.value, "31814 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2164)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1626)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0/0)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 38)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2013:07:05 03:18:27")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2013:07:05 03:18:27")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 3872)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2403)
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
    assertEquals(entry.value, 314)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 314)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.6)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:08:23 13:05:43")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:08:23 13:05:43")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.613)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 255)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 8)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 15)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 10368)
    assertEquals(entry.size, 10368)
    assertEquals(entry.value, "10368 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 4032)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 3024)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.00)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 4032)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2012)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 0)
  assert(entry, "Did not find tag 0")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "0x02, 0x02, 0x00, 0x00")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "51,  1, 30.00")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "E")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 7, 35, 31.00")
  }
  entry = result.find(r => r.tag === 5)
  assert(entry, "Did not find tag 5")
  if(entry) {
    assertEquals(entry.type, 1)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, 0x00)
  }
  entry = result.find(r => r.tag === 6)
  assert(entry, "Did not find tag 6")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 340)
  }
  entry = result.find(r => r.tag === 11)
  assert(entry, "Did not find tag 11")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 16)
  assert(entry, "Did not find tag 16")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "M")
  }
  entry = result.find(r => r.tag === 17)
  assert(entry, "Did not find tag 17")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 291.39)
  }
  entry = result.find(r => r.tag === 19)
  assert(entry, "Did not find tag 19")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 20)
  assert(entry, "Did not find tag 20")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 0,  0, 0.00")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.002)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.8)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:09:03 16:03:45")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:09:03 16:03:45")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.97)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.800)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1176)
    assertEquals(entry.size, 1176)
    assertEquals(entry.value, "1176 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2272)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1704)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10142.857)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10142.857)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.2)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.8)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:11:29 16:16:21")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:11:29 16:16:21")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.59)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.800)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1176)
    assertEquals(entry.size, 1176)
    assertEquals(entry.value, "1176 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1200)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7142.857)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7142.857)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.0000)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 4097)
  assert(entry, "Did not find tag 4097")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 4098)
  assert(entry, "Did not find tag 4098")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1200)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.2)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2002:04:21 00:30:33")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2002:04:21 00:30:33")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.4800000)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.2)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.50)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 32408)
    assertEquals(entry.size, 32408)
    assertEquals(entry.value, "32408 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1200)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 36)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 0.01)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.01)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.002)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.6)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:08:21 14:53:03")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:08:21 14:53:03")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  5)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 9.31)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.97)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.800)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1176)
    assertEquals(entry.size, 1176)
    assertEquals(entry.value, "1176 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1704)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 2272)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10142.857)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10142.857)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.0000)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.02)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 45.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:23 06:55:49")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:23 06:55:49")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 59.5)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 110)
    assertEquals(entry.size, 110)
    assertEquals(entry.value, "110 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 900)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 240)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 240)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.02)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  9)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1600)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:22 19:52:31")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2012:06:22 19:52:31")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.643856)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.33985)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, -0.3)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 37521)
  assert(entry, "Did not find tag 37521")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "00")
  }
  entry = result.find(r => r.tag === 37522)
  assert(entry, "Did not find tag 37522")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 3)
    assertEquals(entry.value, "00")
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3795.3488)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3904.306)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42033)
  assert(entry, "Did not find tag 42033")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 11)
    assertEquals(entry.size, 11)
    assertEquals(entry.value, "2131400336")
  }
  entry = result.find(r => r.tag === 42034)
  assert(entry, "Did not find tag 42034")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "100, 100, 0/0, 0/0")
  }
  entry = result.find(r => r.tag === 42036)
  assert(entry, "Did not find tag 42036")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 28)
    assertEquals(entry.size, 28)
    assertEquals(entry.value, "EF100mm f/2.8L Macro IS USM")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "N")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, "51, 25.4903, 0/0")
  }
  entry = result.find(r => r.tag === 3)
  assert(entry, "Did not find tag 3")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 2)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, "W")
  }
  entry = result.find(r => r.tag === 4)
  assert(entry, "Did not find tag 4")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 3)
    assertEquals(entry.size, 24)
    assertEquals(entry.value, " 0, 40.4137, 0/0")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.02)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:06:15 04:42:32")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2007:06:15 04:42:32")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  2)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.70)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 9)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.1)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 64)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 32)
    assertEquals(entry.size, 32)
    assertEquals(entry.value, "32 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 74)
    assertEquals(entry.size, 74)
    assertEquals(entry.value, "74 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 88)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 350)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 350)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.006)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 11.0)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 200)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:04 16:47:24")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:05:04 16:47:24")
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 90.00)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
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
    assertEquals(entry.value, 72.0000)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72.0000)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 360)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 216)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 300)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 300)
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
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 322)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 466)
  }
  entry = result.find(r => r.tag === 59932)
  assert(entry, "Did not find tag 59932")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 2060)
    assertEquals(entry.size, 2060)
    assertEquals(entry.value, "2060 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.03)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.88)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2004:08:31 19:52:58")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2004:08:31 19:52:58")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 5.1)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 42016)
  assert(entry, "Did not find tag 42016")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 33)
    assertEquals(entry.size, 33)
    assertEquals(entry.value, "00000000000000000000000000000111")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 96)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 96)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.013)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.90)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:08:17 09:24:48")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:08:17 09:24:48")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.0)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.30)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.10)
  }
  entry = result.find(r => r.tag === 37379)
  assert(entry, "Did not find tag 37379")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.78)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.10)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 16)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.70)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 286)
    assertEquals(entry.size, 286)
    assertEquals(entry.value, "286 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 59)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4000)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4000)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 3)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41996)
  assert(entry, "Did not find tag 41996")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.04)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.4)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 320)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2014:09:21 16:00:56")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.64385619)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.526068812)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0063)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.8)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 50)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:10:22 15:44:29")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2006:10:22 15:44:29")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  4)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.000000000)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.0)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 9)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 15.8)
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 125)
    assertEquals(entry.size, 125)
    assertEquals(entry.value, "125 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37520)
  assert(entry, "Did not find tag 37520")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "500")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 65535)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.00)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41991)
  assert(entry, "Did not find tag 41991")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41992)
  assert(entry, "Did not find tag 41992")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41993)
  assert(entry, "Did not find tag 41993")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41994)
  assert(entry, "Did not find tag 41994")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 42016)
  assert(entry, "Did not find tag 42016")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 33)
    assertEquals(entry.size, 33)
    assertEquals(entry.value, "77c6274bd589ad50395891e84a8b673b")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
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
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 180)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.002)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.9)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2003:12:14 12:01:44")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2003:12:14 12:01:44")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  5)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.97)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.66)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.97086)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 21.31)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 450)
    assertEquals(entry.size, 450)
    assertEquals(entry.value, "450 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37510)
  assert(entry, "Did not find tag 37510")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 264)
    assertEquals(entry.size, 264)
    assertEquals(entry.value, "264 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2272)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1704)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8114.286)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8114.286)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.0000)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 240)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 240)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.005)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  9)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 200)
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2008:03:15 09:52:01")
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.643856)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.33985)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, -1)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 3.3)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 66)
  }
  entry = result.find(r => r.tag === 41989)
  assert(entry, "Did not find tag 41989")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 150)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.005)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 10.0)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2004:08:27 13:52:55")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2004:08:27 13:52:55")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  3)
  }
  entry = result.find(r => r.tag === 37377)
  assert(entry, "Did not find tag 37377")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 7.66)
  }
  entry = result.find(r => r.tag === 37378)
  assert(entry, "Did not find tag 37378")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 6.66)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 4.00)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 5)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 24)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 15.44)
  }
  entry = result.find(r => r.tag === 37500)
  assert(entry, "Did not find tag 37500")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 590)
    assertEquals(entry.size, 590)
    assertEquals(entry.value, "590 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 41486)
  assert(entry, "Did not find tag 41486")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8114.286)
  }
  entry = result.find(r => r.tag === 41487)
  assert(entry, "Did not find tag 41487")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8114.286)
  }
  entry = result.find(r => r.tag === 41488)
  assert(entry, "Did not find tag 41488")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41495)
  assert(entry, "Did not find tag 41495")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41985)
  assert(entry, "Did not find tag 41985")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 41986)
  assert(entry, "Did not find tag 41986")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41987)
  assert(entry, "Did not find tag 41987")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 41988)
  assert(entry, "Did not find tag 41988")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.0000)
  }
  entry = result.find(r => r.tag === 41990)
  assert(entry, "Did not find tag 41990")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
  entry = result.find(r => r.tag === 33434)
  assert(entry, "Did not find tag 33434")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.030)
  }
  entry = result.find(r => r.tag === 33437)
  assert(entry, "Did not find tag 33437")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 2.8)
  }
  entry = result.find(r => r.tag === 34850)
  assert(entry, "Did not find tag 34850")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 34855)
  assert(entry, "Did not find tag 34855")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 36867)
  assert(entry, "Did not find tag 36867")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2026:11:24 14:41:16")
  }
  entry = result.find(r => r.tag === 36868)
  assert(entry, "Did not find tag 36868")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 20)
    assertEquals(entry.size, 20)
    assertEquals(entry.value, "2026:11:24 14:41:16")
  }
  entry = result.find(r => r.tag === 37121)
  assert(entry, "Did not find tag 37121")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 37122)
  assert(entry, "Did not find tag 37122")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value,  2)
  }
  entry = result.find(r => r.tag === 37380)
  assert(entry, "Did not find tag 37380")
  if(entry) {
    assertEquals(entry.type, 10)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 0.0)
  }
  entry = result.find(r => r.tag === 37381)
  assert(entry, "Did not find tag 37381")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 1.5)
  }
  entry = result.find(r => r.tag === 37383)
  assert(entry, "Did not find tag 37383")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37384)
  assert(entry, "Did not find tag 37384")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 0)
  }
  entry = result.find(r => r.tag === 37386)
  assert(entry, "Did not find tag 37386")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 8.4)
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 75)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 41728)
  assert(entry, "Did not find tag 41728")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 41729)
  assert(entry, "Did not find tag 41729")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 1)
    assertEquals(entry.value, "1 bytes undefined data")
  }
  entry = result.find(r => r.tag === 1)
  assert(entry, "Did not find tag 1")
  if(entry) {
    assertEquals(entry.type, 2)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "R98")
  }
  entry = result.find(r => r.tag === 2)
  assert(entry, "Did not find tag 2")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
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
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 283)
  assert(entry, "Did not find tag 283")
  if(entry) {
    assertEquals(entry.type, 5)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 8)
    assertEquals(entry.value, 72)
  }
  entry = result.find(r => r.tag === 296)
  assert(entry, "Did not find tag 296")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 2)
  }
  entry = result.find(r => r.tag === 37385)
  assert(entry, "Did not find tag 37385")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 9969)
  }
  entry = result.find(r => r.tag === 40961)
  assert(entry, "Did not find tag 40961")
  if(entry) {
    assertEquals(entry.type, 3)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 2)
    assertEquals(entry.value, 1)
  }
  entry = result.find(r => r.tag === 40962)
  assert(entry, "Did not find tag 40962")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 100)
  }
  entry = result.find(r => r.tag === 40963)
  assert(entry, "Did not find tag 40963")
  if(entry) {
    assertEquals(entry.type, 4)
    assertEquals(entry.count, 1)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, 73)
  }
  entry = result.find(r => r.tag === 36864)
  assert(entry, "Did not find tag 36864")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
  entry = result.find(r => r.tag === 40960)
  assert(entry, "Did not find tag 40960")
  if(entry) {
    assertEquals(entry.type, 7)
    assertEquals(entry.count, 4)
    assertEquals(entry.size, 4)
    assertEquals(entry.value, "4 bytes undefined data")
  }
});

