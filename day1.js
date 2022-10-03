// Arrays in js

// In contrast to variables, an array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address.

// Ways to create arrays

//First method (Using Array Constructor)
const arr = Array(1, 2, 3, 4);
console.log(arr);

// Using Square Brackets

const arr2 = ["deepesh", "bhavesh", 3, 2];
console.log(arr2);

// Create Array wiht values

const numbers = [1, 2, 3, 4, 8, 10, 37, 49];
console.log("Numbers:", numbers);

// Length Property to calculte the length of an array
console.log("Numbers:", numbers.length);

// Array can have items of different data types

const diffA = [
  "deepesh",
  1,
  3,
  4,
  "deepesh",
  { skills: ["HTML", "JS", "JAVA", "PYTHON"] },
];
console.log(diffA);

// Split method in the array

// we can split a string at different positions, and we can change to an array.

let js = "deepesh adhikari";
// console.log(js.split(" , "));
const a = js.split("");
console.log(a);
const b = a[0];
console.log(b);
const arrb = Array(b);
console.log(arrb);

// get he last index of array

const newArr = [1, 2, 3, 4, 5, 6, , 77, 9];
const lastIndex = newArr.length - 1;
console.log(lastIndex);

// We can also modify the array elements

const numberss = [1, 2, 3, 4, 5];
console.log(numberss);
numberss[0] = 10;
console.log(numberss);

//Methods to manipulate array
//There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
//Create a array
const ab = Array();
console.log(ab);
const ba = Array(8);
console.log(ba);

// Creating static values with fill
// fill: Fill all the array elements with a static value

ba.fill("X");
console.log(ba);
