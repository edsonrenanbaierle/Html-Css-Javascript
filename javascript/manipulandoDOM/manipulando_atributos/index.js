const input = document.getElementById('manipulate')

document.getElementById('value').addEventListener('click', function(){
  input.value = input.value === '' ? 'Ola, Mundo!' : ''
})

document.getElementById('type').addEventListener('click', function(){
  input.type = input.type == 'text' ? 'date' : 'text'
})

document.getElementById('placeHolder').addEventListener('click', function(){
  input.placeholder = input.placeholder === '' ? 'Digite Algo...' : ''
})

document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute = input.setAttribute('disabled', !input.disabled)
})



