function addPlayer(){
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const numeroCamiseta = document.getElementById('number').value

  const confirmation = confirm("Confirme sua ação!")

  if(confirmation){
    const lineup = document.getElementById('lineup')

    const li = document.createElement('li')
    li.id = 'player-' + numeroCamiseta 
    li.innerText = position + " " + name + `(${numeroCamiseta})`
    
    lineup.appendChild(li)

    document.getElementById('position').value=''
    document.getElementById('name').value=''
    document.getElementById('number').value=''
  }
}

function removePlayer(){
  const position = document.getElementById('camiseta').value

  const confirmation = confirm("Deseja remover o jogado daposição: " + position)

  if(confirmation){
    const playerRemove = document.getElementById('player-' + position)
    playerRemove.remove()

    document.getElementById('camiseta').value=''
  }
  
}