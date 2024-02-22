// Exercício 1
// Utilizando um loop for, calcule a soma dos números de 1 a 10 e imprima o resultado.
// (1+2=3+3=6+4=10+5=15)
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Exercício 2
// Crie um objeto representando uma pessoa com nome, idade e cidade. Utilize um loop for-in para imprimir no console todas as propriedades e os valores do objeto
const dog = {
  name: "Ghibli",
  age: 3,
  city: "São Paulo",
};

for (const prop in dog) {
  console.log(`${prop}: ${dog[prop]}`);
}

// Exercício 3
// Crie um array com pelo menos 5 nomes de frutas.
// Utilize um loop for-of para imprimir no console cada nome de fruta.
const fruits = ["apple", "banana", "orange", "mango", "pear"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Exercício 4
// Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop for.
// Saída: N X 1 = 10
const number = 8;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Exercício 5
// Crie um objeto com valores numéricos e utilize um loop for-in para calcular e imprimir a soma desses valores.
// { valor1: 10, valor2: 20, valor3: 30, valor4: 40 }
const newValues = { value1: 10, value2: 20, value3: 30, value4: 40 };
let sum2 = 0;

for (const item in newValues) {
  sum2 += newValues[item];
}

console.log(sum2);

// Exercício 6
// Faça um mecanismo de busca dentro de um array usando for. [1,2,3,4,5,6,7,8,9,10]
// Achei o número 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = 7;

for (const number of numbers) {
  if (number === found) {
    console.log(`Found the number ${found}`);
    break;
  }
}

// Desafio 7
// Ache a lógica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N como entrada e retorna os primeiros N termos da sequência.
// Exemplo:
// Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8]
// Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, ..., 377]
const generateFibonacci = (n) => {
  let sequence = [1, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, n);
};
console.log(generateFibonacci(6));
console.log(generateFibonacci(14));

// Desafio 8
// Crie um programa que pede ao usuário para inserir uma palavra e conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for e estruturas condicionais if para realizar a contagem.
// (Não precisa considerar acentos. Ex.: aviao)
const insertedWord = "abacaxi";
let vowelCounter = 0;
const vowels = "aeiou";

for (const letter of insertedWord) {
  if (vowels.includes(letter)) {
    vowelCounter++;
  }
}
console.log(vowelCounter);

// Desafio 9
// Criar um algoritmo de ordenação de arrays;
// novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]
// 09.01 - Método que faz isso (Achar o método que ordena os arrays)
let newArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

newArray.sort((a, b) => a - b);

console.log(newArray);

// Super desafio 10
// Fazer um simulador de rolagem de dados, que receba como input N dados de 6 lados e mostre as rolagens individuais e a soma dos valores
// Entradas:
// Quantidade de dados: 2
const rollDiceFirst = (numberOfDice) => {
  let rolls = [];
  let sum = 0;

  for (let i = 0; i < numberOfDice; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
    sum += roll;
  }
  console.log(`Rolls: ${rolls.join(", ")}`);
  console.log(`Sum: ${sum}`);
};
rollDiceFirst(2);

// Super Desafio +
// 11 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e mostre as rolagens individuais e a soma dos valores?
// Entradas:
// Quantidade de dados: 2
// Quantidade de lados: 9
function rollDiceScd(numberOfDice, numberOfSides) {
  let rolls = [];
  let sum = 0;

  for (let i = 0; i < numberOfDice; i++) {
    let roll = Math.floor(Math.random() * numberOfSides) + 1;
    rolls.push(roll);
    sum += roll;
  }
  console.log(`Rolls: ${rolls.join(", ")}`);
  console.log(`Sum: ${sum}`);
}
rollDiceScd(2, 9);

// Super Desafio ++
// 12 - Fazer um simulador de rolagem de dados, que receba como input N dados e N lados e quantidade de tentativas e mostre as rolagens individuais e a soma dos valores
// Entradas:
// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3
const rollDiceThird = (numberOfDice, numberOfSides, numberOfAttempts) => {
  for (let attempt = 0; attempt < numberOfAttempts; attempt++) {
    let rolls = [];
    let sum = 0;

    for (let i = 0; i < numberOfDice; i++) {
      let roll = Math.floor(Math.random() * numberOfSides) + 1;
      rolls.push(roll);
      sum += roll;
    }
    console.log(
      `Attempt ${attempt + 1}: Rolls: ${rolls.join(", ")}, Sum: ${sum}`
    );
  }
};
rollDiceThird(3, 9, 3);

console.log(Math.floor(Math.random() * 6 + 1));
