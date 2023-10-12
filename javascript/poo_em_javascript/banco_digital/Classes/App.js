const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(name, email) {
    const userExist = App.findUser(email);
    if (userExist) {
      console.log("Usuario já existe");
    } else {
      App.#users.push(new User(name, email));
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);
    if (fromUser && toUser) {
      const toUser = App.findUser(toUserEmail);
      const newTranfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTranfer);
      toUser.account.addTransfer(newTranfer);
    }
  }

  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email);
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments);
      user.account.addLoan(newLoan);
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }
};
