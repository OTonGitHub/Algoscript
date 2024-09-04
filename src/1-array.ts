console.log('-- SUMMARY START--');
const arr_x = new ArrayBuffer(4);
const arr_int8 = new Int8Array(arr_x);
const arr_int16 = new Int16Array(arr_x);

arr_int8[0] = 69;
console.log('INSERT ARR_8 POSITION 0');
console.log(arr_int8);
console.log(arr_int16);
console.log('INSERT ARR_16 POSITION 1');
arr_int16[1] = 69;
console.log(arr_int8);
console.log(arr_int16);
console.log('-- SUMMARY END   --\n');

console.log('--- 1-array.ts ---');
const display = console.log;
// javascript may morph data structures, like a big array with single unrealistically big number.

// if set an array of 12 bytes,
// then decide it's an array of 32-bit ints.
// then it effectively  holds 3 numbers,
// because each int takes 4 bytes, divided by total 12 bytes, is 3.

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
display(
  `Memory Location of Index[1] in Such an Array -> ${memoryBitLocation}\n`
);

// this gives some thoughts on why index starts at 0 in comp-sci.
// as well as why arrays compromise of a single type, (not referring to abstracted versions like lists).
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
// in deletion, think about how null works, its basically, 0th value, named way for "not something" but it's something.

// Big O of Accessing Arrays?
// O = arr + width * offset.
// there does-not seem to be any growth of compute even if index increase,
// so it must be O(1).
// compared to something like O(2^n), where on every call, it recursively doubles to compute,

// this is very fast and instantaneous, on the 'kernel' level, just run the math, take from memory.
// but how using the address it is taken from memory instantly, I do not know,
// perhaps it's some sort of grid/map access, so technically no matter where the data, it would be
// the same time for all, actual positional data. Perhaps this is how indexing in DB kinda works?

// best example is in class language like C, look how program starts main(int argc, char* argv[])
// needs count of arguments, to set array size to receive arguments from the commandline.
// so javascript arrays, ain't actually arrays, does use memory buffer underneath, but
// probably just uses some kind of maps underneath and algorithms to optimize based on data.
