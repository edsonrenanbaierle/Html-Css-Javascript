function calcular(a, b, operacao){
  console.log("Realizando uma operação")
  const resultado=soma(a, b)
  return resultado
}

function soma(x, y){
  console.log("Realizando uma soma")
  return x+y
}

console.log(calcular(3, 4, soma))

