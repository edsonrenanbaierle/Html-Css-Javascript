const Author = require("./Author")
const Comment = require("./Comment")

class Post {
  constructor(title, content, nameAuthor, biography){
    this.title = title
    this.content = content
    this.comments = []
    this.author = new Author(nameAuthor, biography)
  }

  addComment(namePersonComment, comment){
    const comentary = new Comment(namePersonComment, comment)
    this.comments.push(comentary)
  }
}

module.exports = Post