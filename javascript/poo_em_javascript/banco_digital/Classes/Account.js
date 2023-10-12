
module.exports = class Account {
  #balance
  constructor(user){
    this.owner = user
    this.#balance = 0
    this.depositMade = []
    this.loanMade = []
    this.transferMade = []
  }

  get balance(){
    return this.#balance
  }

  addDeposit(deposit){
    this.#balance += deposit.value
    this.depositMade.push(deposit)
  }

  addLoan(loan){
    this.#balance += loan.value
    this.loanMade.push(loan)
  }

  addTransfer(transfer){
    if(transfer.userReceiveTransfer.email === this.owner.email){
      this.#balance += transfer.valueTransfer
      this.transferMade.push(transfer)
    }else if(transfer.userSentTransfer.email === this.owner.email){
      if(this.#balance < transfer.valueTransfer){
        console.log('Saldo abaixo do necessário')
      }else{
        this.#balance -= transfer.valueTransfer
        this.transferMade.push(transfer)
      }
    }
  }
}