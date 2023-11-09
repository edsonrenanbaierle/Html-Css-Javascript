type Planetsituation = 'habitado' | 'habitavel' |'inabitavel' | 'inexplorado'
type planetCoordinates= [number, number, number, number]

type Planet = {
  name: string,
  coordinates: planetCoordinates
  situation: Planetsituation,
  satelties: string[]
}

const Planets: Planet[] = []

function saveNewPlanet(name:string, coordinates: planetCoordinates, situation: Planetsituation) {
  Planets.push({
    name, 
    coordinates,
    situation,
    satelties: []
  })

  alert(`Planeta ${name} salvo com sucesso!`)
}

function findPlanet(name:string) {
  const planet = Planets.find((element) => element.name === name)

  return planet ?? false
}

function updateSituation(situation:Planetsituation, planet:Planet) {
  planet.situation = situation

  alert(`Situação do planeta ${planet.name} foi trocada para ${situation}`)
}

function addSatelite(name:string, planet: Planet) {
  planet.satelties.push(name)

  alert(`Satelite ${name} adicionado ao planeta ${planet.name}`)
}

function removeSatelite(name:string, planet:Planet) {
  var indice = planet.satelties.indexOf(name)

  planet.satelties.splice(indice, 1)
  alert(`Satelite ${name} foi removido do planeta ${planet.name}`)
}


function promptValidSituation() {
  let situation: Planetsituation
  let validSituation = false

  while (!validSituation) {
    const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

    switch (situationInput) {
      case '1':
        situation = 'habitado'
        validSituation = true
        break;
      case '2':
        situation = 'habitavel'
        validSituation = true
        break;
      case '3':
        situation = 'inabitavel'
        validSituation = true
        break;
      case '4':
        situation = 'inexplorado'
        validSituation = true
        break;
      default:
        alert('Situação inválida!')
        break;
    }
  }

  return situation
}

function promptValidPlanet(callback: (planet: Planet) => void) {
  const planetName = prompt('Digite o nome do planeta: ')
  const planet = findPlanet(planetName)

  if (planet) {
    callback(planet)
  } else {
    alert('Planeta não encontrado! Retornando ao menu principal...')
  }
}

function firstMenuOption() {
  const name = prompt('Informe o nome do planeta:')
  const coordinateA = Number(prompt('Informe a primeira coordenada:'))
  const coordinateB = Number(prompt('Informe a segunda coordenada:'))
  const coordinateC = Number(prompt('Informe a terceira coordenada:'))
  const coordinateD = Number(prompt('Informe a quarta coordenada:'))

  const situation = promptValidSituation()

  const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`)

  if (confirmation) {
    saveNewPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
  }
}

function secondMenuOption(){
  promptValidPlanet(planet => {
    const situation = promptValidSituation()
    updateSituation(situation, planet)
  })
}

function thirdMenuOption() {
  promptValidPlanet(planet => {
    const satelite = prompt('Informe o nome do satélite: ')
    addSatelite(satelite, planet)
  })
}

function fourthMenuOption(){
  promptValidPlanet(planet => {
    const satelite = prompt('Informe o nome do satélite quem será removido: ')
    removeSatelite(satelite, planet)
  })
}

function fifthMenuOption() {
  let list = 'Planetas:\n'

  Planets.forEach(planet => {
    const [a, b, c, d] = planet.coordinates

    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satelties.length}
    `

    planet.satelties.forEach(satellite => {
      list += `    - ${satellite}\n`
    })
  })

  alert(list)
}

// Menu

let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      fifthMenuOption()
      break
    case 6:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}