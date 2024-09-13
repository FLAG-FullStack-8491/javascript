const someNumber = Math.random();
console.log(someNumber);

function randomInt(min, max) {
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    return parseInt(Math.random() * (max - min + 1)) + min;
}

let count1 = 0;
let count2 = 0;
for (let i = 0; i < 200; i++) {
    const x = randomInt(1, 2);
    if (x == 1) {
        count1++;
    } else {
        count2++
    }
}

console.log(count1);
console.log(count2);



