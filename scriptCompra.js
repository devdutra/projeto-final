var jogo1 = document.querySelector("#jogo-1");
var jogo2 = document.querySelector("#jogo-2");
var jogo3 = document.querySelector("#jogo-3");
var jogo4 = document.querySelector("#jogo-4");
var jogo5 = document.querySelector("#jogo-5");
var jogo6 = document.querySelector("#jogo-6");
var jogo7 = document.querySelector("#jogo-7");
var jogo8 = document.querySelector("#jogo-8");
var jogo9 = document.querySelector("#jogo-9");
var jogo10 = document.querySelector("#jogo-10");
var carrinho = document.querySelector("#carrinho");

var nomeJogo = document.querySelectorAll("h6");
var precoJogo = document.querySelectorAll("h7");
var inputQtd = document.querySelectorAll("input[type=number]");
var qtd1 = document.querySelector("#qtd1");
var limparCarrinho = document.querySelector("#limpar-carrinho");
var itensCarrinho = document.querySelector("#qtdItens");
var img = document.querySelectorAll("#imagemDoJogo")

var jogo = document.querySelector("#jogo");
var totalJogos = document.querySelector("input#total");
var total = 0;
var fade = document.querySelector("#fade");
var modal = document.querySelector("#modal");
var abrirModal = document.querySelector("#abrir-carrinho");
var ativaModal = [fade, abrirModal];




var toggleModal = () => {
  fade.classList.toggle("hide");
  modal.classList.toggle("hide");
};

ativaModal.map((el) => {
  el.addEventListener("click", () => toggleModal());
});

abrirModal.addEventListener("click", () => {
  carrinho.innerHTML = "";
  let somaValores = 0;
})

//   for (let i = 0; i < inputQtd.length; i++) {
//     if (inputQtd[i].value >= 1) {
//       let valorTotal = Number(precoJogo[i].textContent * inputQtd[i].value);
//       carrinho.innerHTML += `<div class="ajudaSenhor">
//                                 <div class="CardModal">
//                                     <img src="${img[i].src}" alt="" width="60px"> 
//                                     <p> ${nomeJogo[i].textContent} </p>
//                                     <p> ${inputQtd[i].value}x</p>
//                                     <p> R$ ${valorTotal
//                                       .toFixed(2)
//                                       .replace(".", ",")} </p>
//                                       <button id="removerDoCarrinho"> X </button>
//                                 </div>
//                             </div>`;
//       somaValores += valorTotal;
//       var remover = document.querySelector("#removerDoCarrinho")
//       remover.classList.add("ajudaSenhor");
//       remover.addEventListener("click", (e) =>{
//         const targetEl = e.target
//         const parentEl = targetEl.closest("ajudaSenhor");

//         if (targetEl.classList.contains("ajudaSenhor")){
//         parentEl.ajudaSenhor();
//         }
//       })
      

//     }
    
//   }
//   totalJogos.value = `R$${somaValores.toFixed(2)}`;
// });
