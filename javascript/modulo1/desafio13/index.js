/*## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let imovel=[]
let opt

do{

  opt=prompt(`Imoveis cadastrados ${imovel.length}\nEscolha uma das opções:\n1.Salve um novo imovel\n2.Veja os imoveis salvos\n3.Sair`)
  switch(opt){
    case "1":
      const imoveis={}
      imoveis.propretario=prompt("Qual o nome do proprietário?")
      imoveis.quartos=prompt("Quantidade de quartos.")
      imoveis.banheiros=prompt("Quantidade de banheiros.")
      imoveis.garagem=prompt("Possui garagem?")

      let confirmacao=prompt("Os Dados estão correto?\n"+
      "proprietário: " + imoveis.propretario + "\n" +
      "Quantidade de quartos: " + imoveis.quartos + "\n" +
      "Quantidade de banheiros: " + imoveis.banheiros + "\n" +
      "Possui garagem: " + imoveis.garagem + "\n" +
      "Sim/Não")

      if(confirmacao=="Sim"){
        imovel.push(imoveis)
      }else{
        alert("Retornando ao menu!!")
      }

    break;
    case "2":
      for(let i=0;i<imovel.length;i++){
        alert(`Imovel ${i+1} do proprietario: ${imovel[i].propretario}\nQuantidade de quartos: ${imovel[i].quartos}\nQuantidade de banheiros: ${imovel[1].banheiros}\nPossui garagem: ${imovel[i].garagem}`)
      }
    break;
    case "3":
      alert("Encerrando")
    break;
    default:
      alert("Digite uma opção válida")
  }
}while(opt!="3")

