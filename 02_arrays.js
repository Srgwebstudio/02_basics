const marvel_heros = ["thor", "ironman", "spiderman"]; // array koi bhi data le leta hai
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// another way
// const all_new_heros = [...marvel_heros,...dc_heros]// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// // you use this while data scraping
// console.log(Array.isArray("shivam")); // false
// console.log(Array.from("shivam"));// [ 's', 'h', 'i', 'v', 'a', 'm' ]
// console.log(Array.from({name:"shivam"}));// Intresting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
