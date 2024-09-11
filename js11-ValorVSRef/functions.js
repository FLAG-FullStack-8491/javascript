// function test(value) {
//     value++;
// }

// let a = 0;

// test(a);

// console.log(a);



function test2(someArray) {
    const t = [... someArray];
    t[1] = 100;
    return t;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers = test2(numbers);
console.log(numbers);