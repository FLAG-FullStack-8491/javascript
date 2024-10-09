function myForEach(values, callback) {
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
}

function myFilter(values, callback) {
    const filtered = [];
    for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
            filtered.push(values[i]);
        }
    }

    return filtered;
}

function mySort(numbersArray, callback) {

    for (let i = 0; i < numbersArray.length - 1; i++) {
        for (let j = 0; j < numbersArray.length - 1; j++) {
            if (callback(numbersArray[j], numbersArray[j + 1]) > 0) {
                const aux = numbersArray[j];
                numbersArray[j] = numbersArray[j + 1];
                numbersArray[j + 1] = aux;
            }
        }
    }

    return numbersArray;

    // Como trocar 2 valores?
    // let v1 = 5;
    // let v2 = 10;

    // const aux = v1;
    // v1 = v2;
    // v2 = aux;
}

export default {
    myForEach,
    myFilter,
    mySort
}