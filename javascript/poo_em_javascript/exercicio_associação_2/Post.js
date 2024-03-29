const Comment = require("./Comment")

class Post {
  constructor(title, body, author){
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAtt = new Date()
  }

  addComments(username, content){
    this.comments.push(new Comment(username, content))
  }
}

module.exports = Post