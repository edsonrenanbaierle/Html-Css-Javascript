/*## Procurando Palíndromos

Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.*/

const palavra=prompt("Digite uma palavra para conferir se é um palíndromo:")
let palavraInvertida=""
let indice

for(indice=palavra.length-1;indice>=0;indice--){
  palavraInvertida+=palavra[indice]
}

if(palavra===palavraInvertida){
  alert("É um palíndromo")
} else{
  alert(`Não é um palíndromo:\nPalavra normal: ${palavra}\nInvertida: ${palavraInvertida}`)
}