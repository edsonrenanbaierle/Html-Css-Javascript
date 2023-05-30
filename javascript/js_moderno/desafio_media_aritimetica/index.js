const mediaAritimeticaSimples = (array) => array.reduce((valorAnt, elementAtual) => (valorAnt + elementAtual), 0) / array.length//function que devolde a media ex (4 + 3 +2) /3 = 3

const MediaPonderadaPesos = (array) => array.reduce((acumulador, elementAtual) => acumulador + elementAtual.peso, 0)//function calcular total de pessos

const MediaPonderadaNotas = (array) => array.reduce((acumulador, elementAtual) => acumulador + (elementAtual.peso * elementAtual.number), 0)//function calcular total de notas * pessoas

const mediana = (array) => {
  const meio = array.length/2
  if(Number.isInteger(meio)){
    const position = Math.floor(array.length/2)
    return (array[position] + array[position-1])/2
  }else {
    const position = Math.floor(array.length/2)
    return array[position]
  }
}

let continuar
let option
do{
  option = prompt(`Escolha a opção desejada:
  1-Média Aritimética simples.
  2-Média Aritimética Ponderada.
  3-Mediana.
  4-Encerre o programa.`)

  switch (option) {
    case '1':
      let arrayMediaSimples = []
      do{
        const numbers = parseInt(prompt(`Digite um número: `))
        arrayMediaSimples.push(numbers)
        continuar = prompt(`Digite (sim) ou (s) caso deseje escrever mais números!
Digite (não) ou (n) caso não deseje mais escrever!`)
      }while(continuar === "sim" || continuar === "s")
        alert(`A média dos números ${arrayMediaSimples} é igual a: ${mediaAritimeticaSimples(arrayMediaSimples)}`)
      break;
    case '2':
      let arrayMediaPonderada = []
      do{
        const number = parseInt(prompt("Digite o número!")) 
        const peso = parseInt(prompt("Digite o peso!")) 
        const confirmation = prompt(`O número digitado foi: ${number}, seu peso é de ${peso}.
Digite sim ou s caso esteja correto!`)
        if(confirmation === "sim" || confirmation === "s"){
          let object = {
            peso: peso,
            number: number
          }
          arrayMediaPonderada.push(object)
        }
        continuar = prompt(`Digite (sim) ou (s) caso deseje escrever mais números!
Digite (não) ou (n) caso não deseje mais escrever!`)
      }while(continuar === "sim" || continuar === "s")
      const totalPesos = MediaPonderadaPesos(arrayMediaPonderada)
      const totalNotas = MediaPonderadaNotas(arrayMediaPonderada)
      alert(`A média ponderada ficou igual a: ${totalNotas}/${totalPesos} = ${totalNotas/totalPesos}`)
      break;
    case '3':
      let arrayMedina = []
      do{
        const number = parseInt(prompt("Digite o número!")) 
        arrayMedina.push(number)
        continuar = prompt(`Digite (sim) ou (s) caso deseje escrever mais números!
Digite (não) ou (n) caso não deseje mais escrever!`)
      }while(continuar === "sim" || continuar === "s")
      alert(`A mediana é: ${mediana(arrayMedina)}`)
      break;
    case '4':
      alert(`Encerrando o programa!
Obrigado por Utilizalo!`)
      break;
    default:
      alert("Número digitao invalido1")
      break;
  }
}while(option != '4')
