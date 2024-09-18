const squareBox = document.getElementById("squareBox");
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

buttonDown.addEventListener("click", function() {
    alert("GO DOWN!!!!");
});

buttonUp.addEventListener("click", function() {
    alert("GO UP!!!!");
});

// Criar um contador que sobe ou desce em incrementos de 1
// 1 - O contador deve ser ciclico, quando chega ao 10 se o utilizador carregar no UP volta para 0 
//     se estiver em 0 e carregar DOWN vai para o 10

// 2 - Fazer outro contador em que so vai de 0 a 10 na mesma, mas para quando chega ao 10 ou ao 0 a descer
//    Bonus Points: desactivar os botoes quando nao podem ser utilizados