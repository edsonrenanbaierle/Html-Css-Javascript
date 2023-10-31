function sendSpaceShip(name:string, captain:string) {
  const spaceShip = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`A nave ${spaceShip.name} comandado pelo capitão ${spaceShip.captain} foi enviada a missão!`)
  return spaceShip
}

function acellerate(targetSpeed:number, spaceShip: {name:string, speed:number}) {
  if (spaceShip.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da nave de ${spaceShip.speed} para ${targetSpeed}`)
  }else if(spaceShip.speed < targetSpeed){
    alert(`Aumentando a velocidade da nave de ${spaceShip.speed} para ${targetSpeed}`)
  }else{
    alert(`Mantendo a velocidade atual: ${spaceShip.speed}`)
  }
}

const spaceShipName = prompt('Insira o nome da nave a ser enviada!')
const spaceShipCaptain = prompt('Insira o nome do capitão da nave!')

const currentShip = sendSpaceShip(spaceShipName, spaceShipCaptain)

const speed = Number(prompt('Digite a nova velocidade que a nave deve atingir!'))

acellerate(speed, currentShip)