const functFatorial = (numero) => {
    let resultado = 1;
    for (let index = 2; index <= numero; index += 1) {
        resultado = resultado * index;
    }

    return resultado;
}

const valor = functFatorial(4);

console.log(`Esse é o fatorial ${valor}`);