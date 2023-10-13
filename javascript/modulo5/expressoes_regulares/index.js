function PhoneNumber(telephoneString){
  const fixedString = telephoneString.replace(/[\sa-zA-z/]/g, "")
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  this.dd = fixedString.match(/(?<=\()\d+(?=\))/g)[0]
  this.number = fixedString.match(/(?<=\))\S+/g)[0].replace('-', '')
}

console.log(new PhoneNumber('+55 (22) 9 9765-4321'))
console.log(new PhoneNumber('+55 (22) 9 1rw234-5678'))