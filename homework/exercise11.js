// ## Exercise 11
// Write a program that calculates the sum, the average, the highest and the lowest numbers from an array.
// > **Example:**<br />
// > Array: `[4, 7, 10, 12, 1, 8, 20, 16]`<br />
// > Output:<br />
// ```
// Sum: 78
// Average: 9.75
// Highest: 20
// Lowest: 1
// ```

const values = [4, -7, -10, -12, 100, -8, -20, 16];
let sum = 0;
// let max = -Infinity;
// let min = Infinity;
let max = values[0];
let min = values[0];

for (let i = 0; i < values.length; i++) {
    sum += values[i];

    if (values[i] > max) {
        max = values[i];
    }

    if (values[i] < min) {
        min = values[i];
    }
}
const avg = sum / values.length;

console.log("Sum: " + sum);
console.log("Average: " + avg);
console.log("Highest: " + max);
console.log("Lowest: " + min);

// Todo: colocar isto em funcoes