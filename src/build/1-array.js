console.log("--- 1-array.ts ---");
const display = console.log;
// javascript may morph data structures, like a big array with single unrealisitaclly big number.
// if set an array of 12 bytes,
// then decide it's an array of 32-bit ints.
// then it effectively  holds 3 numbers,
const memoryChunkBytes = 12;
const intSize = 32;
const memoryChunkBits = memoryChunkBytes * 8;
let countNumbers = memoryChunkBits / intSize;
display(`Count of 32 Bit Numbers in 12 Byte Array -> ${countNumbers}`);
// so if the array were to be indexed, for example,
// finding number at index of 1 would be,
const index = 1;
const arrayStartLocation = 0;
let offset = intSize * index;
let memoryBitLocation = arrayStartLocation + offset;
display(`Memory Locaiton of Index[1] in Such an Array -> ${memoryBitLocation}\n`);
// this gives some thoughts on why index starts at 0 in compsci.
// as well as why arrays comprise of a single type, (not referring to abstracted versions like lists).
// very simple stuff so far, you'd need to give array meaning,
const arr = new ArrayBuffer(6); // this is the actual array
display(arr);
const arr8 = new Uint8Array(arr); // this is the view into the array (gives meaning)
display(arr8);
console.log('\n');
arr8[0] = 17;
console.log('set arr8[0] to 17');
display(arr);
display(arr8);
display('\n');
arr8[2] = 17;
console.log('set arr8[2] to 17');
display(arr);
display(arr8);
display('\n');
const arr16 = new Uint16Array(arr); // another window to the arr, to view and modify
console.log('create arr16 on arr');
display(arr);
display(arr8);
display(arr16);
display('\n');
// the result make me think about how we read and convert binary to denary
// vs how it's actually written and read from the memory
arr16[2] = 0x4545;
console.log('set arr16[2] to 0x4545');
display(arr);
display(arr8);
display(arr16);
display('\n');
// arrays don't insert, it overrides or set it,
// this is fundamentally how it is searched and inserted and hence formed and cannot be inserted because of that.
// cannot grow, hence other data structures exist.
