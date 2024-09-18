const squareBox = document.getElementById("squareBox");
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

let counter = 0;

// EXERCICIO 1:

// const updateBox = function(value) {
//     counter += value;
    
//     if (counter < 0) counter = 10;
//     if (counter > 10) counter = 0;
    
//     squareBox.textContent = counter;
// }

// buttonDown.addEventListener("click", function() {
//     // updateBox(-1);
//     counter -= 1;
//     if (counter < 0) {
//         counter = 10;
//     }
//     squareBox.textContent = counter;
// });

// buttonUp.addEventListener("click", function() {
//     // updateBox(1);
//     counter += 1;
//     if (counter > 10) {
//         counter = 0;
//     }
//     squareBox.textContent = counter;
// });

// EXErCICIO 2

// buttonDown.addEventListener("click", function() {
//     if (counter > 0) {
//         counter -= 1;
//         squareBox.textContent = counter;
//     }
// });

// buttonUp.addEventListener("click", function() {
//     if (counter < 10) {
//         counter += 1;
//         squareBox.textContent = counter;
//     }
// });

// EXErCICIO 2 C/ BONUS

// buttonDown.disabled = true;

// buttonDown.addEventListener("click", function() {
//     buttonUp.disabled = false;
//     counter -= 1;
//     squareBox.textContent = counter;
//     if (counter === 0) {
//         buttonDown.disabled = true;
//     }
// });

// buttonUp.addEventListener("click", function() {
//     buttonDown.disabled = false;
//     counter += 1;
//     squareBox.textContent = counter;
//     if (counter === 10) {
//         buttonUp.disabled = true;
//     }
// });

// EXERCICIO 2 C/ BONUS (ALT)

function checkButtons() {
    buttonUp.disabled = false;
    buttonDown.disabled = false;
   
    if (counter === 0) {
        buttonDown.disabled = true;
    }

    if (counter === 10) {
        buttonUp.disabled = true;
    }
}

checkButtons();

buttonDown.addEventListener("click", function() {
    counter -= 1;
    squareBox.textContent = counter;
    checkButtons();
});

buttonUp.addEventListener("click", function() {
    counter += 1;
    squareBox.textContent = counter;
    checkButtons();
});

// Criar um contador que sobe ou desce em incrementos de 1
// 1 - O contador deve ser ciclico, quando chega ao 10 se o utilizador carregar no UP volta para 0 
//     se estiver em 0 e carregar DOWN vai para o 10

// 2 - Fazer outro contador em que só conta entre 0 e 10 tambem, mas pára quando chega ao 10 ou ao 0 se estiver a descer
//    Bonus Points: desactivar os botoes quando nao podem ser utilizados