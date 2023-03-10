/*## Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let array=["Edson", "Cauã", "Rafa", "Amadeo"]
let opt

do{
  let queue=" "
  for(let ind=0;ind<=array.length-1;ind++){
    queue+="|" + (ind+1) + "° " + array[ind] + " "
  }

  opt=prompt("Fila de espera: \n"+
  queue + "\n" +
  "Digite 1 para adicionar um novo paciente.\n" +
  "Digite 2 para consultar o paciente.\n" +
  "Digite 3 para sair.")

  switch (opt) {
    case "1":
      let paciente=prompt("Qual o seu nome? ")
      array.push(paciente)
    break;
    case "2":
      if(array.length===0){
        alert("Todos ja foram consultados")
      }else{
        let consultado=array.shift()
        alert(`O paciente ${consultado} foi atendendido!`)  
      }
      
    break;
    case"3":
      alert("Encerrando...")
    break;
    default:
      alert("Digite uma opção válida!")
    break;
  }

}while(opt!="3")


