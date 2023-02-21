/*## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/

const nomePersonagem1=prompt("Digite o nome do 1° personagem: ")
const poderDeAtaque=prompt("Digite o poder de ataque do personagem: ")

const nomePersonagem2=prompt("Digite o nome do 2° personagem: ")
let vidaPersonagem2=prompt("Digite a sua quantidade de vida: ")
const poderDeDefesa=prompt("Digite o poder de defesa: ")
const escudoPersonagem2=prompt("Digite S/N (maiúsculo) caso o personagem possui um esudo: ")

let dano=0

if(poderDeAtaque>poderDeDefesa && escudoPersonagem2 === "N"){
  dano=poderDeAtaque-poderDeDefesa
} else if(poderDeAtaque>poderDeDefesa && escudoPersonagem2 === "S"){
  dano=(poderDeAtaque-poderDeDefesa) /2
}

vidaPersonagem2 -= dano
alert(`O ${nomePersonagem1} tirou ${dano} de vida do ${nomePersonagem2}`)
alert(`Poder de ataque do ${nomePersonagem1}: ${poderDeAtaque}\nAtual vida de ${nomePersonagem2} é:${vidaPersonagem2}`)