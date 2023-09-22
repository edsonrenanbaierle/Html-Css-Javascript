const Product = require("./Product");

module.exports = class Posters extends Product{
  constructor(name, description, price, inStock = 0, height, widht){
    super(name, description, price, inStock)
    this.widht = widht
    this.height = height
  }
}