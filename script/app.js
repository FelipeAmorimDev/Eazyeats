const categoriaPratos = document.querySelectorAll(".pratos__item__btn");
const categoriaBebida = document.querySelectorAll(".bebida__btn")
categoriaPratos.forEach((item) => {
  item.addEventListener("click", selecionarItem)
})

function selecionarItem(event) {
  let selected = pratoSelecionado()
  if(selected.length === 0){
    event.target.parentElement.classList.add("item-checked")
  }
  else{
    let eventId = event.target.parentElement.id;
    let selectId = selected[0].id
    if(!(eventId === selectId)){
      selected[0].classList.remove("item-checked")
      event.target.parentElement.classList.add("item-checked")
    }
    
  }
  return event;
}


function pratoSelecionado() {
  const pratoSection = document.querySelectorAll(".pratos__item--pratos")
  let itens = []
  var teste = pratoSection.forEach((element, index) => {
    if(element.classList.contains("item-checked")){
      itens.push(pratoSection[index])
    }
  })
  return itens;
}

function bebidaSelecionada() {
  const bebidaSection = document.querySelectorAll(".pratos__item--bebida")
  let itens = []
  var teste = bebidaSection.forEach((element, index) => {
    if(element.classList.contains("item-checked")){
      itens.push(bebidaSection[index])
    }
  })
  return itens;
}

