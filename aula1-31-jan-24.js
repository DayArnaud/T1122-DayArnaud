// Desafio 01 - Verificar Elegibilidade para Voto
// Receba através do prompt:
// idade
// nacionalidade
// Então deve retornar true se a pessoa for elegível para votar, o que ocorre quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira", caso contrário, retorna false.
// Entrada:
// idade: 16 - brasileira => saída: true
// idade: 15 - brasileira => saída: false
// idade: 18 - brasileira => saída: true
// idade: 16 - eua => saída: false
// idade: 15 - eua => saída: false
// idade: 18 - eua => saída: false

let age = prompt("Digite sua idade:");
let nacionality = prompt("Digite sua nacionalidade:");

if (idade >= 16 && nacionalidade.toLowerCase() === "brasileira") {
  alert("true - Você é elegível para votar.");
} else {
  alert("false - Você não é elegível para votar.");
}

// Receba através do prompt:
// salario
// scoreDeCredito
// idade
// Então deve retornar true se a pessoa for aprovada para um empréstimo nas seguintes condições:
// O salário for maior ou igual a 5000.
// O score de crédito for maior ou igual a 700. ● A idade for maior ou igual a 18.
// Entrada: Salário: 5001 - Score: 701 - idade: 19 Salário: 5000 - Score: 700 - idade: 18 Salário: 4999 - Score: 700 - idade: 18 Salário: 5000 - Score: 699 - idade: 18 Salário: 5000 - Score: 700 - idade: 17
// => Saída: true
// => Saída: true
// => Saída: false
// => Saída: false
// => Saída: false

alert(
  prompt("Digite seu salário:") >= 5000 &&
    prompt("Digite seu score de crédito:") >= 700 &&
    prompt("Digite sua idade:") >= 18
    ? "true - Aprovado."
    : "false - Não aprovado."
);

// Desafio 03 - Verificar Compatibilidade de Plataformas
// Receba através do prompt dois argumentos: ● navegador
// sistemaOperacional
// Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema operacional for "Windows" ou "Mac".
// Entrada: navegador: Chrome navegador: Chrome
// navegador: Firefox navegador: Firefox navegador: Firefox navegador: Safari
// - sistemaOperacional: Windows => - sistemaOperacional: Mac => - sistemaOperacional: Windows => - sistemaOperacional: Mac => - sistemaOperacional: Sony => - sistemaOperacional: Mac =>
// Saída: true
// Saída: true
// Saída: true
// Saída: true
// Saída: false
// Saída: false
alert(
  (prompt("Digite seu navegador:") === "Chrome" ||
    prompt("Digite seu navegador novamente:") === "Firefox") &&
    (prompt("Digite seu sistema operacional:") === "Windows" ||
      prompt("Digite seu sistema operacional novamente:") === "Mac")
    ? "true - Compatível."
    : "false - Não compatível."
);

// Desafio 04 - Verificar Elegibilidade para Desconto em Compra
// Receba através do prompt:
// idade
// compraMinima
// isNewClient
// Deve retornar true se a pessoa for elegível para um desconto, o que ocorre quando:
// A idade for maior ou igual a 60 anos.
// E a compra for maior ou igual a R$ 100.
// E se isNewClient for False
// Entrada: idade: 65 - compraMinima: 100 - isNewClient: false =>
// idade: 45 - compraMinima: 120 - isNewClient: true =>
// idade: 45 - compraMinima: 120 - isNewClient: false => Saída: false idade: 55 - compraMinima: 50 - isNewClient: false => Saída: false

alert(
  prompt("Digite sua idade:") >= 60 &&
    prompt("Digite o valor da compra:") >= 100 &&
    prompt("Você já comprou conosco antes? Responda true ou false:") === false
    ? "true - Elegível."
    : "false - Não elegível."
);
