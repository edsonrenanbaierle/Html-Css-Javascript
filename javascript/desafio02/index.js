let entrada1=window.prompt("Digite um número: ")
let entrada2=window.prompt("Digite outro número: ")

let num1=parseFloat(entrada1)
let num2=parseFloat(entrada2)

let soma=(num1+num2)
let subtracao=num1-num2
let multiplicacao=num1*num2
let divisao=num1/num2

window.alert(`Os dois números digitados foram ${num1} e ${num2}! \nSoma:${soma} \nsubtração:${subtracao} \nmultiplicação: ${multiplicacao} \ndivisão:${divisao}`)