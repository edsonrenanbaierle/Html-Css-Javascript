/* ## Teste de Velocidade
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

const nomeVeiculo1=prompt("Digite o nome do veículo 1:")
const velocidade1=prompt("Digite a velocidade do veiculo 1: ")
const nomeVeiculo2=prompt("Digite o nome do veículo 2:")
const velocidade2=prompt("Digite a velocidade do veiculo 2: ")

if(velocidade1>velocidade2){
  alert(`A ${nomeVeiculo1} é mais rapido que o ${nomeVeiculo2}`)
}else if(velocidade1<velocidade2){
  alert(`A ${nomeVeiculo2} é mais rapido que o ${nomeVeiculo1}`)
  }else{
    alert("Os dois veículos tem a mesma velocidade!");
  }
