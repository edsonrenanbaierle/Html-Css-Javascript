module.exports = class Transfer {
  constructor(userSentTransfer, userReceiveTransfer, valueTransfer){
    this.userSentTransfer = userSentTransfer
    this.userReceiveTransfer = userReceiveTransfer
    this.valueTransfer = valueTransfer
    this.dateTransfer = new Date()
  }
}