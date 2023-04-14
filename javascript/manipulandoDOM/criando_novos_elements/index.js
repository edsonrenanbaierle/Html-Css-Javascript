function createInput(){
  const ul = document.getElementById('new-input')

  const newLi = document.createElement('li')
  newLi.innerText= 'Input: '
  newLi.id = 'li'

  const newInput = document.createElement('input')
  newInput.name = 'input'
  newInput.id = 'input'
  newInput.className = 'inputs'

  newLi.appendChild(newInput)
  ul.append(newLi)
}