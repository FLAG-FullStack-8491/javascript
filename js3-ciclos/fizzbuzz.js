// TPC:
// quando o numero e multiplo de 3 substituir por "Fizz" (feito)
// quando o numero e multiplo de 5 substituir por "Buzz"
// quando o numero e multiplo de 3 e de 5 substituir por "FizzBuzz"

for (let i = 1; i <= 20; i++) {
    if (i % 15 == 0) {
       console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else { // um else no fim de uma estrurura de else ifs funciona como o bloco de codigo executado por defeito, quando mais nenhum e verdadeiro
        console.log(i);
    }
}

// if
// else
// for
// while


