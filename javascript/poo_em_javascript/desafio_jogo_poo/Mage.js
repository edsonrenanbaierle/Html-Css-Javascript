const Character = require("./Character");

class Mage extends Character{
  constructor( name, hitPoint, powerAtack, powerDefense, magicPoint){
    super(name, hitPoint, powerAtack, powerDefense)
    this.magicPoint = magicPoint
  }

  attack(targetCharacter){
    const lostLife = this.powerAtack + this.magicPoint - targetCharacter.powerDefense
    console.log(`Ataque realizado por ${this.name} ao alvo ${targetCharacter.name} vida atual ${targetCharacter.hitPoint}`)

    if(lostLife > 0){
      targetCharacter.hitPoint -= lostLife
    }
  }

  recoverLife(targetCharacter){
    targetCharacter.hitPoint = targetCharacter.hitPoint + (this.magicPoint * 2)
  }
}

module.exports = Mage