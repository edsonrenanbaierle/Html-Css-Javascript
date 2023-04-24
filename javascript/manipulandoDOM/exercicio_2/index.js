let row = 0
const button = document.getElementById('new-technology')
const buttonRegister =  document.getElementById('Devs-register')


button.addEventListener('click', function(ev){
  ev.preventDefault()

  const ul = document.getElementById('register-technology')
 

  const newRow = document.createElement('li')
  newRow.id = 'row-' + row
  newRow.className = 'inputs-row'
  

  const labelName = document.createElement('label')
  labelName.innerText = 'Nome da Tecnologia: '
  const inputName = document.createElement('input')
  inputName.id = 'name-technologys'
  inputName.name = 'name-technologys'
  inputName.type = 'text'

  const labelRadioMain = document.createElement('label')
  labelRadioMain.innerText = 'Experiencia: '
  labelRadioMain.id = 'main-' + row
  const input1 = document.createElement('input')
  input1.type = 'radio'
  input1.id = '0-2anos'
  input1.name = 'main-' + row
  input1.value = '0-2anos'
  const labelRadio1 = document.createElement('label')
  labelRadio1.innerText = '0-2 anos'
  const input2 = document.createElement('input')
  input2.type = 'radio'
  input2.id = '3-4anos'
  input2.name = 'main-' + row
  input2.value = '3-4anos'
  const labelRadio2 = document.createElement('label')
  labelRadio2.innerText = '3-4anos'
  const input3 = document.createElement('input')
  input3.type = 'radio'
  input3.id = '5 anos +'
  input3.name = 'main-' + row
  input3.value = '5 anos +'
  const labelRadio3 = document.createElement('label')
  labelRadio3.innerText = '5 anos+'

  const button = document.createElement('button')
  button.innerText = 'Remover'


  

  labelRadioMain.append(input1, labelRadio1, input2, labelRadio2, input3, labelRadio3)
  labelName.appendChild(inputName)
  newRow.append(labelName, labelRadioMain, button)
  ul.appendChild(newRow)
 
  button.addEventListener('click', remove)
  
  row=row + 1
})

function remove(ev){
  const ul = document.getElementById('register-technology')
  const remove = ev.currentTarget.parentNode

  ul.removeChild(remove)
}

buttonRegister.addEventListener('submit', function data(ev){
  ev.preventDefault()

  const inputs = document.querySelectorAll('.inputs-row')

  const fullName = document.getElementById('name').value 

  let technology = []

  inputs.forEach(function (row){
    const techName = document.querySelector('#' + row.id + ' input[name="name-technologys"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technology.push({ name: techName, exp: techExp })
  })

  console.log(technology)
})