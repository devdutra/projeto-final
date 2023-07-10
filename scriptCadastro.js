var usuario = document.querySelector("#usuario")
var senha = document.querySelector("#senha")
var confirmaSenha = document.querySelector("#confirmaSenha")
var senhaInformada = document.querySelector("#senhaInformada")

var validarSenha = ()=>{
    if(senha.value == confirmaSenha.value){
      senhaInformada.innerHTML = "Senhas conferem!"
      senhaInformada.style.color = 'green'
        return true
    } else{
      senhaInformada.innerHTML = "Senhas não conferem!"
      senhaInformada.style.color = 'red'
        return false
    }
}

confirmaSenha.addEventListener('focusout', validarSenha)

function validarCadastro(){
        validarSenha()
    if (!validarSenha()){
        alert("Senhas nao conferem!")
    }else{
        alert("Cadastro efetuado com sucesso!")
        localStorage.setItem('nome',usuario.value)
        localStorage.setItem('senha',senha.value)
        location.href = '/login.html'
        return true
    }
}