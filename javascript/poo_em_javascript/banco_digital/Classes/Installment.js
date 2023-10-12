module.exports = class Installment {
  constructor(installmentValue, numberInstallment){
    this.installmentValue = installmentValue
    this.numberInstallment = numberInstallment
    this.situation = 'Pendente'
  }

  Tradesituation(){
    if(this.situation = 'Pendente'){
      this.situation = 'Pago'
    }else{
      this.situation = 'Pendente'
    }
  }
}