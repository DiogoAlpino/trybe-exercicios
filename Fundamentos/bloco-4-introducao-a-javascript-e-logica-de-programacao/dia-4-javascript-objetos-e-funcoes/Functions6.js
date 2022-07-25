function somatorio (numero) {
    soma = 0;
    for (let index = 0; index <= numero; index +=1) {
        soma = soma + index;
    }

    return soma;
}

console.log(somatorio(5));