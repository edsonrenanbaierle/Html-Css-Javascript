class Book{
  constructor(title, author){
    this.title = title
    this.author = author
    this.published = false
    this.sold = 0
  }

  soldAdd(quantity){
    this.sold += quantity
  }

  updatePublished(){
    this.published = this.published === false ? true : false
  }
}

const Eragon = new Book("Eragon", "Christopher Paolini")
console.log(Eragon)
console.log(Eragon instanceof Book)
Eragon.soldAdd(20)
Eragon.updatePublished()
console.log(Eragon)
Eragon.updatePublished()
console.log(Eragon)