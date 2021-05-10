// https://developer.mozilla.org/pt-BR/docs/Web/Events


var tempos;

var inputTxt = document.getElementById('input1');

function escreveLogOnLoad() {

  tempos = Date.now();

  console.log("CARREGOU");

}

function escreveLogOnMouseOver() {

  // https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

  window.alert("Opa, testando o onMouseOver")

  var tempoCarregamento = Date.now() - tempos;

  console.log("Tempo de carregamento da página até o input " + tempoCarregamento)

}

function escreveLogEstaSaindo() {

  window.alert("Ele quer Sair")

  console.log("Ele quer Sair")

}
