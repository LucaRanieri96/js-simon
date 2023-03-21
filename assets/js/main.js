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
