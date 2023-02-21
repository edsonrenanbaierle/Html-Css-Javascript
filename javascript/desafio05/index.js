/* ## Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/

const  entrada1=prompt("Digite quantos metros deseja converter: ")
const entrada2=prompt("Digite a opção desejada:\n1- milímetro (mm)\n2- centímetro (cm)\n3- decímetro (dm)\n4- decâmetro (dam)\n5- hectômetro (hm)\n6- quilômetro (km)")

let meters=parseFloat(entrada1)
const option=parseFloat(entrada2)

switch(option){
  case 1:
    alert(`A medida de ${meters} metros para milímetro é de: ${meters*1000}mm`)
  break
  case 2:
    alert(`A medida de ${meters} metros para centímetro é de: ${meters*100}cm`)
  break
  case 3:
    alert(`A medida de ${meters} metros para decímetro é de: ${meters*10}dm`)
  break
  case 4:
    alert(`A medida de ${meters} metros para quilômetro é de: ${meters/10}dam`)
  break
  case 5:
    alert(`A medida de ${meters} metros para hectômetro é de: ${meters/100}hm`)
  break
  case 6:
    alert(`A medida de ${meters} metros para hectômetro é de: ${meters/1000}km`)
  break
  default:
    alert("Você digitou nenhuma das opções possíveis!!")
  break
}