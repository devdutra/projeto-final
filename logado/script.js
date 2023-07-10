var preco = document.querySelector("#valorTotal")
var qtdItens = document.querySelector("#qtdItens")
var jogo1 = document.querySelector("#jogo1")
var jogo2 = document.querySelector("#jogo2")
var jogo3 = document.querySelector("#jogo3")
var jogo4 = document.querySelector("#jogo4")
var jogo5 = document.querySelector("#jogo5")
var jogo6 = document.querySelector("#jogo6")
var jogo7 = document.querySelector("#jogo7")
var jogo8 = document.querySelector("#jogo8")
var jogo9 = document.querySelector("#jogo9")
var jogo10 = document.querySelector("#jogo10")
var removeItem = document.querySelector("#menos")

var fade = document.querySelector('#fade')
var modal = document.querySelector('#modal')
var carrinho = document.querySelector('#carrinho')

var abrirModal = document.querySelector('#abrir-carrinho')
var ativaModal = [fade,abrirModal]


var soma = 0
var contadorCarrinho = 1

var tabela = [
  {nome: 'FINAL FANTASY XVI PS5', valor:250},
  {nome: 'FINAL FANTASY XV SEMINOVO', valor:95},
  {nome: 'GTA 5', valor:490},
  {nome: 'FINAL FANTASY WORLD', valor:90},
  {nome: 'FIFA 2022', valor:135},
  {nome: 'FIFA 2023', valor:520},
  {nome: 'GOD - RAGNAROK', valor:209},
  {nome: 'ASSASINS CREED - VALHALLA', valor:135},
  {nome: 'CALL OF DUTTY - MFW', valor:220},
  {nome: 'HORIZON', valor:157}
]

jogo1.addEventListener('click', ()=>{
soma += (tabela[0].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[0])
})

jogo2.addEventListener('click', ()=>{
soma += (tabela[1].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[1])
})
jogo3.addEventListener('click', ()=>{
soma += (tabela[2].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[2])
})
jogo4.addEventListener('click', ()=>{
soma += (tabela[3].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[3])
})
jogo5.addEventListener('click', ()=>{
soma += (tabela[4].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[4])
})
jogo6.addEventListener('click', ()=>{
soma += (tabela[5].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[5])
})
jogo7.addEventListener('click', ()=>{
soma += (tabela[6].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[6])
})
jogo8.addEventListener('click', ()=>{
soma += (tabela[7].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[7])
})
jogo9.addEventListener('click', ()=>{
soma += (tabela[8].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[8])
})
jogo10.addEventListener('click', ()=>{
soma += (tabela[9].valor)
qtdItens.innerHTML = ` ${contadorCarrinho++}`
console.log(tabela[9])
})

for (var i=0; i < removeItem; i++){
  removeItem[i].addEventListener("click", function(event){
    event.qtdItens.remove()
  })
}

var toggleModal = ()=>{
  fade.classList.toggle('hide')
  modal.classList.toggle('hide')
}

ativaModal.map((el)=>{
  el.addEventListener('click', ()=>toggleModal())
})

abrirModal.addEventListener('click', ()=>{
let soma = 0

for (let i = 0; qtdItens.length; i++ ){
  if (qtdItens[i].value >= 1){
    let valorTotal = ((tabela[i].valor) * qtdItens.value)
  }

  carrinho.innerHTML += `<div>
                         <p> teste ${tabela[i].nome} </p>
                         <p> ${qtdItens[i].valor}x</p>
                         <p> R$ ${valorTotal.toFixed(2).replace('.', ',')} </p>
                         </div>`
                         somaValores += valorTotal  
  }
soma.value = `R$${soma.toFixed(2)}` 

})
