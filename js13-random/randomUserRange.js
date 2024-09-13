const readlineSync = require("readline-sync");

function randomInt(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    if (min > max) {
        return NaN;
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}

console.log("Introduza o minimo:");
const userInputMin = readlineSync.question("> ");

console.log("Introduza o maximo:");
const userInputMax = readlineSync.question("> ");

const x = randomInt(userInputMin, userInputMax);
console.log(x);
