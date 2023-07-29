class Property{
  constructor(area, price){
    this.price = price
    this.area = area
  }

  getPriceForArea(){
    return this.price/ this.area
  }
}

class House extends Property{}

const houseCamp = new House(2000, 100000)
const property = new Property(2000, 100000)

console.log(houseCamp.getPriceForArea())

console.log(houseCamp)
console.log(property)


class Apartament extends Property{
  constructor(area, price, number){
    super(area, price)
    this.number = number
  }

  getNumberApartament(){
    return this.number
  }


}

const apartamentTest = new Apartament(2000, 100000, 291)
console.log(apartamentTest)
console.log(apartamentTest.getNumberApartament())

module.exports =  Apartament