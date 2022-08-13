const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    array = frase.split(''); // o metódo split transformará a frase em um array
    for (let index = 0; index < array.length; index += 1){
        if (array[index] === 'x') {
            array[index] = nome; // troca o valor do x dentro do array pelo nome recebido por parâmetro        
        }
    }
    return array.join('');    //Transforme a variável array em uma string e a retorne.
}

console.log(substituaX('Diogo'));

const minhasSkills = func => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${func} 
Minhas tres principais habilidades sao:`;
    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado} - ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
    }
    return resultado;
};

console.log(minhasSkills(substituaX('Diogo')));