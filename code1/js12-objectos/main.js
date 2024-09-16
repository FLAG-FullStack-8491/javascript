// string -> ""
// number -> 0
// boolean -> true / false
// undefined -> undefined
// array -> [ value, value, value, ... ]
// object -> { key: value, key: value, key: value, ... }

// Simple Objects
const person = {
    name: "Joe",
    age: 200,
    city: "London"
};

const person2 = {
    name: "Bob",
    age: 200,
    city: "N.Y."
};

if (person.age > person2.age) {
    console.log("O " + person.name + " é o mais velho!");
} else if (person.age < person2.age) {
    console.log("O " + person2.name + " é o mais velho!");
} else {
    console.log("Tem a mesma idade!");
}
