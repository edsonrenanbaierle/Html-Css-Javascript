const Apartament = require("./heranca")


class Condominio extends Apartament{

}

const condominioTest = new Condominio(3131, 423423, 2)
console.log(condominioTest)
console.log(condominioTest.getNumberApartament())