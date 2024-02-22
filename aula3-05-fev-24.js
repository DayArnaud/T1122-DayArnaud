// Desafio 01
// Crie um mapa para representar uma lista de compras const listaDeCompras = new Map()
// 1. Adicione itens à lista de compras com a quantidade desejada Maçã - 5
//     Banana - 3
//     Leite - 4
//     Pão - 10
// 2. Verifique se um item específico está na lista de compras
// 3. Verifique a quantidade de um item específico da lista
// 4. Modifique a quantidade de um item específico da lista
// 5. Remova um item específico da lista

const shopList = new Map();
shopList.set("Maçã", "5");
shopList.set("Banana", "3");
shopList.set("Leite", "4");
shopList.set("Pão", "10");
console.log(shopList.has("Banana"));
console.log(shopList.get("Banana"));
shopList.set("Banana", 6);
shopList.delete("Banana");

console.log(shopList);

// Desafio 02
// Crie uma agenda de contatos que armazene vários contatos em um array,
// modelando o "contato" como um objeto: (Nome, tphone, email) (Não utilizar Map)
let contactList = [];

const addContact = (name, phone, email) => {
  const contact = { Name: name, Phone: phone, Email: email };
  contactList.push(contact);
};

const searchContact = (name) => {
  return contactList.find((contact) => contact.Name === name);
};

const removeContact = (name) => {
  contactList = contactList.filter((contact) => contact.Name !== name);
};

const editContact = (name, newPhone, newEmail) => {
  const contact = searchContact(name);
  if (contact) {
    contact.Phone = newPhone;
    contact.Email = newEmail;
  }
};

addContact("Juca", "1111-1111", "juca@email.com");
addContact("Luca", "2222-2222", "luca@email.com");

console.log(searchContact("Juca"));
editContact("Juca", "1111-2222", "jucanew@email.com");
removeContact("Luca");

console.log(contactList);

// Desafio 03
// Criar um dicionário de sinônimos usando Array e Objs
// Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente", "satisfeito"]
// dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
// dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"]
const synonymDictionary = {
  happy: ["joyful", "content", "pleased"],
  sad: ["melancholic", "downcast", "depressed"],
  good: ["great", "excellent", "wonderful"],
};

// Desafio 04
// Criar um dicionário de sinônimos usando Map
// Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre",
// "contente", "satisfeito"]
// dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido",
// "deprimido"],
// dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"]
const synonymDictionary2 = new Map();

synonymDictionary2.set("happy", ["joyful", "content", "pleased"]);
console.log(synonymDictionary2.get("happy"));
synonymDictionary2.set("sad", ["melancholic", "downcast", "depressed"]);
console.log(synonymDictionary2.get("sad"));
synonymDictionary2.set("good", ["great", "excellent", "wonderful"]);
console.log(synonymDictionary2.get("good"));

// Desafio 05
// Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade. Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false) Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)
const person = {
  name: "Jaques Delaux",
  age: 38,
  city: "Vichy",
};
console.log(person.age >= 18);
console.log(person.city !== "São Paulo");

// Desafio 06
// Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2. Calcule a média das notas.
// Verifique se a média é maior ou igual a 7 usando operadores de comparação.
const student = {
  name: "Jaques Delaux",
  grade1: 7,
  grade2: 8,
};
const average = (student.grade1 + student.grade2) / 2;
console.log(average >= 7);

// Desafio 07
// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores são seus preços.
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva.
const fruits = new Map([
  ["banana", 12],
  ["apple", 19],
  ["grape", 20],
  ["pear", 15],
]);
console.log(fruits.get("apple") > fruits.get("banana"));
console.log(fruits.get("pear") !== fruits.get("grape"));
