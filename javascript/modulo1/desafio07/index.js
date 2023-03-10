/*## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado. */

let Continue=""

do {
  Continue=prompt("Escolha uma das 5 opções a seguir: "+
  "\n 1- Teste" + 
  "\n 2- Teste" +
  "\n 3- Teste" +
  "\n 4- Teste" +
  "\n 5- Encerar")

  switch(Continue){
    case "1":
      alert("Teste 1")
    break
    case "2":
      alert("Teste 2")
    break
    case "3":
      alert("Teste 3")
    break
    case "4":
      alert("Teste 4")
    break
    case "5":
      alert("Encerrando Programa...")
    break
    default:
      alert("Você não digitou nenhuma das opções!")
  }
}while(Continue!="5")