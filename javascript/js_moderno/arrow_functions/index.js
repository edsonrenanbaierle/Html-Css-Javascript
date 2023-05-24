
const soma = (a, b) => {
  return a + b
}

const subtraction = (a, b) => {
  return a-b
}

const continuar = prompt(`Calculadora:
  1. iniciala.
  2. Encerrar o programa.`)

while (continuar === '1'){
  const numeberOne = parseInt(prompt('Digite o primeiro número: '))
  const numeberTwo =  parseInt(prompt('Digite o segundo número: '))
  let option = prompt(`Escolha:
  1 para somar.
  2 para subtrair.
  3 para dividir.
  4 para multiplicar.
  5 para encerrar o programa.`)

  switch (option) {
    case '1':
      alert(`A soma entre ${numeberOne} e ${numeberTwo} = ${soma(numeberOne, numeberTwo)}`)
    break;
    case '2':
      alert(`A subtração entre ${numeberOne} e ${numeberTwo} = ${subtraction(numeberOne, numeberTwo)}`)
    break;
    case '3':
      const divide = (a, b) => a/b
      alert(`A divisão entre ${numeberOne} e ${numeberTwo} = ${divide(numeberOne, numeberTwo)}`)
    break;
    case '4':
      const multiply = (a, b) => a*b
      alert(`A multiplicação entre ${numeberOne} e ${numeberTwo} = ${multiply(numeberOne, numeberTwo)}`)
    break;
    case '5':
      alert('Encerrando o programa...')
      continuar = false
    break;
    default:
      alert('Digite um número válido')
    break;
  }
}
