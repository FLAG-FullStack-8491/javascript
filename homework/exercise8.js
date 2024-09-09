let n = 5;
let numbers = [4, 5, 10, 12, 1, 5, 8, 20];

// let resultText = "(";
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (i > 0) {
//         resultText += ", ";
//     }
//     resultText += numbers[i]; 
// }
// resultText += ")";
// console.log(resultText);


// SOLUCAO 1
function numbersExists(needle, haystack) {
    let resultText = "NAO ENCONTREI!";
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
           resultText = "ENCONTREI!";
           break;
        }
    }
    console.log(resultText);
}

// SOLUCAO 2
function numbersExistsAlt(needle, haystack) {
    let foundNumber = false;
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
           foundNumber = true;
           break;
        }
    }
    console.log(foundNumber);    
}

// SOLUCAO 3
function numbersExistsAlt2(needle, haystack) {
    let counter = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            counter += 1;
        }
    }
    console.log(counter);
}
