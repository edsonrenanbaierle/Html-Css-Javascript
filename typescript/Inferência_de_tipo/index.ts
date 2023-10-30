var prompt = require('prompt-sync')();

let option: number
let numberOne : number
let numberTwo : number

do{
  numberOne = Number(prompt('Digite um número: '))
  numberTwo = Number(prompt('Digite um número: '))

  option = Number(prompt(`Escolha a opção desejada
1- Adição
2- Subtração
3- Multiplicação
4- Divisão
5- Sair
Digite: `))

  if(option === 1) addition(numberOne, numberTwo)
  else if (option === 2) subtract(numberOne, numberTwo)
  else if (option === 3) multiplication(numberOne, numberTwo)
  else if (option === 4) division(numberOne, numberTwo)
  else if (option === 5) console.log('Obrigado por utilizar o programa!')
  else console.log('Digite uma opção valida!')

}while(option !== 5)

function addition(numberOne : number, numberTwo : number){
  console.log(`A soma entre ${numberOne} e ${numberTwo} é ${numberOne + numberTwo}`)
}

function subtract(numberOne : number, numberTwo : number){
  console.log(`A subtração entre ${numberOne} e ${numberTwo} é ${numberOne - numberTwo}`)
}

function multiplication(numberOne : number, numberTwo : number){
  console.log(`A multiplicação entre ${numberOne} e ${numberTwo} é ${numberOne * numberTwo}`)
}

function division(numberOne : number, numberTwo : number){
  console.log(`A divisão entre ${numberOne} e ${numberTwo} é ${numberOne / numberTwo}`)
}