function PhoneNumber(telephoneString){
  const fixedString = telephoneString.replace(/[\sa-zA-Z]/g, '')
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
}

console.log(new PhoneNumber('+55 (22) 9 9765-4321'))
console.log(new PhoneNumber('+55 (22) 9 1rw234-5678'))