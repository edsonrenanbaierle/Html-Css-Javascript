/*## Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let array=["Q de Ouro", "A de Espada", "2 de Coração", "3 de Paus"]
let opt

do{

  opt=prompt("Quantidade de cartas: "+
  array.length + "\n" +
  "Digite 1 para adicionar uma carta.\n" +
  "Digite 2 para puxar uma carta.\n" +
  "Digite 3 para sair.")

  switch (opt) {
    case "1":
      let letter=prompt("Digite o nome da carta que deseja adicionar: ")
      array.push(letter)
    break;
    case "2":
      if(array.length===0){
        alert("Você puxou todas as cartas")
      }else{
        let pull=array.pop()
        alert(`A carta removida foi ${pull}`)
      }
    break;
    case "3":
      alert("Encerrando...")
    break;
    default:
      alert("Digite uma opção válida")
  }

}while(opt!="3")

alert(array)