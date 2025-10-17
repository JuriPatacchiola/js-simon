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

// Avvia il gioco e il timer
function iniziaGioco() {
  generaNumeri();
  mostraNumeri();
  console.log("Numeri da ricordare:", numeriCasuali);

  document.getElementById("result").textContent = "";
  document.getElementById("inputs").innerHTML = "";

  tempo = 30;
  document.getElementById("timer").textContent = "Tempo: " + tempo + "s";

  intervallo = setInterval(function() {
    tempo = tempo - 1;
    document.getElementById("timer").textContent = "Tempo: " + tempo + "s";
    if (tempo === 0) {
      clearInterval(intervallo);
      mostraInput();
    }
  }, 1000);
}

// Dopo 30s, mostra 5 input per scrivere i numeri
function mostraInput() {
  document.getElementById("numbers").textContent = "";
  let div = document.getElementById("inputs");
  div.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "--";
    div.appendChild(input);
  }

  let bottone = document.createElement("button");
  bottone.textContent = "Controlla";
  bottone.onclick = controllaRisposte;
  div.appendChild(bottone);
}
