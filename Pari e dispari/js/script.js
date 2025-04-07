//
// FUNCTIONS
//

function isEvenNumber(value) {
  // Dichiarazione di funzione
  // Restituisco se è pari (true)
  return value % 2 === 0;
}

// genero numero random da 1 a 5 con funzione
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

//
// MAIN
//

// utente sceglie pari o dispari
const sumChoice = prompt("Scegli pari o dispari", "pari");
console.log(sumChoice);

// utente sceglie numero da 1 a 5
const numberChoice = parseInt(prompt("Scegli un numero da 1 a 5", "3"));
console.log(numberChoice);

const pcNumberFive = getRandomNumber(5);
console.log(pcNumberFive);

// sommo i due numeri
const sum = numberChoice + pcNumberFive;
console.log(sum);

const isSumEven = isEvenNumber(sum); // Invocazione di funzione

// dichiaro chi ha vinto
if (
  (sumChoice === "pari" && isSumEven === true) ||
  (sumChoice === "dispari" && isSumEven === false)
) {
  alert("Hai vinto!");
} else {
  alert("Hai perso...");
}
