const numbers = [34, 12, 4, 1, 6, 7, 12, 3, 5];

const numbersList = document.querySelector("#numbersList");

// for (let i = 0; i < numbers.length; i++) {
//     numbersList.innerHTML += `<li>${numbers[i]}</li>`;
// }

numbers.sort(function(a, b) {
    // return a - b;
    console.log(`${a} - ${b} = ${a - b}`);
    if (a == b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});

numbers.forEach(function(value) {
    numbersList.innerHTML += `<li>${value}</li>`;
});

