/*## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

const entrada1=prompt("Quantidade inicial de dinheiro disponível")
let totalMoney=parseFloat(entrada1)
let Continue=""
let soma 

do{
  Continue=prompt(`Seu dinheiro Total é de: R$${totalMoney}`+
  "\nEscolha uma das opções disponiveis: "+
  "\n1-Deseja adicionar mais montante"+
  "\n2-Deseja retirar do montante"+
  "\n3-Deseja encerrar o programa")

  switch (Continue) {
    case "1":
      soma=parseFloat(prompt("Digite o valor que deseja adicionar"))
      totalMoney+=soma
    break;
    case "2":
      soma=parseFloat(prompt("Digite o valor que deseja retirar"))
      totalMoney-=soma
    break;
    case "3":
      alert("Obrigado por utilizar o programa!!")
    break;
    default:
      alert("Digite uma opção valida!")
  }
}while(Continue!="3")

