const categoriaPratos = document.querySelectorAll(".pratos__item__btn");
const categoriaBebida = document.querySelectorAll(".bebida__btn")
const categoriaSobremesa = document.querySelectorAll(".sobremesa__btn")
let qntItemCarrinho = 0;

categoriaPratos.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})
categoriaBebida.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})
categoriaSobremesa.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})



function selecionarItem(event) {
  let selected;
  selected = itemSelecionado(event)

  if (selected.length === 0) {
    event.target.parentElement.classList.add("item-checked")
    qntItemCarrinho++;
    if(qntItemCarrinho===3){
      carrinhoLiberar()
    }
  }
  else {
    let eventId = event.target.parentElement.id;
    let selectId = selected[0].id
    if (!(eventId === selectId)) {
      selected[0].classList.remove("item-checked")
      event.target.parentElement.classList.add("item-checked")
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

function carrinhoLiberar(){
  const botaoPedido = document.querySelector(".botao button")
  if(qntItemCarrinho===3){
    botaoPedido.style.backgroundColor = "#32B72F";
    botaoPedido.innerHTML = "Fechar Pedido"
    botaoPedido.style.cursor = "pointer";
  }
}