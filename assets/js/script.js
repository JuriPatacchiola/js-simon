// le mie varianti
let numeriCasuali = [];
let tempo = 30;
let intervallo;


// Genera 5 numeri casuali diversi
function generaNumeri() {
  numeriCasuali = [];

  for (let i = 0; i < 5; i++) {
    let nuovoNumero = Math.floor(Math.random() * 99) + 1;

    // Se il numero è già presente, rigeneralo
    if (numeriCasuali.includes(nuovoNumero)) {
      i = i - 1; // torno indietro di uno
    } else {
      numeriCasuali.push(nuovoNumero);
    }
  }
}
