class User{
  #password
  #money

  constructor(user){
    this.email = user.email
    this.#password = user.password
    this.#money = 0
  }

  getMoney(email, password){
    if(this.#conditionGetMoney(email, password)){
      return this.#money
    }else{
      return 'Erro de credenciais'
    }
  }

  #conditionGetMoney(email, password){
    return  this.#password === password && this.email === email
  }


}

const user = {
  email: 'user@gmail.com',
  password: '1234567'
}

const john = new User(user)
console.log(john)
console.log(john.getMoney('user@gmail.com', '1234567'))