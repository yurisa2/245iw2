// Funções https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function

var soma = new Function('a', 'b', 'return a + b');

var resultadoSoma = soma(2, 6)

console.log('O resultado de soma() é: ' + resultadoSoma)

function Soma2(arg1, arg2, arg3) {

  var resultadoSoma2 = arg1 + arg2 + arg3;

  return resultadoSoma2;
}

var resultadoDaFunctionSemantica = Soma2(1,2,3)

console.log('outro jeito de fazer funcao: ' + resultadoDaFunctionSemantica)



// Usos

function dadosAleatorios(numero) {

  var result = numero * Math.random();

  return result;
}


console.log(dadosAleatorios(3) * Soma2(3,4,5))
