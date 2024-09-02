// TPC:
// quando o numero e multiplo de 3 substituir por "foo" (feito)
// quando o numero e multiplo de 5 substituir por "bar"
// quando o numero e multiplo de 3 e de 5 substituir por "foobar"

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("foo");
    } else {
        console.log(i);
    }
}