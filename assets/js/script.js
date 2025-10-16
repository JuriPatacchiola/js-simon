    // Creo le mie variabili
    const numbersDiv = document.getElementById("numbers");
    const timerDiv = document.getElementById("timer");
    const inputsDiv = document.getElementById("inputs");
    const resultDiv = document.getElementById("result");

    // Faccio genera 5 numeri casuali tra 1 e 100
    const randomNumbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    numbersDiv.textContent = randomNumbers.join(" - ");
    console.log("Numeri generati:", randomNumbers);

    // Metto il numero specifica che mi serve e che mi è stato richiesto
    let timeLeft = 30;
    timerDiv.textContent = `Tempo rimanente: ${timeLeft}s`;

    // Imposto il timer di 30 secondi e lo faccio arrivare a zero
    const countdown = setInterval(() => {
      timeLeft--;
      timerDiv.textContent = `Tempo rimanente: ${timeLeft}s`;

      if (timeLeft === 0) {
        clearInterval(countdown);
        startGuessPhase();
      }
    }, 1000);

    // creo la funzione per rimuove i numeri
    function startGuessPhase() {
      
      numbersDiv.textContent = "";
      timerDiv.textContent = "";
    
    // Creo un ciclo for per i miei 5 input
      for (let i = 0; i < 5; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.min = 1;
        input.max = 99;
        inputsDiv.appendChild(input);
      }

    // Aggiungo un bottone per confermare e che fa la verifica
      const button = document.createElement("button");
      button.textContent = "Verifica";
      button.onclick = checkAnswers;
      inputsDiv.appendChild(document.createElement("br"));
      inputsDiv.appendChild(button);
    
}

    // Creo la funzione che controlla l'imput 
    function checkAnswers() {
      const userNumbers = Array.from(inputsDiv.querySelectorAll("input"))
        .map(input => parseInt(input.value))
        .filter(num => !isNaN(num));

      const guessed = userNumbers.filter(num => randomNumbers.includes(num));
      const uniqueGuessed = [...new Set(guessed)];


    // Mostro i risultati a schermo
    resultDiv.innerHTML = `
        <p>Hai indovinato ${uniqueGuessed.length} numero/i su 5.</p>
        <p>Numeri corretti: ${uniqueGuessed.join(", ") || "Nessuno 😅"}</p>
        <p>I numeri originali erano: ${randomNumbers.join(", ")}</p>
    `;

    // Mostro anche i risultati nella console
    console.log("Numeri inseriti dall’utente:", userNumbers);
    console.log("Numeri corretti:", uniqueGuessed);
    console.log(`Hai indovinato ${uniqueGuessed.length} su 5`);
    console.log("Numeri originali:", randomNumbers);
    
}
