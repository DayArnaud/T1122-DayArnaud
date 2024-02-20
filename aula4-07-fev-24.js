// Desafio 1
// Verificação de Números Pares e Ímpares (If e Ternário)
// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar.

let number = 4;

if (number % 2 === 0) {
  console.log(`${number} é par.`);
} else {
  console.log(`${number} é ímpar.`);
}

//Desafio 2
//- Verificação de Nota
// Crie um programa que recebe uma nota como entrada e atribui uma mensagem com base na nota. Use as seguintes regras:
// - Se a nota for maior ou igual a 90, imprima "Aprovado com mérito".
// - Se a nota for maior ou igual a 70 e menor que 90, imprima "Aprovado".
// - Se a nota for menor que 70, imprima "Reprovado".
let rate = 78; // Substitua 85 pela nota que você quer verificar

console.log(
  rate >= 90 ? "Aprovado com mérito" : rate >= 70 ? "Aprovado" : "Reprovado"
);

// Desafio 3
// - Determinação do Maior Número
// Escreva um programa que receba três números como entrada e determina o maior deles. Imprima o número mais alto.
let number1 = 10;
let number2 = 20;
let number3 = 15;

if (number1 >= number2 && number1 >= number3) {
  console.log(`O número mais alto é ${number1}`);
} else if (number2 >= number1 && number2 >= number3) {
  console.log(`O número mais alto é ${number2}`);
} else {
  console.log(`O número mais alto é ${number3}`);
}

//Desafio 4
// - Verificação de Triângulo
// Crie um programa que recebe três comprimentos de lados de um triângulo como entrada e determina se eles formam um triângulo equilátero (Todos os lados são iguais), isósceles (Dois lados são iguais) ou escaleno (Se nada é igual). Imprima a classificação do triângulo.
let firstSide = 8;
let scdSide = 8;
let thirdSide = 8;

if (firstSide === scdSide && scdSide === thirdSide) {
  console.log("Equilátero, 3 lados iguais");
} else if (
  firstSide === scdSide ||
  firstSide === thirdSide ||
  scdSide === thirdSide
) {
  console.log("Isósceles, só 2 lados são iguais");
} else {
  console.log("Escaleno, os três lados são diferentes");
}

// Desafio 5
// - Verificação de Ano Bissexto
// Desenvolva um programa que receba um ano como entrada e verifica se ele é bissexto ou não. Um ano bissexto é aquele que é divisível por 4, exceto por anos que são divisíveis por 100, a menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou "Não é um ano bissexto" com base na entrada. (2000, 1996)
let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`O ano ${year} é um ano bissexto`);
} else {
  console.log(`O ano ${year} não é um ano bissexto`);
}

//Desafio 6
// - Verificação de Idade que é permitido dirigir (If e Ternário)
// Crie um programa que verifica a idade de uma pessoa e determina se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais, ela pode dirigir; caso contrário, não pode.
let age = 21;

const result = age >= 18 ? "pode" : "não pode";

console.log(`Com ${age} anos, você ${result} dirigir.`);

//SWITCH

//Desafio 7
// - Verificação de Números Pares e Ímpares
// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar. (Usar switch Case)
let numero = 4;

switch (number % 2) {
  case 0:
    console.log(`O número ${numero} é par`);
    break;
  case 1:
    console.log(`O número ${numero} é par`);
    break;
  default:
    console.log("O número deve ser inteiro para ser considerado par ou ímpar");
    break;
}

// Desafio 8
// - Conversão de Notas em Conceitos
// Faça um programa que peça ao usuário para digitar uma letra e verifique se é uma vogal ou uma consoante utilizando o comando switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o programa deve exibir a mensagem "É uma vogal". Se o usuário digitar uma consoante, o programa deve exibir a mensagem "É uma consoante".
let letter = "O";

switch (letter.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`A letra ${letter} é uma vogal`);
    break;
  default:
    console.log(`A letra ${letter} é uma consoante`);
    break;
}

// Desafio 9
// - Determinação de Estação do Ano
// Escreva um programa que recebe o nome de um mês como entrada e utiliza um switch case para determinar a estação do ano correspondente. Use a seguinte correspondência de meses:
// - Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, Novembro: "Outono"
let month = "agosto";

switch (month.toLowerCase()) {
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log(`O mês de ${month} está no Inverno`);
    break;
  case "março":
  case "abril":
  case "maio":
    console.log(`O mês de ${month} está na Primavera`);
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log(`O mês de ${month} está no Verão`);
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log(`O mês de ${month} está no Outono`);
    break;
  default:
    console.log(`O mês de ${month} não é válido`);
    break;
}
