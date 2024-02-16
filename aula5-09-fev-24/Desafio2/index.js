// Desafio 2
//- Números Primos
// Crie um programa que peça ao usuário para inserir um número e use um loop while para verificar se o número é primo ou não. Um número primo é aquele que só é divisível por 1 e por ele mesmo. Imprima se o número é primo ou não.
let primo = true;
let numInput = parseInt(
  prompt(
    "Insira um número inteiro maior do que 1 e descubra se é um número primo:"
  )
);

for (let divididoPor = 2; divididoPor < numInput; divididoPor++) {
  if (numInput % divididoPor === 0) {
    primo = false;
    break;
  }
}
if (primo === true) {
  alert(`O número ${numInput} é primo`);
} else {
  alert(`O número ${numInput} não é primo`);
}
