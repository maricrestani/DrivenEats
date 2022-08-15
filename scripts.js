
let numPedidos = 0
let food = 0
let drink = 0
let dessert = 0

function escolherComida(comida) {
  let comidaEscolhida = document.querySelector(".food-box");
  const selecionado = document.querySelector(comida)

  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove('selected');
  } else {
    numPedidos++;
  }

  selecionado.classList.toggle("selected");

  let food = comida;
}

function escolherBebida(bebida) {
  let bebidaEscolhida = document.querySelector(".drink-box");
  const selecionado = document.querySelector(bebida)

  if (bebidaEscolhida !== null) {
    bebidaEscolhida.classList.remove('selected');
  } else {
    numPedidos++;
  }

  selecionado.classList.toggle("selected");

  let drink = bebida;
}

function escolherSobremesa(sobremesa) {
  let sobremesaEscolhida = document.querySelector(".dessert-box");
  const selecionado = document.querySelector(sobremesa)

  if (sobremesaEscolhida !== null) {
    sobremesaEscolhida.classList.remove('selected');
  } else {
    numPedidos++;
  }

  selecionado.classList.toggle("selected");

  let dessert = sobremesa;
}





function finalizarPedido() {

}














