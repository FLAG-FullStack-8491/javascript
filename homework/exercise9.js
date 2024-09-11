const names = ["Josie", "Cathrin", "Bob", "Max", "Hannah", "Alex"];
// const oddNames = [];

// for (let i = 0; i < names.length; i++) {
//     if (i % 2 !== 0) {
//         oddNames.push(names[i]);
//     }
// }

// console.log(oddNames);

function filterOddPositions(arrayOfValues) {
    const oddValues = [];

    for (let i = 0; i < arrayOfValues.length; i++) {
        if (i % 2 !== 0) {
            oddValues.push(arrayOfValues[i]);
        }
    }
    return oddValues;
}

const oddNames = filterOddPositions(names);
console.log(oddNames);