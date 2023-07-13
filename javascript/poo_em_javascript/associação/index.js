const Address = require("./Address")
const Person = require("./Person")

const addr = new Address('Doutor Pedro Eggler', 122, 'Monte Alverne', 'Santa Cruz do Sul', 'Rio Grande do Sul')
const Jose = new Person('José Oliveira', addr)
console.log(Jose)
console.log(Jose.adress.fullAddress())

