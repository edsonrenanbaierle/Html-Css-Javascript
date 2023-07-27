class Author {
  constructor(nameAuthor, biography) {
    this.biography = biography;
    this.nameAuthor = nameAuthor;
    this.postsAuthor = [];
  }

  addPost(title, content, biography) {
    const Post = require("./Post"); // Importar aqui para evitar dependência circular
    const post = new Post(title, content, this.nameAuthor, biography);
    this.postsAuthor.push(post);
    this.postsAuthor.forEach(function(element){
      console.log(element)
    })
  }
}

module.exports = Author;
