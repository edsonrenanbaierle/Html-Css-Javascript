class User{
  constructor(fullName, email, password){
    this.fullName = fullName
    this.email = email
    this.password=password
  }

  login(email, password){
    if(email === this.email && password === this.password){
      console.log('Login feito com sucesso')
    }else if(this.email != email){
      console.log('Email não encontrado, por favor tente novamente')
    }else{
      console.log('Senha incorreta, por favor tente novamente')
    }
  }
}

const Edson = new User('Edson Renan Baierle', 'user@gmail.com', '987654321')
console.log(Edson)
Edson.login('user@gmail.com', '987654321')
Edson.login('user@gmail.com', '887654321')
Edson.login('ser@gmail.com', '987654321')