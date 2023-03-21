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

const listaNumeri = [];
const maxInput = 5; // numero massimo di input
let inputCounter = 0; // contatore di input
let corretti = 0; // contatore di numeri corretti
let sbagliati = 0; // contatore di numeri sbagliati

const userNumber = document.querySelector("input");
const button = document.querySelector("button");
const correttiOutput = document.querySelector("#corretti");
const sbagliatiOutput = document.querySelector("#sbagliati");

button.addEventListener("click", function() {
  if (inputCounter < maxInput) { // controlla se il numero di input è inferiore al massimo
    const numero = Number(userNumber.value);
    listaNumeri.push(numero);
    userNumber.value = "";
    inputCounter++;

    if (inputCounter === maxInput) { // disabilito gli input quando il maxinput raggiunge l'inputcounter
      userNumber.disabled = true;
      button.disabled = true;
    }
    
    // Ora vedo se i due array hanno gli stessi valori

    for (let i = 0; i < listaNumeri.length; i++) {
      if (numero === listaNumeri[i]) {
        corretti++;
      } else {
        sbagliati++;
      }
    }
    
    correttiOutput.textContent = `Numeri corretti: ${corretti}`;
    sbagliatiOutput.textContent = `Numeri sbagliati: ${sbagliati}`;
  }
    console.log(listaNumeri);
  }
);









