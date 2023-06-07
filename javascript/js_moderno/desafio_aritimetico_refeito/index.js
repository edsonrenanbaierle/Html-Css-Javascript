const avarage = (...numbers) => {
  const sum = numbers.reduce((acumulator, num) => acumulator + num, 0)
  return sum/numbers.length
}

const weightedAvarege = (...entry) => {
  const sum = entry.reduce((acumulator, {number, peso}) => acumulator + (number*(peso ?? 1)), 0)
  const pesos = entry.reduce((acumulator, {peso}) => acumulator + (peso ?? 1), 0)
  return sum/pesos
}

const midian = (...numbers) =>{
  const orderedNumbers = [...numbers].sort((a,b) => a - b)
  const midlle = Math.floor(orderedNumbers.length/2)
  if(orderedNumbers.length % 2 !== 0){
    return orderedNumbers[midlle]
  }else{
    const firstMidle = orderedNumbers[midlle-1]
    const secondMidle = orderedNumbers[midlle]
    return avarage(firstMidle, secondMidle)
  }
}

const moda = (...numbers) => {
  const quantidades = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantidades.sort((a, b)=> b[1] - a[1] )
  return quantidades[0][0]
}

console.log(`Média Aritimetica simples: ${avarage(3, 3, 6)}`)
console.log(`Média ponderada: ${weightedAvarege(
  {number: 9, peso: 3},
  {number: 7},
  {number: 10, peso: 1},
)}`)

console.log(`Mediana: ${midian(2, 5, 99 ,32, 3)}`)
console.log(`Mediana: ${midian(2, 5, 99 ,32, 3, 7)}`)
console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)