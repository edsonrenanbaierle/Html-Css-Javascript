class Character {
  constructor(name, hitPoint, powerAtack, powerDefense){
    this.name = name
    this.hitPoint = hitPoint
    this.powerAtack = powerAtack
    this.powerDefense = powerDefense
  }

  attack(targetCharacter){
    const lostLife = this.powerAtack - targetCharacter.powerDefense
    console.log(`Ataque realizado por ${this.name} ao alvo ${targetCharacter.name}`)

    if(lostLife > 0){
      targetCharacter.hitPoint -= lostLife
    }
  }
}

module.exports = Character