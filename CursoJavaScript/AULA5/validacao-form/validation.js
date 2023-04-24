
const mainTitle = document.querySelector('h1');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const submitButton = document.querySelector('#submit-button');

mainTitle.addEventListener('mouseover', changeColorOn);
mainTitle.addEventListener('mouseout', changeColorOut);

function changeColorOn() {
  mainTitle.style.color = '#458922';
}

function changeColorOut() {
  mainTitle.style.color = '#000000';
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;

  if (nameValue === '') {
    alert('digite o seu nome');
    nameInput.focus();
    return false;
  }

  if (emailInput.value.indexOf("@") == -1 ||
      emailInput.valueOf.indexOf(".") == -1 ||
      emailInput.value == "" ||
      emailInput.value == null) {
      alert("Por favor, indique um e-mail válido.");
      emailInput.focus();
      return false;
  }
});