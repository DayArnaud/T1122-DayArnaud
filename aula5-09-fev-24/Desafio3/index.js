// Desafio 3
//- Soma de Números Pares
// Desenvolva um programa que peça ao usuário para inserir números inteiros. Use um loop while para calcular a soma dos números pares inseridos pelo usuário. Pare a entrada quando o usuário inserir 0 e exiba a soma total.
let soma = 0;
let number;

while (true) {
  number = prompt("Insira um número inteiro ou insira '0' para parar:");
  number = parseInt(number);

  if (number % 2 === 0) {
    soma += number;
  }

  if (number === 0) {
    break;
  }
}
alert(`A soma dos números pares inseridos é: ${soma}`);

//Com DO_WHILE
// let soma = 0;
// let number;

// do {
//   number = prompt("Insira um número inteiro ou insira '0' para parar:");
//   number = parseInt(number);

//   if (number % 2 === 0) {
//     soma += number;
//   }
// } while (number !== 0);

// alert(`A soma dos números pares inseridos é: ${soma}`);
