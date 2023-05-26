const User = {
  name: 'User',
  email: 'user@gmail.com',
  friends: [{
    name: 'AmigoUser',
    andress: {
      street: 'Rua User',
      number: 512,
    }
  }],
  age: 31,
  phone:{
    countryCode: '+55',
    ddd: 22,
    number: '99321432',
  }
}

console.log(User.friends[0].andress.street)//deolve corretamente
// console.log(User.friends[0].phone.countryCode)//da erro pelo no objeto pelo caminho digitado 
console.log(User?.friends?.[0]?.phone?.countryCode)//faz verificação e quando cai em phone e ve que o caminho está errado devolve undefined