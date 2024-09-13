const readlineSync = require("readline-sync");

function randomInt(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function existsInArray(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return true;
        }
    }
    return false;
}

function randomUniqueArray(min, max, size) {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < size) {
        const x = randomInt(min, max);
        if (existsInArray(x, uniqueNumbers) === false ) {
            uniqueNumbers.push(x);
        }
    }
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers;
}

function euroMillions() {

    const numbers = randomUniqueArray(1, 50, 5);
    const stars = randomUniqueArray(1, 12, 2);

    const result = {
        numbers: numbers,
        stars: stars
    };

    return result;
}

// function euroMillions() {
//     const numbers = randomUniqueArray(1, 50, 5);
//     const stars = randomUniqueArray(1, 12, 2);

//     return { numbers, stars };
// }

// function euroMillions() {
//     return {
//         numbers: randomUniqueArray(1, 50, 5),
//         stars: randomUniqueArray(1, 12, 2)
//     };
// }

console.log("Quantas chaves queres gerar?");
const number = readlineSync.question("> ");

const results = [];
for (let i = 0; i < number; i++) {
    results.push(euroMillions());
}
console.log(results);
console.log(results[0].stars[1]);