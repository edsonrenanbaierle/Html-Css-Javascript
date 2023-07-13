class Product{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(porcentagemDisconto){
    return this.price - (this.price*porcentagemDisconto/100)
  }
}

const Brinquedo = new Product('Jogo Lego', 'Jogo de peças de montar', 50)
console.log(Brinquedo)
Brinquedo.addToStock(40)
console.log(Brinquedo)
console.log(`O preço do ${Brinquedo.name} de R$${Brinquedo.price} com 20% de deconto fica igual a R$${Brinquedo.calculateDiscount(20)}`)