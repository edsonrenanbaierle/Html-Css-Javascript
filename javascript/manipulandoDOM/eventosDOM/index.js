function register(ev){
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.username.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if(password === passwordConfirmation){
    alert("Senhas iguais")
  }else{
    alert("Senhas diferente")
  }
}


const button = document.getElementById("register-button")

button.addEventListener("click", register)

function removeEvent(){
  button.removeEventListener("click", register)
  alert("Event Remov!")
}
