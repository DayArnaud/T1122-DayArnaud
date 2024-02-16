// Desafio 4
//- Adivinhe o Número
// Crie um programa que gere um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Use um loop while para continuar pedindo ao usuário que adivinhe até que ele acerte o número. Forneça dicas informando se o número é maior ou menor.

let drawnNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;

do {
  userGuess = parseInt(
    prompt(
      "Faça sua aposta! Digite um número de 1 a 100 e veja se você acertou..."
    )
  );
  if (userGuess < drawnNumber) {
    alert("Quase lá, chute um número maior!");
  } else if (userGuess > drawnNumber) {
    alert("Quase lá, chute um número menor!");
  }
} while (userGuess !== drawnNumber);

alert("Parabéns! Você acertou o número!");

//Somente com WHILE
// let drawnNumber = Math.floor(Math.random() * 100) + 1;
// let userGuess;

// while (true) {
//   userGuess = parseInt(
//     prompt(
//       "Faça sua aposta! Digite um número de 1 a 100 e veja se você acertou..."
//     )
//   );

//   if (userGuess === drawnNumber) {
//     alert("Parabéns! Você acertou o número!");
//     break;
//   } else if (userGuess < drawnNumber) {
//     alert("Quase lá, chute um número maior!");
//   } else {
//     alert("Quase lá, chute um número menor!");
//   }
// }
