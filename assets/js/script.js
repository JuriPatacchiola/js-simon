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