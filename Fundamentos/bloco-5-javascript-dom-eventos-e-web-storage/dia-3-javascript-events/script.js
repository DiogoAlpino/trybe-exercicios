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

//Implemente duas funções que criem um efeito de "zoom". 
//Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, 
//quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function mouseOver() {
  let dias = document.querySelector("#days");
  dias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";  //Pega o evento alvo e altera o estilo de fonte
    event.target.style.fontWeight = "600"; //Muda fontweight
    event.target.style.color = "blue";
  });
}

function mouseOut() {
  let dias = document.querySelector("#days");
  dias.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
    event.target.style.color = "#777"; //cor cinza
  });
}

mouseOver(); //Executa funcoes
mouseOut();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 7

//Implemente uma função que adicione uma tarefa personalizada ao calendário.
//A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTarefa(tarefa) {
  let tasksCont = document.querySelector(".my-tasks"); //Seleciona elemento com classe my-tasks
  let task = document.createElement("span"); //cria tarefa com tag span

  task.innerHTML = tarefa; //Colocar parametro da funcao como a nova tarefa
  tasksCont.appendChild(task); //Faz com que a tarefa seja filha do container com elemento my-tasks
}

addTarefa("Limpar o quarto"); //Executa a funcao com o parametro escolhido

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 8

//Implemente uma função que adicione uma legenda com cor para a tarefa.
//Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addLegenda(cor) {
  let tasksCont = document.querySelector(".my-tasks"); //Pega elemento com class my-tasks
  let legenda = document.createElement("div"); //Cria nova div

  legenda.className = "task"; //Da classe para a nova div
  legenda.style.backgroundColor = cor; //Cor de fundo da nova div sera o parametro escolhido pra funcao
  tasksCont.appendChild(legenda); // div criada sera filha do elemento com classe my-tasks

}

addLegenda("orange");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 9

//Implemente uma função que selecione uma tarefa.
//Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, 
//atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selecionaTarefa() {
  let tarefaCont = document.querySelector(".task"); //Pega div feita no Ex 8
  let selectedTask = document.getElementsByClassName('task selected');

  tarefaCont.addEventListener("click", function () { //cria evento na minha div feita no Ex 8
    if (selectedTask.length === 0) {
      tarefaCont.className = "task selected";
    } else {
      tarefaCont.className = "task"
    }
  });
}

selecionaTarefa();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 10

//Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function atribuiCor() {
  let diaCont = document.querySelector("#days"); //pega primeira ul com id days
  let taskSelect = document.getElementsByClassName("task selected"); //retorna array com tudo que tem a class task selected
  let task = document.querySelector(".task"); //pega primeira div com a classe task
  let corCont = task.style.backgroundColor; //container para a cor da task

  diaCont.addEventListener("click", function(event){ //Para pegar o evento alvo, o evento precisa ser o parametro da funcao
    let eventTargetColor = event.target.style.color;
    if (taskSelect.length > 0 && eventTargetColor !== corCont) { //se houver alguma task selecionada e a cor nao for igual a da tarefa
      let cor = taskSelect[0].style.backgroundColor; //Pega a cor do primeiro elemento e salva na variavel cor
      event.target.style.color = cor;
    } else if (eventTargetColor === corCont) { //Se a cor for igual, volta pro cinza
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

atribuiCor();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Bonus

//Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS",
// adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
//Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//Dica - Propriedade: key.

function addNovaTarefa () {
  let novaTarefas = document.querySelector("#task-input"); //Seleciona elementos da classe task-input
  let addNovoBotao = document.querySelector("#btn-add"); //Seleciona elementos da classe btn-add
  let listaTasks = document.querySelector(".task-list"); //Seleciona elementos do id task-list

  addNovoBotao.addEventListener("click", function(){ //Add botao
    if (novaTarefas.value.length > 0) {
      let novaLi = document.createElement("li"); //cria nova tarefa
      novaLi.innerText = novaTarefas.value; //valor vai ser o que for inserido no botao

      listaTasks.appendChild(novaLi); //coloca li como filha de task list
      novaTarefas.value = ''; //o valor sera a string inserida

    } else {
      alert("Error: Digite ao menos 1 caractere.")
    }
  });

  novaTarefas.addEventListener("keyup", function(event){
    if (event.key === "Enter" && novaTarefas.value.length > 0) { //se o evento for a tecla enter + existir nova tarefa
      let novaLi = document.createElement("li"); //cria nova li
      novaLi.innerHTML = novaTarefas.value;

      novaTarefas.appendChild(novaLi);
      novaTarefas.value;
    }

  });
}

addNovaTarefa();

