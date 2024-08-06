// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); 


// map---mainly used to transform an array

const arr=[5,1,3,2,6]

function double(x){
return x *2;
}
function triple(x){
    return x*3
}

const output=arr.map(double)
console.log(output)

const output1=arr.map(triple)
console.log(output1)


const output2=arr.map(function binary(x){
    return x.toString(2)
})
console.log(output2)
// const output=arr.map((x)=>x.toString(2))  -- arrow  function

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);

console.log(names); 

// filter
const arr1=[5,1,3,2,6,9]
// filter odd values inside a array
function isOdd(x){
    return x %2;
}

const output3=arr1.filter(isOdd)
console.log(output3)

const greaterThan4=arr1.filter((x)=>x>4)
console.log(greaterThan4)


// reduce
const array=[5,1,3,2,6,9]
// reduce= used to find sum ,maximum number
const sum=arr.reduce(function(acc, curr){   //acc is accumulater and curr is current=the current values in the arry
acc= acc+ curr;
return

},0)

const user=[
   {firstName:"akshay",lastName:"saini", age:26},
   {firstName:"donald",lastName:"trump", age:75},
   {firstName:"elon",lastName:"musk", age:50},
   {firstName:"deepika",lastName:"padukone", age:26}

]

const age=user.filter((x)=> x.age<30).map((x)=>x.firstName)
console.log(age)
