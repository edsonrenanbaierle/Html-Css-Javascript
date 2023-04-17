function climb(){
  let namePlayer = document.getElementById('namePlayer').value
  let positionPlayer = document.getElementById('positionPlayer').value
  let shirtNumber = document.getElementById('shirtNumber').value

  let confirmation = confirm("Clique em OK caso deseje escalar o jogador: " + "\n" +
  "Nome: " + namePlayer + "\n" +
  "Posição: " + positionPlayer + "\n" +
  "Camiseta: " + shirtNumber)

  if(confirmation){
    const lineupPlayers = document.getElementById('lineupPlayers')

    const newPlayerLi = document.createElement('li')
    newPlayerLi.id = "player-" + shirtNumber
    newPlayerLi.innerText = positionPlayer + " " + namePlayer + " camista " + shirtNumber
    lineupPlayers.appendChild(newPlayerLi)

    alert("Jogador escalado com sucesso!")
  }else{
    alert("Jogador não escalado, ou camiseta já existente!")
  }

  document.getElementById('namePlayer').value = " "
  positionPlayer = document.getElementById('positionPlayer').value = " "
  shirtNumber = document.getElementById('shirtNumber').value = ""
}

function removePlayer(){

  let reportShirtNumber = document.getElementById('reportShirtNumber').value
  let playerRemove = document.getElementById("player-" + reportShirtNumber)

  const confimation2 = confirm("Deseja remover o jogador com a Camisa: " + reportShirtNumber)

  if(confimation2){
    const lineupPlayers = document.getElementById('lineupPlayers')
    lineupPlayers.removeChild(playerRemove)
    document.getElementById("reportShirtNumber").value = ""
  }else{
    alert("Jogador não removido!")
  }


}