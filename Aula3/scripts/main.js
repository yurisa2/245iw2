// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types

var v1 = 123;
var v2 = 321;

var res;
console.log(res) // undefined


//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos

res = v1 + v2;
console.log(res)

res = v1 - v2;
console.log(res)

res = v1 * v2;
console.log(res)

res = v1 / v2;
console.log(res)

// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector
var paragrafo = document.querySelector("#alvo");

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent
paragrafo.textContent = res;

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var aleatorio1 = Math.random();
var aleatorio2 = Math.random();

var resAleatorio;

resAleatorio = aleatorio1 / aleatorio2;

var paragrafo1 = document.querySelector("p");
paragrafo1.textContent = resAleatorio;


var resultadoExp;

resultadoExp = (v1 * (resAleatorio + 3)) / 2;

console.log(resultadoExp)
