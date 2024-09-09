
function rectangleArea(width, height) {
    const result = width * height;
    return result;
}

function rectanglePerimeter(width, height) {
    const result = (width + height) * 2;
    return result;
}


const twoByFive = rectangleArea(2, 5);
console.log(twoByFive);

const somePerimeter = rectanglePerimeter(2, 5);
console.log(somePerimeter);
