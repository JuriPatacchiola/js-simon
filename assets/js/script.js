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


// Mostra i numeri a schermo
function mostraNumeri() {
  let testo = "";
  for (let i = 0; i < numeriCasuali.length; i++) {
    testo = testo + numeriCasuali[i] + " ";
  }
  document.getElementById("numbers").textContent = testo.trim();
}
