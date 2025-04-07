// utente sceglie pari o dispari
const sumChoice = prompt("Scegli pari o dispari", "pari");
console.log(sumChoice);

// utente sceglie numero da 1 a 5
const numberChoice = parseInt(prompt("Scegli un numero da 1 a 5", "3"));
console.log(numberChoice);

// genero numero random da 1 a 5 con funzione
function randomPcNumber(max) {
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
}
const pcNumberFive = randomPcNumber(5);
console.log(pcNumberFive);

// sommo i due numeri
const sum = numberChoice + pcNumberFive;
console.log(sum);

// stabilisco se la somma è pari o dispari con funzione
let even = false;
function evenNumber() {
  if (sum % 2 === 0) {
    even = true;
    return "Il numero è pari";
  } else {
    return "Il numero è dispari";
  }
}
console.log(evenNumber());

// dichiaro chi ha vinto
if (sumChoice === "pari" && even === true) {
  alert("Hai vinto!");
}
if (sumChoice === "dispari" && even === false) {
  alert("Hai vinto!");
} else {
  alert("Hai perso...");
}
