var valor1 = document.getElementById('#input1');
var valor2 = document.getElementById('#input2');

var resultBox = document.getElementById('#resultado');



function multiplicacao() {

    resultBox.value = valor1.value * valor2.value;
}

function divisao() {

    resultBox.value = valor1.value / valor2.value;
}

function soma() {

    resultBox.value = parseInt(valor1.value) + parseInt(valor2.value);
}

function subtracao() {

    resultBox.value = valor1.value - valor2.value;
}
