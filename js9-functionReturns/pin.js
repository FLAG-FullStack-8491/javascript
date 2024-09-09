

let userPin = readlineSync.question("Pin?");

let counter = 3;
while (userPin != "0000") {
    3--;
    console.log("Esta mal... tens mais " + counter + " tentavias");
    userPin = readlineSync.question("Pin?");
}

