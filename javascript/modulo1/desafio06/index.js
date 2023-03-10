/*Visitando Novas Cidades
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

let visitou=prompt("Você ja visitou alguma cidade? (Digite Sim/Não)")
let nomeCidades=""
let nomeCidade
let quantidadeDeVisitas=0
let Nome

if(visitou==="Sim"){
  Nome=prompt("Qual o seu nome?")
  while(visitou==="Sim"){
    nomeCidade=prompt("Qual a cidade que você visitou?")
    nomeCidades+=" - " + nomeCidade + "\n"
    quantidadeDeVisitas++
    visitou=prompt("Você ja visitou mais alguma cidade? (Digite Sim/Não)")
  }
}else{
  alert("Espero que você visite uma cidade em breve!")
}

if(quantidadeDeVisitas>0){
  alert(`Show ${Nome} você visitou ${quantidadeDeVisitas} incrível!!\nEntre elas estão:\n${nomeCidades}`)
}
