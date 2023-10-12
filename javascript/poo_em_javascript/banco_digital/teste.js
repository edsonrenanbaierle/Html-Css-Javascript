const App = require("./Classes/App")

App.createUser("edson@email.com", "edson Pontes")
App.createUser("caua@email.com", "caua Queiroga")
App.createUser("rafa@email.com", "rafa Conde")

App.deposit("edson@email.com", 101)

App.transfer("edson@email.com", "caua@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("rafa@email.com", 2100, 24)

console.log(App.findUser("edson@email.com"))
console.log(App.findUser("edson@email.com").account)
console.log(App.findUser("caua@email.com"))
console.log(App.findUser("caua@email.com").account)
console.log(App.findUser("rafa@email.com"))
console.log(App.findUser("rafa@email.com").account)
