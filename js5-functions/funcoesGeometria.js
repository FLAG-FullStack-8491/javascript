const result = Math.sqrt(9);

function soma(a, b) {
    const result = a + b;
    console.log(result);
}

soma(7, 5);
soma(10, 10);
soma(2, 14);
soma(7);

// criar alguma funcoes para calcular espacos geometricos
function rectPerimeter(width, height) {
    // const result = width + width + height + height;
    const result = (width + height) * 2;
    console.log(result);
}

function rectArea(width, height) {
    const result = width * height;
    console.log(result);
}

function circumference(radius) {
    const result = 2 * Math.PI * radius;
    console.log(result);
}

function circleArea(radius) {
    // const result = Math.PI * radius * radius;
    // const result = Math.PI * radius ** 2;
    const result = Math.PI * Math.pow(radius, 2);
    console.log(result);
}

rectPerimeter(4, 4);
rectArea(2, 5);
circumference(3);
circleArea(3);