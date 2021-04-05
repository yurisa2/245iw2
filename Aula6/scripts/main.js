function jogaNoConsole(entrada) {

  console.log("Ta indo!" + Math.random() + entrada)

}

function soma(a, b) {

  return a+b
}


function executaSoma(a, b) {

  const eleResultado = document.querySelector("#resultado")

  eleResultado.textContent = soma(a, b)
}


function limpaResultado() {

  const eleResultado = document.querySelector("#resultado")

  eleResultado.textContent = ""

}




function somaInputs() {


  const eleInput1 = document.querySelector("#input1")
  const eleInput2 = document.querySelector("#input2")

  var a = eleInput1.value
  var b = eleInput2.value

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  a = parseInt(a)
  b = parseInt(b)


  const eleResultadoInputs = document.querySelector("#resultadoInputs")


  eleResultadoInputs.textContent = soma(a, b)



}
