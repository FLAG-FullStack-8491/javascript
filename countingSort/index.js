const numbers = [4, 5, 12, 0, 1, 9, 10, 1, 4, 1, 4, 10];
let counter = 0;
// numbers.sort((a, b) => {
//     counter ++;
//     return a - b;
// });

// let counter = 0;
// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - 1 - i; j++) {
//         counter++;
//         if (numbers[j] < numbers[j + 1]) {
//             const aux = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = aux;
//         }
//     }
// }


const max = Math.max(...numbers);
const frequency = new Array(max + 1).fill(0);
console.log(frequency);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    frequency[numbers[i]] += 1;
}
console.log(frequency);

const sortedArray = [];
for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] == 0) {
        continue;
    }
    for (let j = 0; j < frequency[i]; j++) {
        counter++;
        sortedArray.push(i);
    }
}
console.log(sortedArray);
console.log(counter);
// console.log(numbers);


const date1 = new Date();
console.log(date1);
for (let i = 0; i < 100000000; i++) {
    const x = 2 + 2;
}
const date2 = new Date();
console.log(date2);