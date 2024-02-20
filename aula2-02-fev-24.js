// Desafio 01
// Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a soma, subtração, multiplicação e divisão desses números. Armazene os resultados em um array, sendo o
// Index: 0 = Soma
//        1 = subtração
//        2 = multiplicação
//        3 = divisão

let numero1 = 2;
let numero2 = 8;

let results = [];

results.push(numero1 + numero2);
results.push(numero1 - numero2);
results.push(numero1 * numero2);
results.push(numero1 / numero2);

console.log(results);

// Desafio 02
// Crie um vetor (array) chamado notas com as notas de um aluno em três disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática da média aritmética.

let rates = [7.5, 8.2, 9.8];
let average = (rates[0] + rates[1] + rates[2]) / 3;
console.log(`A média das notas é ${average}`);

let rate = [7.5, 8.2, 9.8];
let averageResult = rate.reduce((acum, value) => acum + value, 0) / rate.length;
console.log(`The rate average is ${averageResult}`);

// Desafio 03
// Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz 2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a determinante dessa matriz usando a fórmula matemática de determinante.
// Cria uma matriz 2x2 com valores numéricos
let matriz = [
  [1, 2],
  [3, 4],
];

let determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];

console.log(`A determinante da matriz é: ${determinante}`);

// Desafio 04
// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto interno) desses dois vetores usando a fórmula matemática do produto escalar.
let vector1 = [1, 2, 3];
let vector2 = [4, 5, 6];

let dotProduct = vector1.reduce((accum, current, index) => {
  return accum + current * vector2[index];
}, 0);

console.log(`The dot product of the vectors is: ${dotProduct}`);

// Com for loop
let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];
let produtoEscalar = 0;

for (let i = 0; i < vetor1.length; i++) {
  produtoEscalar += vetor1[i] * vetor2[i];
}
console.log(`O produto escalar dos vetores é: ${produtoEscalar}`);

// Desafio 05
// Dado um array numeros, crie um novo array que contenha apenas os números pares do array original.
const numbers = [3, 8, 15, 21, 30, 37, 42];
let newArray = [];

for (number of numbers) {
  if (number % 2 === 0) {
    newArray.push(number);
  }
}
console.log(newArray);

// com filter
let even = numbers.filter((number) => number % 2 === 0);
console.log(even);

// Desafio 06
// Dado um array nomes, remova todos os nomes que contenham menos de 5 letras.
const names = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];
let newNames = names.filter((name) => name.length >= 5);
console.log(newNames);

// Desafio 07
// Dado um array idades, encontre o índice do primeiro elemento que seja maior ou igual a 18.
const ages = [15, 22, 17, 20, 30, 12];
let result = ages.findIndex((age) => age >= 18);
console.log(result);

// Desafio 08
// Dado um array idades, encontre o índice do último elemento que sejam maior ou igual a 18.
const newAges = [15, 22, 17, 20, 30, 12];
let lastIndex = newAges.reduceRight((accum, current, index) => {
  return accum === -1 && current >= 18 ? index : accum;
}, -1);
console.log(lastIndex);

// Desafio 09
// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota mais baixa e a nota mais alta do conjunto.
const rates2 = [8, 9, 7, 5, 10, 6];
const highRate = Math.max(...rates2);
const lowRate = Math.min(...rates2);

const highRateIndex = rates2.indexOf(highRate);
const lowRateIndex = rates2.indexOf(lowRate);

let newRateArray = [...rates2];
if (highRateIndex !== -1) newRateArray.splice(highRateIndex, 1);
if (lowRateIndex !== -1) newRateArray.splice(lowRateIndex, 1);

const average2 =
  newRateArray.reduce((accum, current) => accum + current, 0) /
  newRateArray.length;
console.log(average2);

// com sort()
const notas = [8, 7, 9, 6, 10, 5];
notas.sort((a, b) => a - b);
notas.shift();
notas.pop();

const media =
  notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0) /
  notas.length;
console.log(media);

// Desafio 10
// Dado um array palavras, crie uma nova string que seja a concatenação de todas as palavras do array, separadas por um espaço em branco.
const words = ["Este", "é", "um", "exercício", "interessante"];

const newWords = words.join(" ");
console.log(newWords);
