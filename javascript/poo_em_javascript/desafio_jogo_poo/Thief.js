const Character = require('./Character')

class Thief extends Character{


  attack(targetCharacter){
    const lostLife = ((this.powerAtack - targetCharacter.powerDefense) * 2)
    console.log(`Ataque realizado por ${this.name} ao alvo ${targetCharacter.name}`)

    if(lostLife > 0){
      targetCharacter.hitPoint -= lostLife
    }
  }
}

module.exports = Thief