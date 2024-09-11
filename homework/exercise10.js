// ## Exercise 10
// Write a program that prints the name with more characters in an array of names.
const names = ["Jose", "Cathy", "Bob", "Max", "Zeferino!", "Alex"];

// let indexOfLongest = 0;

// for (let i = 0; i < names.length; i++) {

//     console.log(indexOfLongest);
//     console.log(names[indexOfLongest]);
//     console.log(names[i]);
//     console.log("--------");
    
//     if (names[i].length > names[indexOfLongest].length) {
//         indexOfLongest = i;
//     }

// }

// console.log(names[indexOfLongest]);

let maxName = "Jose";
let maxLength = 0;

for (let i = 0; i < names.length; i++) {
    
    if (names[i].length > maxLength) {
        maxLength = names[i].length;
        maxName = names[i];
    }

}

console.log(maxName);

// TODO:
// colocar o codigo numa funcao que recebe um array de strings como argumento 
// e retorna a string com mais caracteres como resultado da funcao