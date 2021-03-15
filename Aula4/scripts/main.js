// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

var var1 = 333;
var var2 = 33;

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_comparacao

if(3 === "3") console.log("Inteiro igual String");

if (var1 < var2) {
    console.log("Var 1 é menor")
} else if (var1 == var2) {
    console.log("Var 1 é igual Var 2")
} else {
    console.log("Var 1 é Maior Var 2")
}


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var1 = Math.random() * 100;
var2 = Math.random() * 100;

var resultado;

console.log(var1)

// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/
const pnumeros = document.querySelector("#numeros");
pnumeros.textContent = 'o Valor de var1 é ' + var1 + " e " + var2;

if (var1 > var2) {
    resultado = "Var 1 é maior que Var2"
} else if (var2 > var1) {
    resultado = "Var2 é maior que Var1"
} else {
    resultado = "Os dois números são iguais"
}

const presultado = document.querySelector("#resultado");
presultado.textContent = resultado;


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
const expr = 'Oranges';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
  throw new Error('Oooops!');
// Para usar no código do Bhaskara caso NAO TENHA RAIZES REAIS
