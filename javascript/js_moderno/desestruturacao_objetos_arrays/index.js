let person = {
  name: 'Edson',
  idade: '20',
  jogosPreferidos: ['leagueOfLegends', 'CounterStrike']
}

const {name, jogosPreferidos} = person
console.log(name, jogosPreferidos)

const [jogo1, jogo2] = jogosPreferidos
console.log(jogo1, jogo2)

function createPlayer({name, idade, jogosPreferidos}){
  const id = Math.floor(Math.random()*999)
  return{
    id,
    name,
    idade,
    jogosPreferidos
  }
}

const player = createPlayer(person)
console.log(player)