const phrase = prompt("Inserisci una parola", "anna");
console.log(phrase);
let palyndrome = false;
for (let i = phrase.length - 1; i >= 0; i--) {
  const letters = phrase[i];
  console.log(letters);
  if (letters === phrase) {
    palyndrome = true;
  } else "la parola non è palindroma";
}
console.log(palyndrome);
