let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

// ex 2
let fruit = ["Apple", "Orange", "Plum"];
console.log( fruit[fruit.length-1] ); // Plum

// 
let fruitss = ["Apple", "Orange", "Pear"];

console.log( fruitss.pop() ); // remove "Pear" and alert it

console.log( fruitss ); // Apple, Orange


// 

let fruitsss = ["Apple", "Orange"];

fruitsss.push("Pear");

console.log( fruitsss ); 

// 
let Fruits = ["Banana"]

let arr = Fruits; // copy by reference (two variables reference the same array)

console.log( arr === Fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( Fruits ); // Banana, Pear - 2 i

// 
let array = [1, 2, 3, 4, 5];

array.length = 2; // truncate to 2 elements
console.log( array ); // [1, 2]

array.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return
// 
let arr1 = new Array(2); // will it create an array of [2] ?

console.log( arr1[0] ); // undefined! no elements.

console.log( arr1.length ); // length 2