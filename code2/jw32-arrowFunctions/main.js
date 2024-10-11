const values = [35, 30, 25, 20, 15, 10, 5];

// const filterCallback = (value) => {
//     if (value > 20) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const newValues = values.filter(filterCallback);


// const newValues = values.filter(function(value) { return value > 20; });
const newValues = values.filter(value => value > 20);

newValues.sort((a, b) => a - b);

console.log(newValues);

// arrow functions   =>
// 1 - sao sempre anonimas, o nome vem da variavel a qual as atribuimos
const test1 = () => {

};

// 2 - precisam de parenteses nos argumentos, excepto quando tem apenas 1 argumento
const test2 = arg1 => {

};

// 3 - quando o corpo da funcao tem apenas uma instrucao as chavetas sao opcionais
const test3 = () => console.log(12);

// 4 - quando nao usamos chavetas (ver ponto 3)
//     o valor da instrucao e automaticamente retornado (return implicito)
const test4 = () => "Bom dia";
// o mesmo que:
const test5 = () => {
    return "Bom dia";
}