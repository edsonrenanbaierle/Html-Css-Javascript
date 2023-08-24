const registerForm= document.getElementById('register-form')
const buttonSubmit = document.getElementById('button-submit')

registerForm.addEventListener('submit', function(ev){
  ev.preventDefault()
})

buttonSubmit.addEventListener('click', function(){
  const email = document.getElementById('email').value
  const confirmationEmail = document.getElementById('confirmationEmail').value
  const password = document.getElementById('password').value
  const confirmationPassword = document.getElementById('confirmationPassword').value

  if(email === confirmationEmail && password === confirmationPassword){
    if(password.length < 8 || password.match(/[A-Z]/) === null || password.match(/[a-z]/) === null || password.match(/\W/ == null)){
      alert('Sua senha deve conter letras maiusculas, minusculas, caractere especias, pelo menos 8 digitos e um numero')
    }

    cleanInputs()
  }else{
    throw new Error('Os dados não conferem')
  }
})


function cleanInputs(){
  email = document.getElementById('email').value = ''
  confirmationEmail = document.getElementById('confirmationEmail').value = ''
  password = document.getElementById('password').value = ''
  confirmationPassword = document.getElementById('confirmationPassword').value = ''
}