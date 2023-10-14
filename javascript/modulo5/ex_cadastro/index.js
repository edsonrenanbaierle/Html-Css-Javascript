const name = document.getElementById('name')

document.getElementById('buttonSubmit').addEventListener('click', function(ev){
  ev.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const emailConfirm = document.getElementById('emailConfirm').value
  const passwordConfirm = document.getElementById('passwordConfirm').value

  try {
    confirmationEmail(email)
  } catch (error) {
    alert(error.message)
    return
  }

  try {
    confirmationPassword(password)
  } catch (error) {
    alert(error.message)
    return
  }

  if(emailConfirm === email && password === passwordConfirm){
    alert('Cadastro realizado com sucesso')
    cleandata()
  } else if(emailConfirm !== email){
    alert('Os e-mails digitados não conferem')
  } else {
    alert('As senhas digitados não conferem')
  }
})

function confirmationEmail(email){
  const readjustedEmail = email.replace(/\s/g, '')
  
  const verification1 = readjustedEmail.match(/@/)
  const verification2 = readjustedEmail.match(/[0-9_]{2}(?=\@)/gm)
  const verification3 = readjustedEmail.match(/(?<=\@)[a-zA-z]{2}/gm)
  const verification4 = readjustedEmail.match(/(?<=\.)[a-zA-Z]{2}/gm)

  if(!verification1 || !verification2 || !verification3 || !verification4){
    throw new Error(`O email deve conter
    1- um @
    2- 2 digitos antes do @ sendo eles números ou undescr( _ )
    3- 2 digitos após o @ sendo eles caracteres alfabéticos
    4- 2 digitos após o . do @ sendo eles caracteres alfabéticos`)
  }
}

function confirmationPassword(password){
  const verification1 = password.match(/[A-Z]/g)
  const verification2 = password.match(/[a-z]/g)
  const verification3 = password.match(/\d/g)
  const verification4 = password.match(/[^a-zA-Z0-9]+/g)
  const verification5 = password.match(/.{8,}/g)

  if(!verification1 || !verification2 || !verification3 || !verification4 || !verification5){
    throw new Error(`A senha deve conter
    1- Pelo menos uma letra maiúscula
    2- Pelo menos uma letra minúscula
    3- Pelo menos um número
    4- Pelo menos um caractere especial
    5- Pelo menos 8 caracteres`)
  }
}

function cleandata(){
  document.getElementById('name').value  = ''
  document.getElementById('email').value  = ''
  document.getElementById('password').value  = ''
  document.getElementById('emailConfirm').value  = ''
  document.getElementById('passwordConfirm').value  = ''
}
