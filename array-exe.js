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



let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");

console.log( arr2 ) // now ["Let's", "dance", "right", "now"]

let arr3 = [1, 2];

// create an array from: arr and [3,4]
console.log( arr3.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr3.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr3.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


let fruits1 = ['Apple', 'Orange', 'Apple']

console.log( fruits1.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits1.lastIndexOf('Apple') ); // 2 (last Apple)


// 
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0
  
  // Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3

  let users1 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users1.filter(item => item.id < 3);
  
console.log(someUsers.length); // 2