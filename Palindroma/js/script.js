const phrase = prompt("Inserisci una parola", "anna");
console.log(phrase);
let palyndrome = true;
// const phraseArray = [];
// const invertedPhraseArray = [];

// for (let i = 0; i < phrase.length; i++) {
//   phraseArray.push(phrase[i]);
// }
// console.table(phraseArray);

// for (let i = phrase.length - 1; i >= 0; i--) {
//   invertedPhraseArray.push(phrase[i]);
// }
// console.table(invertedPhraseArray);

// for (let i = 0; i < phrase.length; i++) {
//   if (phraseArray[i] !== invertedPhraseArray[i]) {
//     palyndrome = false;
//   }
// }

// console.log(palyndrome);

// girafarig
// 0 - length -1
// 1 - length -1 -1
// 2 - length -1 -1 -1

for (let i = 0; i < phrase.length / 2 && palyndrome; i++) {
  console.log(phrase[i]);

  if (phrase[i] !== phrase[phrase.length - 1 - i]) {
    palyndrome = false;
  }
}
console.log(palyndrome);
