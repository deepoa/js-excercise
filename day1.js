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

// Concatenating array using concat
// concat : to concat two arrays

const firstList = [1, 2, 3, 5];
const secondList = [3, 4, 5, 6, 6];
console.log(firstList.concat(secondList));

//Getting index an element in arr array
// indexOf: To check if the item exist in a array . If it exists it return the index otherwise it will return -1 , it gives index of array elements

const thirdList = [1, 2, 3, 4, 5];
console.log(thirdList.indexOf(5));
console.log(thirdList.indexOf(0));

// Getting last index of an element in array

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
console.log(thirdList.lastIndexOf(5));

// Checking array
// Array.isArray:To check if the data type is an array
const j = 100;
console.log(Array.isArray(j));

// Converting array to string
// toString:Converts array to string
console.log(thirdList.toString());

// Joining array elements
//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

const numbersj = [1, 2, 3, 4, 54, 5];
console.log(numbersj.join());

// Slice array elements
//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const arrlice = [1, 2, 3, 4, 5];

console.log(arrlice.slice(0, 2));
console.log(arrlice.slice(0));
console.log(arrlice.slice(1));
console.log(arrlice.slice(4));
console.log(arrlice.slice(0, 3));

// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// console.log(arrlice.splice(0, 3)); **************************************************************

// Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

const item = ["item1", "item2", "item3"];

item.push("item5");
console.log(item);

// Removing the end element using pop
// pop: Removing item in the end.
item.pop();
console.log(item);

//Removing an element from the beginning
//shift: Removing one array element in the beginning of the array.

item.shift();
console.log(item);

// Add an element from the beginning
//unshift: Adding array element in the beginning of the array.

item.unshift(5);
console.log(item);

// Reversing array order
//reverse: reverse the order of an array.

item.reverse();
console.log(item);

//Sorting elements in array
//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs.sort());

// Array of arrays
//Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
];

//console.log(arrayOfArray[0]); ***************************************
