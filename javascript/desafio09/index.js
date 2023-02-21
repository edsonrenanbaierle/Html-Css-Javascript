/* Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.*/

let indice
let resultados=""
const number=parseFloat(prompt("Qual número deseja saber a tabuada de 10 a 20?"))


for(indice=0;indice<=20;indice++){
  resultados+=`Calcúlo: ${number} x ${indice} = ${number*indice}\n`
}

alert(resultados)


