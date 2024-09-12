// // empty array
// let arr = new Array();
// let arr2 = [];
// console.log(arr);
// console.log(arr2);

// array
// let arr = new Array(1, "Hello", true);
// let arr2 = ["Apple", 2, false];
// console.log(arr);
// console.log(arr2);

// array
// let arr = new Array(1, "Hello", true);
// let arr2 = ["Apple", 2, false];
// console.log(arr[1]);
// console.log(arr2[2]);
// console.log(arr2.length);
// console.log(arr[arr.length - 1]);

// Array methods
// To add or remove from the end of an array, we use push and pop.
// let fruit = ["Apple", "Banana", "Orange"];
// fruit.push("Mango");
// fruit.pop();

// console.log(fruit);
// //To add or remove from the front, we use shift and unshift.
// fruit.unshift("Mango");
// fruit.shift();

// console.log(fruit);

// // To add or remove from the middle, we use splice.
// fruit.splice(0, 2, "Mango", "Pineapple");
// console.log(fruit);

// Array methods

// let student = [
//   {
//     username: "Kimleang",
//     age: 19,
//     address: {
//       city: "Phnom Penh",
//     },
//   },
//   {
//     username: "Sok",
//     age: 20,
//     address: {
//       city: "Kandal",
//     },
//   },
//   {
//     username: "Srey",
//     age: 21,
//     address: {
//       city: "Kampong Cham",
//     },
//   },
// ];
// let fruit = ["Apple", "Banana", "Orange", "Pineapple", "Potato", "Banana"];
// // find method return the first element that meet the condition.
// let result = fruit.find((item) => item.startsWith("P"));
// console.log(result);
// let studentResult = student.find((item) => item.username === "Srey");
// console.log(studentResult);

// // findIndex() method return the index of the first element that meet the condition.
// let resultIndex = fruit.findIndex((item) => item.startsWith("P"));
// console.log(resultIndex);

// // indexOf() method return the index of the first element that meet the condition.
// let resultIndexOf = fruit.indexOf("Banana");
// console.log(resultIndexOf);

// // lastIndexOf() method return the index of the last element that meet the condition.
// let resultLastIndexOf = fruit.lastIndexOf("Banana");
// console.log(resultLastIndexOf);

// // includes() method return true if the element is found in the array.
// let resultIncludes = fruit.includes("Banana");
// console.log(resultIncludes);

// Array methods

// let student = [
//   {
//     username: "Kimleang",
//     age: 19,
//     address: {
//       city: "Phnom Penh",
//     },
//   },
//   {
//     username: "Sok",
//     age: 20,
//     address: {
//       city: "Kandal",
//     },
//   },
//   {
//     username: "Srey",
//     age: 21,
//     address: {
//       city: "Kampong Cham",
//     },
//   },
// ];
// let fruit = ["Apple", "Banana", "Orange", "Pineapple", "Potato", "Banana"];
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Copy array
// // Spread Operator (...)
// let copyStudent = [...student, ...number, ...fruit];
// console.log(copyStudent);

// // Concat
// let concatStudent = student.concat(number).concat(fruit);
// console.log(concatStudent);

// // Slice
// let sliceStudent = student.slice();
// console.log(sliceStudent);

// Array method
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter method
let filter = number.filter((item) => item % 2 == 1);
console.log(filter);
// map method
let map = number.map((item) => item + 1);
console.log(map);
