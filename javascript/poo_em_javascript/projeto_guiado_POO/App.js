const DataBase = require("./dataBase")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
  static #dataBase = new DataBase()

  createUser(name, password, email){
    const user = new User(name, email, password)
    App.#dataBase.saveUser(user)
  }

  getUsers(){
    return App.#dataBase.find('users')
  }

  createAuthor(name, nationalaty, bio){
    const author = new Author(name, nationalaty, bio)
    App.#dataBase.saveAuthor(author)
  }

  getAuthors(){
    return App.#dataBase.find('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price, instock){
    const book = new Book(title, synopsis, genre, pages, author, description, price, instock)
    App.#dataBase.saveBook(book)
  }

  addBook(bookName, quantity){
    App.#dataBase.addBooksToStock(bookName, quantity)
  }

  getBooks(){
    return App.#dataBase.find('books')
  }

  createPoster(name, height, widht, description, price, instock){
    const poster = new Poster(name, description, price, instock, height, widht)
    App.#dataBase.saveBook(poster)
  }

  addPoster(posterName, quantity){
    App.#dataBase.addPosterToStock(posterName, quantity)
  }

  getPosters(){
    return App.#dataBase.find('posters')
  }

  createOrder(items, user){
    const order = new Order(items, user)
    App.#dataBase.saveOrder(order)
    order.data.items.forEach(({product, quantity}) => {
      if(product instanceof Book){
        App.#dataBase.removeBooksFromStock(product.name, quantity)
      }else if(product instanceof Poster){
        App.#dataBase.removePosterFromStock(product.name, quantity)
      }
    })
  }

  getOrder(){
    return App.#dataBase.find('orders')
  }

  showDatabase(){
    App.#dataBase.showStorage()
  }
}