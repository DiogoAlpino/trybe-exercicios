function recArray (array) {
    let menor = 0;
    for (let indice in array) {
        if (array[menor] > array[indice]) {
            menor = indice;
        }

    }

    return menor;
}

console.log(recArray([2, 4, 6, 7, 10, 0, -3]));