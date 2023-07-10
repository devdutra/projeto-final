var usuario = document.querySelector("#usuario");
var senha = document.querySelector("#senha");
var btnLogin = document.querySelector("#login");

// login.addEventListener("click", function (e) {
//   e.preventDefault();
//   localStorage.setItem("nome", usuario.value);
//   localStorage.setItem("senha", senha.value);
//   location.href = '/loja.html'
// });


btnLogin.addEventListener('click', ()=>{
  let emailRecuperado = localStorage.getItem('nome')
  let senhaRecuperada = localStorage.getItem('senha')

  if(usuario.value == emailRecuperado && senha.value == senhaRecuperada){
      alert("Login efetuado com sucesso!")
      location.href = '/loja.html'
  } else{
      alert("Login ou senha invalidos!")
      usuario.style.border = "1px solid red"
      senha.style.border = "1px solid red"
  }
})