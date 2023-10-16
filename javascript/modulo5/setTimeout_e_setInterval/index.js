console.log('Iniciando o Programa!')

// const setTimeoutId = setTimeout(() => {
//   console.log("Programa encerrado")
// }, 1000 * 4)

// clearTimeout(setTimeoutId)

let time = 0
const setIntervalID = setInterval(() => {
  time += 4
  console.log(`Tempo atual ${time}`)
  if(time > 10){
    clearInterval(setIntervalID)
    console.log(`Programa encerrado!`)
  }
}, 1000 * 4)