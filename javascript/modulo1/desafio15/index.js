// ## Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.


let opt
let vagas = []


do {

  opt=prompt("Sistemas de Vagas de Emprego!\n" +
  "Escolha sua opção:\n" + 
  "1.Listar vagas disponíveis\n" + 
  "2. Criar um nova vaga\n" + 
  "3. Visualizar uma vaga\n" +
  "4. Inscrever um candidato em uma vaga\n" + 
  "5. Excluir uma vaga\n" +
  "6. Sair\n")

  switch (opt) {
    case "1":
      listar_vaga(vagas)
    break;
    case "2":
      criar_vaga(vagas)
    break;
    case "3":
      vizulizar_vaga(vagas)
    break;
    case "4":
      inscrever_candidato(vagas)
    break;
    case "5":
      remover_vaga(vagas)
    break;
    case "6":
      alert("Encerrando o programa...")
    break;
  
    default:
      alert("Digite um número válido!")
    break;
  }
  
} while (opt!="6");


function listar_vaga(vagas){

  if(vagas.length==0){
    alert("Nenhuma vaga registrada no momento!")
  }else{
    for(let ind = 0; ind < vagas.length; ind++){
      alert("Indice: " + ind + "\n" +
      "Nome da vaga: " + vagas[ind].name + "\n" +
      "Numero de candidatos: " + vagas[ind].candidatos.length)
    }
  }

}


function criar_vaga(vagas){

  let name = prompt("Digite o nome da vaga!")
  let description = prompt("Digite a descrição que deseja colocar na vaga!")
  let date = prompt("Digite a data limite da vaga!")

  let confirmação = prompt("Digite (Sim/Não) para salvar a vaga!" + "\n" +
  "Nome da vaga: " + name + "\n" + 
  "Descrição da vaga: " + description + "\n" +
  "Data limite: " + date + "\n")

  if(confirmação==="Sim"){
    let vaga = {name, description, date, candidatos:[]}
    vagas.push(vaga)
    alert("Sua vaga foi confirmada!")
  }
  
}

function vizulizar_vaga(vagas){

  if(vagas.length === 0 ){
    alert("Nenhuma vaga encontrada no momento!")
    alert("Voltando ao menu...")
  }else{
    let indice = prompt("Digite o indice da vaga que deseja vizulizar por completo!")
  
    if(indice > vagas.length-1 || indice < 0 || vagas== undefined){
      alert("Digite um indice válido!")
    }else{
      alert("Indice escolhido: " + indice + "\n" +
      "Nome da vaga: " + vagas[indice].name + "\n" + 
      "Descrição da vaga: " + vagas[indice].description + "\n" +
      "Data limite de inscrição: " + vagas[indice].date + "\n" +
      "Quantidade de Candidatos inscritos: " + vagas[indice].candidatos.length + "\n" +
      "Nome dos candidatos: " + vagas[indice].candidatos)
    }
  
  }
  
}

function inscrever_candidato(vagas){

  let indice = prompt("Digite o indice da vaga que deseja se inscrever!")
  let nome = prompt("Digite o seu nome!")

  let confirmação = prompt("Digite (Sim/Não) para se inscrever na vaga!" + "\n" +
  "Nome da vaga: " + vagas[indice].name + "\n" + 
  "Descrição da vaga: " + vagas[indice].description + "\n" +
  "Data limite: " + vagas[indice].date + "\n")

  if(confirmação === "Sim"){
    if(indice > vagas.length-1 || indice < 0 || vagas== undefined){
      alert("Digite um indice válido!")
    }else{
      vagas[indice].candidatos.push(nome)
      alert("Candidato cadastrado com sucesso!")
    }
  }else{
    alert("Retornando ao menu")
  }

}

function remover_vaga(vagas){
  if(vagas.length === 0 ){
    alert("Nenhuma vaga encontrada no momento!")
    alert("Voltando ao menu...")
  }else{
    let ind = prompt("Digite o indice da vaga que deseja remover!")
  
    if(ind > vagas.length-1 || ind < 0 || vagas== undefined){
      alert("Digite um indice válido!")
    }else{
      vagas.splice(ind, 1)
      alert("Vaga removida com sucesso!")
    }
  }
}


