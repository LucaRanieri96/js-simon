/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/

// Mi scrivo la funzione per generare automaticamente 5 numeri randomici tra 1 e 100
let min = 1;
let max = 100;

function getRndInteger(min, max) {
  // inizializzo un array per salvarmi i 5 numeri da qualche parte
  let randomNums = [];

  // ciclo per generare 5 numeri
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNums.push(randomNum);
  }
  return randomNums;
}

console.log(getRndInteger(min, max));

// Metto dentro i blocchi colorati i numeri generati randomicamente
let numbers = getRndInteger(min, max);

let blocks = document.querySelectorAll(".my_square");

for (let i = 0; i < blocks.length; i++) {
  blocks[i].innerHTML = numbers[i];
}

// Mi genero una funzione timeout per far vedere i numeri dentro i blocchi solo per 30 secondi
let container = document.querySelector(".my_cont");
let title = document.querySelector("h1");

let show = document.getElementById("show");

setTimeout(function () {
  container.classList.add("d-none");
  title.classList.add("d-none");
  show.classList.remove("d-none");
}, 5000);

// Ora chiedo i numeri all'utente, mi inizializzo le variabili e aggiungo un event listener al pulsante

let userNumberArray = []; // array di numeri inseriti dall'utente
console.log(userNumberArray);
const maxInput = 5;
let inputCounter = 0;

const userNumber = document.querySelector("input");
const button = document.querySelector("button");
const risultati = document.querySelector("#risultati");

// aggiungo un massimo di 5 numeri dentro l'array usernumberArray
button.addEventListener("click", function() {
  if (inputCounter < maxInput) {
    inputCounter++;
    userNumberArray.push(userNumber.value)
    userNumber.value = "";

    if (inputCounter === maxInput) {
      userNumber.disabled = true;
      button.disabled = true; 
    }
  }
});







