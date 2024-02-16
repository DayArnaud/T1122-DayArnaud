//Desafio 5
//- Jogo de Adivinhação com Limite
// Modifique o jogo de adivinhação do Desafio 4 para limitar o número de tentativas. Se o usuário não adivinhar o número dentro de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.
let drawnNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
let attempts = 0;
let maxAttempts = 5;

do {
  userGuess = parseInt(
    prompt(
      `Faça sua aposta! Digite um número de 1 a 100. Você tem ${
        maxAttempts - attempts
      } tentativas restantes.`
    )
  );
  attempts++;

  if (userGuess === drawnNumber) {
    alert("Parabéns! Você acertou o número! Arrasou!");
    break;
  } else if (attempts >= maxAttempts) {
    alert(
      `Você atingiu o limite de tentativas. O número sorteado era ${drawnNumber}. Snif snif`
    );
    break;
  } else if (userGuess < drawnNumber) {
    alert(
      `Quase lá, chute um número maior! Você ainda tem ${
        maxAttempts - attempts
      } tentativas!`
    );
  } else {
    alert(
      `Quase lá, chute um número menor! Você ainda tem ${
        maxAttempts - attempts
      } tentativas!`
    );
  }
} while (attempts < maxAttempts);
