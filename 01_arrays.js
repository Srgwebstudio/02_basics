// array 

const myArr = [1, 2, 3, 4, 5,true,"shivam"]
const myheros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]); 

// Arrays Methods

// myArr.push(6) // "add" value to "last"
// myArr.push(7) // "add" value to "last"
// myArr.pop() // "remove" value from "last" 
// myArr.unshift(0) // "add" value to "start"
// myArr.shift() // "remove" value from "start"
// console.log(myArr);
// console.log(myArr.includes(7));// result always in bolean
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);// [ 1, 2, 3, 4, 5, true, 'shivam' ]
// console.log(newArr);// 1,2,3,4,5,true,shivam
// console.log(typeof newArr);// string


// slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // oriional array ko change nahi karta 

console.log(myn1);// [ 2, 3 ]
console.log("B",myArr);

const myn2 = myArr.splice(1,3)// original array se splice vali chije hat jati hai
console.log("c",myArr);
console.log(myn2);// [ 2, 3, 4 ]

