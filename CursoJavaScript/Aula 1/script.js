//armazena o elemnto procurado
const para = document.querySelector("h1");

//adiciona o evento click
para.addEventListener("click", atualizarNome);

//o que eu quero fazer
function atualizarNome() {
  let nome = prompt("Digite seu nome");
  para.textContent = nome;
}
