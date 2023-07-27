const Author = require("./Author");
const Post = require("./Post");

const Rafel = new Author('Rafel')


const post = Rafel.writePost('TItulo', 'lorem')
post.addComments('edson', 'muito bom')
post.addComments('caua', 'muito bom')

console.log(post)
console.log(Rafel)

