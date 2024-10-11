const compare = (value, otherValue) => {
    return value - otherValue;
}

const x = compare(4, 5); // -1
compare(6, 6); // 0
compare(9, 3); // 6

const name1 = "Alex";
const name2 = "Zack";

const compareStringResult = name1.localeCompare(name2);
console.log(compareStringResult);

const someStuff = [10, 45, 12, 5];
someStuff.sort(function(a, b) {
    return a - b;
});

console.log(someStuff);

const names = [
    "Martha",
    "jane",
    "Çarlos",
    "carla",
    "Ana",
    "ázaaaa",
    "Alex",
    "bob",
    "zack",
    "Miri",
    "michael"
];

names.sort((a, b) => a.localeCompare(b));
console.log(names);

const myName = "Helder";
let reversedName = "";
for (let i = myName.length - 1; i >= 0; i--) {
    reversedName += myName[i];
}
console.log(reversedName);

const reversedName2 = myName.split("").reverse().join("");
console.log(reversedName2);

const sentence = "Hello World! How are you doing?";
console.log(sentence.split(""));
