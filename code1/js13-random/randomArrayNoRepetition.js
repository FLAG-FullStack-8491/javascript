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

// criar um array
// com 5 numeros aleatorios entre 1 e 9
// sem repeticao

// const uniqueNumbers = [];
// for (let i = 0; i < 5; i++) {
//     let x = randomInt(1, 5);

//     while (existsInArray(x, uniqueNumbers)) {
//         x = randomInt(1, 5);
//     }
//     uniqueNumbers.push(x);
// }

const uniqueNumbers = [];
while (uniqueNumbers.length < 5) {
    let x = randomInt(1, 9);
    if (existsInArray(x, uniqueNumbers) === false ) {
        uniqueNumbers.push(x);
    }
}

console.log(uniqueNumbers);