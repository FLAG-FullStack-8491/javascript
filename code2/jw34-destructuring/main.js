// https://javascript.info/destructuring-assignment

const numbers = [
    100,
    200,
    250,
    300,
    600,
    750,
    1000
];

//
//
// Array destructuring
//
//

const [n1, n2, ,n3, ...rest] = numbers;
console.log(rest);

// const n1 = numbers[0];
// const n2 = numbers[1];
// const n3 = numbers[3];

console.log(n1);
console.log(n2);

function doSomething() {
    const value = "some calculated value";
    const status = "OK";

    const resultArray = [status, value];

    return resultArray;
}


// const result = doSomething();
// const status = result[0];
// const value = result[1];

const [status, value] = doSomething();

// Usar array destructuring para fazermos um truque engracado
let a = 12;
let b = 5;

// const aux = a;
// a = b;
// b = aux;
[b, a] = [a, b];

console.log(a);
console.log(b);

//
//
// Object destructuring
//
//

const person = {
    name: "Joe",
    age: 40,
    city: "London",
    profession: "Developer",
    marriageStatus: "Single",
    footballClub: "Manchester United"
};

const { age, name: username } = person;

// const username = person.name;
// const age = person.age;

console.log("--------------------");
console.log(person);
console.log(typeof person);

console.log(username);
console.log(typeof username);

console.log(age);
console.log(typeof age);


