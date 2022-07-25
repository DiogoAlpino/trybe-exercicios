function recArray (array) {
    let maior = 0;
    for (let indice in array) {
        if (array[maior] < array[indice]) {
            maior = indice;
        }

    }

    return maior;
}

console.log(recArray([2, 3, 6, 7, 10, 1]));