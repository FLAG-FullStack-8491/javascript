// Um array e uma estrutura que permite guardar varios valores
// indexados por um numero

let nomes = [
    "Helder",
    "Miguel", 
    "Angelo",
    "Luiz",
    "Eraldo"
];

// vamos imprimir apenas o segundo valor do array
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);

console.log(nomes.length);

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Criar um array de numeros

// 1 - imprimir apenas os numeros que se encontram em indices par do array

// 2 - imprimir apenas os numeros pares (valores dos elementos do array)

const numeros = [4, 5, 12, -3, 0, 12, 3, 5, 1, 34, 12, 4, 6, 8, 9];

console.log("EXERCICIO 1:");
console.log("------------");
// 1 -
for (let i = 0; i < numeros.length; i++) {
    // verificar se o i é par e imprimir
    if (i % 2 == 0) {
        console.log(i + ": " + numeros[i]);
    }
}

console.log("EXERCICIO 2:");
console.log("------------");
// 2 - 
for (let i = 0; i < numeros.length; i++) {
    // verificar se o valor é par e imprimir
    if (numeros[i] % 2 == 0) {
        console.log(i + ": " + numeros[i]);
    }
}

console.log("TAMANHO: " + numeros.length);


console.log(numeros[ numeros.length - 1 ]);