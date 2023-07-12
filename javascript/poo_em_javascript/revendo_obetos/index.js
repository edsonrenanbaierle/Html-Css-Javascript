function CreateObjectBook(nameOfBook, year, author, value){
  this.name = nameOfBook
  this.year = year
  this.author = author
  this.sold = 0
  this.value = value
  this.inStock = 0
  this.addSold = function addSold(quantity){
    this.sold += quantity
  }
  this.addStock = function addStock(quantity){
    this.inStock += quantity
  }
}

//new para funções contrutoras
const Eragon = new CreateObjectBook('Eragon', 1969, 'Edson', 70.90)
console.log(Eragon)
Eragon.addSold(50)
Eragon.addStock(40)
console.log(Eragon)

const diarioDeUmBanana = new CreateObjectBook('Diario de um Banana', 1828, 'Jeff Kinney', 30)
console.log(diarioDeUmBanana)



