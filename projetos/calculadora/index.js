const section = document.querySelector('section')
const input =document.getElementById('input')
const resultInput = document.getElementById('respost')

//botões que poderão ser clicados
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.buttons').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear')
.addEventListener('click', function(){
  input.value = ''
  input.focus()
})


input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }

  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }

  if(ev.key === 'Enter'){
    calculete()
  }
})

document.getElementById('equal').addEventListener('click', calculete)

function calculete(){
  resultInput.value = "ERROR"
  const result = eval(input.value)
  resultInput.value = result
}

document.getElementById('copy').addEventListener('click', function(ev){
  const button = ev.currentTarget
  if(button.innerText === 'Copy'){
    button.innerText = 'Copied!'
    window.navigator.clipboard.writeText(resultInput.value)
  }else{
    button.innerText = 'Copy'
  }
})
