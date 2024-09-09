function rectPerimeter(width, height) {
    return (width + height) * 2;
}

function rectArea(width, height) {
    return width * height;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const value = circumference(3);
const valueRounded2 = Math.round(value * 100) / 100;
console.log(valueRounded2);