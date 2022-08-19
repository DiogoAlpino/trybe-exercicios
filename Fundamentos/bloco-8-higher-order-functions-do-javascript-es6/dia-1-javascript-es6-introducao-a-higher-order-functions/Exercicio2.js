//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e 
//uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
// (Ex: "Tente novamente" ou "Parabéns você ganhou").

const check = (numero, numeroSorteado) => {
  if (numero === numeroSorteado){
    return 'Parabens, vc ganhou!'
  } else return 'Tente novamente'
};

const sorteio = (numero, funcao) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1); //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return funcao(numero, numeroSorteado);
};

console.log(sorteio(2,check));