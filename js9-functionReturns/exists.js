const numbers = [2, 5, 7, 1, 50, 12, 34, 4, 1, -6, 7];

// function itExists(needle, haystack) {
//     let foundIt = false;
//     for (let i = 0; i < haystack.length; i++) {
//         if (needle === haystack[i]) {
//             foundIt = true;
//             
//         }
//     }
//     return foundIt;
// }

function itExists(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return true;
        }
    }
    return false;
}

if (itExists(100, numbers)) {
    console.log("EXISTE!");
} else {
    console.log("NAO EXISTE");
}

const names = ["Alex", "Bob", "Jennie", "Filipa", "Antonio"];
const result = names.includes("Antonio");
// const result = itExists("antonio", names);
console.log(result);
