function rollDice(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1;
  }
  
  // Ejemplos
  console.log(rollDice(6));  // Número aleatorio entre 1 y 6
  console.log(rollDice(20)); // Número aleatorio entre 1 y 20
  