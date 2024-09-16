function randomInt(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

// Exercicio:
// Gerar um array com 5 numeros aleatorios entre 1 e 50 :D

const randomNumbers = [];
for (let i = 0; i < 5; i++) {
    // randomNumbers[i] = randomInt(1, 50);
    randomNumbers.push(randomInt(1, 50));
}
console.log(randomNumbers);