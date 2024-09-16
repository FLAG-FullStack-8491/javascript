const nome = "Joe";
const idade = 45;

const refrigerantes = [
    "Cola",
    "Cola-Zero",
    "Pepsi",
    "Pepsi-Max",
    "Fanta",
    "Sumol de Laranja"
];

console.log(refrigerantes.length);
console.log(refrigerantes);

refrigerantes.push("Compal?");

console.log(refrigerantes.length);
console.log(refrigerantes);

refrigerantes.pop();

console.log(refrigerantes.length);
console.log(refrigerantes);

// Pesquisem na net e digam-me voces a mim
// qual o comando para apagar um elemento do array baseado no indice

// qual o comando para colocar um elemento no array em determinado indice

// RESPOSTA: para ambos podemos usar o splice

refrigerantes.splice(0, 0, "Guarana", "Sprite");
console.log(refrigerantes.length);
console.log(refrigerantes);

refrigerantes[3] = "7-UP";

console.log(refrigerantes.length);
console.log(refrigerantes);
