function repeat (numeros) {
    let numeroRep = 0;
    let contador = 0;
    let indexRep = 0;

    for (let key in numeros) {
        let check = numeros[key];

        for (let key2 in numeros) {
            if (check === numeros[key2]) {
                contador +=1;
            }
        }

    if (contador > numeroRep) {
        numeroRep = contador;
        indexRep = key;
    }

    contador = 0;

    }

    return numeros[indexRep];

}

console.log(repeat([2, 3, 2, 5, 8, 2, 3]));