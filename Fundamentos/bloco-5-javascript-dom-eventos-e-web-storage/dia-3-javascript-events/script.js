function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDays() {
  let daysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dias = decemberDaysList[index];
    let listaDosDias = document.createElement('li');
    listaDosDias.innerHTML = dias;

    if (dias === 24 || dias === 31) {

      listaDosDias.className = "day holiday";
      daysList.appendChild(listaDosDias);

    }
    else if (dias === 4 || dias === 11 || dias === 18) {

      listaDosDias.className = "day friday";
      daysList.appendChild(listaDosDias);
    }
    else if (dias === 25) {

      listaDosDias.className = "day friday holiday";
      daysList.appendChild(listaDosDias);

    } else {

      listaDosDias.className = "day";
      daysList.appendChild(listaDosDias);

    }

  }
};


createDays();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 2

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container'); //variável que armazene o seletor do container do botão.
  let newButton = document.createElement('button'); //Crie um botão e armazene o valor da id em uma variável.
  let newButtonID = 'btn-holiday'; //e armazene o valor da id em uma variável.

  newButton.innerHTML = buttonName;   //o nome do botão seja o mesmo passado por parâmetro à função 
  newButton.id = newButtonID; //e o id do botão seja o mesmo que o id armazenado na variável.

  buttonContainer.appendChild(newButton); //Insira o botão no container selecionado 
}

createHolidayButton('Feriados'); //execute a função usando 'Feriados' como parâmetro.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 3

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
  let getHolidays = document.querySelectorAll('.holiday') // Seleciona todos os feriados como um array de elementos;
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let setNewColor = 'pink'; // armazena a nova cor que será utilizada ao pressionar o botão.

  getHolidayButton.addEventListener('click', function () { //escutador de eventos ao botão, esse escutador deve aguardar um clique.
    for (let index = 0; index < getHolidays.length; index += 1) { // Percorra o array de feriados e adicione as condições para troca de cor.
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 4 (Mesmo passo a passo do Ex2)

//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
//Adicione a esse botão o ID "btn-friday";
//Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoSexta(nomeBotao) {
  let contBotao = document.querySelector(".buttons-container"); //Declarar a variavel pai
  let novoBotao = document.createElement("button"); //Cria novo botao
  let botaoID = "btn-friday"; //Declarar ID do botao

  novoBotao.innerHTML = nomeBotao; //Adiciona o nome do botao
  novoBotao.id = botaoID; //Adiciona ID 

  contBotao.appendChild(novoBotao); //Adiciona o novo botao como filho do container de botoes
}

criaBotaoSexta("Sexta-Feira"); //Executa funcao com o nome definido de Sexta Feira

// ----------------------------------------------------------------------------------------------------------------------------------------------------------


//Exercicio 5

//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira.
//Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function sextaFeira(diasSexta) {
  let getBotaoSexta = document.querySelector("#btn-friday"); //pega botao de Sexta Feira feito no Ex 4
  let sextaFeira = document.getElementsByClassName("friday"); //pega todos elementos com classe friday
  let novoTextoSexta = "Sextou!!!";

  getBotaoSexta.addEventListener("click", function () {
    for (let index = 0; index < sextaFeira.length; index += 1) { //loop em todos os elementos com classe friday
      if (sextaFeira[index].innerHTML !== novoTextoSexta) {
        sextaFeira[index].innerHTML = novoTextoSexta; //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
        sextaFeira[index].innerHTML = diasSexta[index]; //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}

let sextasDez = [4, 11, 18, 25]; //Parametros que serao passados para a funcao
sextaFeira(sextasDez);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercicio 6