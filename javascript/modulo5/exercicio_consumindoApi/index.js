const valueFinances = document.getElementById('valueFinances')
const form = document.querySelector('form')
let Price = 0


getFinances()

function updatePrice(value){
  Price += value

  valueFinances.textContent = ` ${Price.toFixed(2).replace('.', ',')}`

  if(Price >= 0){
    valueFinances.classList.add('highBalance')
  }else{
    valueFinances.classList.add('lowBalance')
  }
  
}

function renderFinances(finance){
  const finances = document.getElementById('finances')

  const div = document.createElement('div')
  div.id = `finance-${finance.id}`

  const idFinance = document.createElement('p')
  idFinance.textContent = `Id: ${finance.id}`

  const nameFinance = document.createElement('p')
  nameFinance.textContent = `Nome: ${finance.name}`

  const valueFinance = document.createElement('p')
  valueFinance.textContent = `Valor: R$ ${finance.value.toFixed(2).replace('.', ',')}`

  div.append(idFinance, nameFinance, valueFinance)
  finances.append(div)

  if(finance.value >=0){
    div.classList.add('highFinence')
  }else{
    div.classList.add('lowFinence')
  }
}


async function getFinances() {
  const response = await fetch(' http://localhost:3000/finances').then((res) => res.json())

  response.forEach(renderFinances)
  response.forEach((Element) => updatePrice(Element.value))
}

document.getElementById('form-addFinances').addEventListener('submit', async(ev) => {
  ev.preventDefault()

  const dataFinance = {
    name: document.getElementById('nameOfFinance').value,
    value: parseFloat(document.getElementById('valueOfFinance').value)
  }


  const response = await fetch('http://localhost:3000/finances', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataFinance)
  })

  const savedFinance = await response.json()
  console.log(savedFinance)
  form.reset()
  renderFinances(savedFinance)
  updatePrice(savedFinance.value)
})

document.getElementById('form-removeFinances').addEventListener('submit',  async(ev) => {
  ev.preventDefault()

  const id = document.getElementById('numberRemove').value
  const retorno = await fetch(`http://localhost:3000/finances/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  document.getElementById('finances').textContent = ''
  Price = 0
  getFinances()
})

document.getElementById('form-editFinances').addEventListener('submit', async(ev) => {
  ev.preventDefault()

  const idEdit = document.getElementById('numberEdit').value
  const newDatas = {
    name: document.getElementById('nameEdit').value,
    value: parseFloat(document.getElementById('newValue').value)
  }

  const response = await fetch(`http://localhost:3000/finances/${idEdit}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newDatas)
  });
  

  document.getElementById('finances').textContent = ''
  Price = 0
  getFinances()
})




