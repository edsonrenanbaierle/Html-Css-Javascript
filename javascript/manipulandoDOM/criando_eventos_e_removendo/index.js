const registerButton = document.getElementById('register-button')//seleciona o elemento do botão referente ao id
registerButton.addEventListener('click', register)//cria um evento click e passa como parametro chamando a função o botão(tag) que assionou o evento

// registerButton.addEventListener('click', function(){
//   alert('Evento acionado')
// })

//obs: é possível criar mais de um evento no mesmo elemento

function register(ev){
  const formElement = ev.currentTarget.parentNode//curentTarget especifica o botao que assionou o evento e parent node pega o pai, no caso seria o form

  const username = formElement.children.username.value
  const password = formElement.children.password.value
  const confirmPassword = formElement.children.confirmPassword.value

  if(password == confirmPassword){
    alert("Usuário " + username + " cadastrado com sucesso!")
  }else{
    alert("As senhas são diferentes!")
  }
}

function removeListener(){
  registerButton.removeEventListener('click', register)
  alert("Evento Removido")
}

