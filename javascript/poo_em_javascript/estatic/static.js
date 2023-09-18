class Reservation {
  constructor(guests, room, days){
    this.guests = guests
    this.room = room
    this.days = days
    this.total = this.days * Reservation.baseFee
  }

  static baseFee = 150

  static get showBaseFee(){
    return Reservation.baseFee
  }

  static get premiumFee(){
    return Reservation.baseFee * 1.5
  }
}

console.log(Reservation.baseFee, Reservation.premiumFee)

const r1 = new Reservation(3, 3, 2)
console.log(r1)

Reservation.baseFee = Reservation.premiumFee

const r2 = new Reservation(3, 3, 2)
console.log(r2)



