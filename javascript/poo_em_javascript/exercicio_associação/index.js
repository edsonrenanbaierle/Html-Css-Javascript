const Post = require("./Post");

const post1 = new Post('Olá', 'Olá Mundo', 'Edson Baierle', 'Nascido em 2003 em Venancio Aires')
console.log(post1)
post1.addComment('Caua', 'Gostei do Post')
console.log(post1)
post1.addComment('Rafael', 'Post legal')
console.log(post1)
post1.author.addPost('Olá', 'Olá Mundo', 'Nascido em 2003 em Venancio Aires')
console.log(post1)
