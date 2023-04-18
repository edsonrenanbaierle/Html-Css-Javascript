function register(element){
  const username = element.children.username.value
  const password = element.children.password.value
  const confirmPassword = element.children.confirmPassword.value
  
  if(password == confirmPassword){
    alert("Usuário " + username + " cadastrado")
  }else{
    alert("Senhas não compativeis!")
  }
}