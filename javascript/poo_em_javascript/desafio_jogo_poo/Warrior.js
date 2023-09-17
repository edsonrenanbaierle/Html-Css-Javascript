const Character = require("./Character");

class Warrior extends Character{
  constructor(name, hitPoint, powerAtack, powerDefense, shieldPoits){
    super(name, hitPoint, powerAtack, powerDefense)
    this.shieldPoits = shieldPoits
    this.position = 'attack'
  }

  attack(targetCharacter){
    if(this.position === 'attack'){
      const lostLife= this.powerAtack - targetCharacter.powerDefense
      console.log(`Ataque realizado por ${this.name} ao alvo ${targetCharacter.name}`)

      if(lostLife > 0){
        targetCharacter.hitPoint -= lostLife
      }
    }else{
      console.log('Muda a sua posição de defesa para ataque!')
    }
  }

  changePosition(){
    if(this.position === 'defense'){
      this.powerDefense -= this.shieldPoits
      this.position = 'attack'
      console.log(`${this.name} está mudando para a posição de ataque`)
    }else{
      this.powerDefense += this.shieldPoits
      this.position = 'defense'
      console.log(`${this.name} está mudando para a posição de defesa`)
    }
  }
}

module.exports = Warrior