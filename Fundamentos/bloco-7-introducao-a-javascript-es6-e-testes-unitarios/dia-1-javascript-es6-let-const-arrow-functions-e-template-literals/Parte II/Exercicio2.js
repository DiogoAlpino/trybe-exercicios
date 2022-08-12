const maiorPalavra = (frase) => {
    const arraySep = frase.split(' ');
    let tamanho = 0;
    let palavra = '';

    for (const word of arraySep) {
        if (word.length > tamanho) {
            tamanho = word.length;
            palavra = word;
        }        
    }

    return palavra;

}

console.log(maiorPalavra(`Antônio foi no banheiro e não sabemos o que aconteceu`));