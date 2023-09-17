const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const magoPatolino = new Mage('Patolino o Mago("Contemplem o mago")', 300, 450, 200, 100)
const semIdeiasNome = new Thief('O ladrão ("Cuidado")', 400, 200, 200) 
const capitaoAmerica = new Warrior('Capitão America', 550, 350, 300, 150)

capitaoAmerica.changePosition()
capitaoAmerica.changePosition()
capitaoAmerica.attack(magoPatolino)

magoPatolino.attack(capitaoAmerica)
semIdeiasNome.attack(capitaoAmerica)
console.log(capitaoAmerica)
console.log(magoPatolino)
console.log(semIdeiasNome)

magoPatolino.recoverLife(capitaoAmerica)
console.log(capitaoAmerica)

