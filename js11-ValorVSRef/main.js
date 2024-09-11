// let a = 10;
// let b = 15;

// let c = a;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log("---");
// c++;

// console.log(a);
// console.log(b);
// console.log(c);

let a = [10, 15, 20, 25, 30];  // #177
let b = a; // #177

console.log(a);
console.log(b);

console.log("---");
b[2] = 21;

console.log(a);
console.log(b);

a = []; // #600
console.log("---");

console.log(a);
console.log(b);