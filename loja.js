if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
// modal
var fade = document.querySelector('#fade')
var modal = document.querySelector('#modal')

var spanNome = document.querySelector("#spanNome")

spanNome.innerHTML = localStorage.getItem('nome')

var totalAmount = "0,00"
function ready() {
  // Botão remover produto
  const removeCartProductButtons = document.getElementsByClassName("removerDoCarrinho")
  for (var i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduto)
  }

  // Mudança valor dos inputs
  const quantityInputs = document.getElementsByClassName("quantidadeProdutos")
  for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checarVazio)
  }

  // Botão add produto ao carrinho
  const addToCartButtons = document.getElementsByClassName("btnComprar")
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", adicionarNoCarrinho)
  }

  // Botão comprar
  const purchaseButton = document.getElementsByClassName("botaoDeCompra")[0]
  purchaseButton.addEventListener("click", finalizarCompra)
}

function removeProduto(event) {
  event.target.parentElement.parentElement.remove()
  updateTotal()
}

function checarVazio(event) {
  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove()
  }

  updateTotal()
}

var toggleModal = ()=>{
  fade.classList.toggle('hide')
  modal.classList.toggle('hide')
}

// ativaModal.map((el)=>{
//   el.addEventListener('click', ()=>toggleModal())
// })


function adicionarNoCarrinho(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("product-image")[0].src
  const productName = productInfos.getElementsByClassName("product-title")[0].innerText
  const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

  const productsCartNames = document.getElementsByClassName("cart-product-title")
  for (var i = 0; i < productsCartNames.length; i++) {
    if (productsCartNames[i].innerText === productName) {
      productsCartNames[i].parentElement.parentElement.getElementsByClassName("quantidadeProdutos")[0].value++
      updateTotal()
      return
    }
  }

  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML =
    `
      <td class="product-identification">
        <img src="${productImage}" alt="${productName}" class="cart-product-image">
        <strong class="cart-product-title">${productName}</strong>
      </td>
      <td>
        <span class="cart-product-price">${productPrice}</span>
      </td>
      <td>
        <input type="number" value="1" min="0" class="quantidadeProdutos">
        <button type="button" class="removerDoCarrinho">Remover</button>
      </td>
    `
  
  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)
  updateTotal()

  newCartProduct.getElementsByClassName("removerDoCarrinho")[0].addEventListener("click", removeProduto)
  newCartProduct.getElementsByClassName("quantidadeProdutos")[0].addEventListener("change", checarVazio)
}

function finalizarCompra() {
  if (totalAmount === "0,00") {
    alert("Seu carrinho está vazio!")
  } else {   
    alert(
      `
        Obrigado por sua compra!
        Valor Total do Pedido: R$${totalAmount}
      `
    )

    document.querySelector(".cart-table tbody").innerHTML = ""
    updateTotal()
  }
}

// Atualizar o valor total do carrinho
function updateTotal() {
  const cartProducts = document.getElementsByClassName("cart-product")
  totalAmount = 0

  for (var i = 0; i < cartProducts.length; i++) {
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("quantidadeProdutos")[0].value

    totalAmount += productPrice * productQuantity
  }
  
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}