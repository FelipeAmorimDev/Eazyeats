const categoriaPratos = document.querySelectorAll(".pratos__item__btn");
const categoriaBebida = document.querySelectorAll(".bebida__btn");
const categoriaSobremesa = document.querySelectorAll(".sobremesa__btn");

const modal = document.querySelector(".modal");
const cancelarBtn = document.querySelector(".modal #cancelar")

const layer = document.querySelector(".layer")
let qntItemCarrinho = 0;

function selecionarItem(event) {
  let selected;
  var itensCarrinho = []
  selected = itemSelecionado(event)

  if (selected.length === 0) {
    event.target.parentElement.classList.add("item-checked")
    event.target.parentElement.children[0].children[3].children[0].children[0].style.opacity = "1"
    qntItemCarrinho++;
    if (qntItemCarrinho === 3) {
      carrinhoLiberar()
    }
  }
  else {
    let eventId = event.target.parentElement.id;
    let selectId = selected[0].id
    if (!(eventId === selectId)) {
      selected[0].classList.remove("item-checked")
      selected[0].children[0].children[3].children[0].children[0].style.opacity = "0"
      
      event.target.parentElement.classList.add("item-checked")
      event.target.parentElement.children[0].children[3].children[0].children[0].style.opacity = "1"
    }
  }
  return event;
}

function itemSelecionado(classitem) {
  let className = "." + classitem.target.parentElement.classList[0];
  const itemElement = document.querySelectorAll(className)
  let itens = []
  var teste = itemElement.forEach((element, index) => {
    if (element.classList.contains("item-checked")) {
      itens.push(itemElement[index])
    }
  })
  return itens;
}

function carrinhoLiberar() {
  const botaoPedido = document.querySelector(".botao button")

  if (qntItemCarrinho === 3) {
    botaoPedido.style.backgroundColor = "#32B72F";
    botaoPedido.innerHTML = "Fechar Pedido"
    botaoPedido.style.cursor = "pointer";
  }

  botaoPedido.addEventListener("click", () => {
    let itensName = document.querySelectorAll(".item-checked h3")
    let valores = document.querySelectorAll(".item-checked span");
    let total = parseFloat(valores[0].outerText.replace("R$ ", "")) +
      parseFloat(valores[1].outerText.replace("R$ ", "")) +
      parseFloat(valores[2].outerText.replace("R$ ", ""));

    layer.style.display = "block"

    modal.innerHTML = `<h2>Confirme seu pedido</h2>
                      <ul class="modal__list">
                        <li class="modal__item">${itensName[0].outerText}<span>${valores[0].outerText.replace("R$ ", "")}</span></li>
                        <li class="modal__item">${itensName[1].outerText}<span>${valores[1].outerText.replace("R$ ", "")}</span></li>
                        <li class="modal__item">${itensName[2].outerText}<span>${valores[2].outerText.replace("R$ ", "")}</span></li>
                      </ul>
                      <p>Total: <span>R$${total}</span></p>
                      <button id="fazer-pedido" onclick="fazerPedido()">Tudo certo,pode pedir!</button>
                      <button id="cancelar" onclick="cancelar()">Cancelar</button>`;

    modal.style.display = "block";
  })
}

function cancelar() {
  modal.style.display = "none"
  layer.style.display = "none"
}

function fazerPedido() {
  let itensName = document.querySelectorAll(".item-checked h3")
  let valores = document.querySelectorAll(".item-checked span");
  let total = parseFloat(valores[0].outerText.replace("R$ ", "")) +
    parseFloat(valores[1].outerText.replace("R$ ", "")) +
    parseFloat(valores[2].outerText.replace("R$ ", ""));
  const templateCupom = `Olá, gostaria de fazer o pedido:
- Prato: ${itensName[0].innerHTML}
- Bebida: ${itensName[1].innerHTML}
- Sobremesa: ${itensName[2].innerHTML}
Total: R$ ${total.toFixed(2)}`

  window.location.href = "https://wa.me/5587981082039?text=" + encodeURIComponent(templateCupom)

}


categoriaPratos.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})
categoriaBebida.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})
categoriaSobremesa.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})