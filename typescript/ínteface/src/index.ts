
interface celestialBody {
  name: string,
  mass: number
}

interface star extends celestialBody {
  age: number,
  planets: Planet[]
}

interface Planet extends celestialBody{
  populacao: number,
  createSatelite: (name : string) => void
}

let sun: star
sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

type Asteroide = celestialBody & {
  size: number
}

class MilkyWayPlanet implements Planet {
  name: string
  mass: number
  populacao: number

  constructor(name: string, mass: number, populacao: number){
    this.name = name
    this.mass = mass
    this.populacao = populacao
  }
 
  createSatelite: (name: string) {
    
  }
}