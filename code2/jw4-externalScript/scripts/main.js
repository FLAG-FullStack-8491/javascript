const redBox = document.getElementById("redBox");
const buttonMinus10 = document.getElementById("buttonMinus10");
const buttonMinus1 = document.getElementById("buttonMinus1");
const buttonPlus1 = document.getElementById("buttonPlus1");
const buttonPlus10 = document.getElementById("buttonPlus10");

// classic functions are subject to hoisting
function test() {
    alert("TEST 123!");
}

// anonymous functions
const test2 = function() {
    alert("test 444!");
}

// someButton.addEventListener("click", test);
// someButton.addEventListener("click", test2);

function updateColor() {
    if (counter < 0) {
        redBox.style.color = "red";
    } else if (counter > 100) {
        redBox.style.color = "green";
    } else if (counter > 10) {
        redBox.style.color = "blue";
    } else {
        redBox.style.color = "black";
    }
}

function updateCounter(value) {
    counter += value;
    redBox.textContent = counter;
}

let counter = 0;

buttonMinus10.addEventListener("click", function() {
    updateCounter(-10);
    updateColor();
});

buttonMinus1.addEventListener("click", function() {
    updateCounter(-1);
    updateColor();
});

buttonPlus1.addEventListener("click", function() {
    updateCounter(1);
    updateColor();
});

buttonPlus10.addEventListener("click", function() {
    updateCounter(10);
    updateColor();
});