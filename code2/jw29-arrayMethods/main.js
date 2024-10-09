// criem um array de nomes, pode ser este :)
// vamos filtrar e ficar apenas com os nomes que comecam por S ou por A maiusculos
const names = [
    "Bat",
    "Superman",
    "Spider-Man",
    "Aquaman",
    "Wolverine",
    "Invincible",
    "Jok"
];

// names.push();
// names.pop;
// names.splice();
// names.sort();

// forma classica de filtrar um array
// e criar um array novo, apenas com os valores que
// "passam" no filtro
// const longNames = [];
// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i].length);
//     if (names[i].length >= 6) {
//         longNames.push(names[i]);
//     }
// }
// console.log(longNames);


// const longNames = names.filter(function(value) {
//     // isto e redundante...
//     if (value.length >= 6) {
//         return true;
//     } else {
//         return false
//     }
// });

const longNames = names.filter(function(value) {
    return value.length >= 6;
});

// const someNames = names.filter(function(value) {
//     // console.log("HELLO!");
//     // console.log(typeof value);
//     // console.log(value);
//     // console.log(value[0]);
//     const firstLetter = value[0];
//     if (firstLetter == "S") {
//         return true;
//     } else if (firstLetter == "A") {
//         return true;
//     } else {
//         return false;
//     }
// });

const someNames = names.filter(function(value) {
    return value[0] == "S" || value[0] == "A";
});
// console.log(names);
// console.log(longNames);
console.log(someNames);

import myArrayFunctions from "./myArrayFunctions.js";
const result = myArrayFunctions.myFilter(names, function(value) {
    return value[0] == "S" || value[0] == "A";
});

console.log(result);
