window.onload = function() {

let button = document.querySelector("#button");

/*const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields); */

button.addEventListener("click", (event) => {
    event.preventDefault();

});

}

/*function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  } */