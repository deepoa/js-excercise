// map filter and reduce and polyfills

const nums = [1, 2, 3, 4, 5, 6, 7];

// const newArr = nums.filter((t) => {
//   return t > 3;
// });

// console.log(newArr);

// const arr = nums.map((t) => {
//   if (t > 3) return t;
// });

// console.log(arr);

// Reduce method with array
// reduces an array of values down to a single value
//  if there is no initial value , it takes  first element of array as a initial value for accumulator
// const newArr = nums.reduce((acc, current, index, array) => {
//   return acc + current;
// }, 0);

// console.log(newArr);

/// Polyfills *************************************************************************************** left

// forEach and map diff
// forEach does'nt return anything but map return a new array , we can chain another method in map but we cannot do with forEach  because it doesn't return anything

// const a = nums.forEach((current) => {
//   return current;
// });
// console.log(a);

// const students = [
//   { name: "deepesh", Age: "25", interview: "google" },
//   { name: "shubham", Age: "23", interview: "pwc" },
//   { name: "rambo", Age: "4", interview: "fb" },
//   { name: "ashish", Age: "28", interview: "meta" },
// ];

// let names = [];

// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

// console.log(names);

// const a = students.map((ele) => ele.name.toUpperCase());
// console.log(a);

// const a = students.filter((ele) => ele.Age > 10);
// console.log(a);
// const a = students.reduce((a, e) => {
//   return a + e.Age;
// }, 0);

// console.log(a);

// FUNCTIONS ***************************************************************************

// function Declaration
// function square(num) {
//   return num * num;
// }

// function expression
// when we store a function in a variable is known as function expression
// const a = function () {
//   console.log("deepesh");
// };

///FIRST CLASS FUNCTION => functions are treated as varaible are known as first class functions, everything a varabile can do a funciton can also do

// What is IIFI?Immediately Invoked Function Expression

// (function square(a) {
//   return x;
// })();

// Output Based Questions on IIFI
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);    // output wil be 1 because of closure in js

// ******************************** arrow function and regular function difference left  and rest and spread operator are also left
