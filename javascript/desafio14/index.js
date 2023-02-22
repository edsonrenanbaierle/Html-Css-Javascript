/*### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do c: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/

let opt

do{
  opt=prompt("Calculadora Geométrica!\nDigite sua escolha:\n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n6. Encerrar o programa")


  switch (opt) {
    case "1":
      let baseTriangulo=parseFloat(prompt("Digite a base do triângulo."))
      let alturaTriangulo=parseFloat(prompt("Digite a altura do triângulo."))
      areaTriangulo(baseTriangulo, alturaTriangulo)
    break;
    case "2":
      areaRetangulo()
    break;
    case "3":
      let ladoQuadrado=parseFloat(prompt("Digite o lado do quadrado."))
      let resultadoBase=areaQuadrado(ladoQuadrado)
      alert("A área do Quadrado é " + resultadoBase)
    break;
    case "4":
      areaTrapezio()
    break;
    case "5":
      areaCirculo()
    break;
    case "6":
      alert("Encerrando o programa!")
    break;
  
    default:
      alert("Digite uma opção válida!")
    break;
  }

}while(opt!=6)


function areaTriangulo(base, altura){

  alert(`A área do triângulo é ${base*altura/2}`)

}

function areaRetangulo(){

  let baseRetangulo=parseFloat(prompt("Digite a base do retângulo."))
  let alturaRetangulo=parseFloat(prompt("Digite a altura do retângulo."))
  alert(baseRetangulo*alturaRetangulo)

}

function areaQuadrado(lado){

  return Math.pow(lado, 2)

}

function areaTrapezio(){

  let baseMaior=parseFloat(prompt("Digite a base maior do trapézio."))
  let baseMenor=parseFloat(prompt("Digite a base menor do trapézio."))
  let alturaTrapezio=parseFloat(prompt("Digite a altura do trapézio."))

  alert("A área do trapézio é " + ((baseMaior + baseMenor) * alturaTrapezio / 2))

}

function areaCirculo(){

  let valorRaio=parseFloat(prompt("Digite o valor do raio do círculo."))
  alert(`A área do cículo é ${3.14 * Math.pow(valorRaio, 2)}`)

}