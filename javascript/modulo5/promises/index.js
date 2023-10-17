function execute(){
  return new Promise((resolve, reject) => {
    console.log('A promise está sendo executada!')
    setTimeout(() => {
      if(false){
        resolve(42)
      }else{
        reject('Ocorreu um erro')
      }
      
  }, 1000 * 2)
  })
}

execute().then((result) => {
  console.log(`O resultado da promise foi: ${result}`)
}).catch((error) =>{
  console.log(`O motivo do erro foi: ${error}`)
}).finally(() => {
  console.log('A promise foi encerrada')
})






// const p = execute()
// console.log(p)

// setTimeout(() => {
//   console.log(p)
//  }, 1000 * 3)


// const p = new Promise((resolve, reject) => {
//   console.log('A promise está sendo executada!')
//   setTimeout(() => {
//     if(true){
//       reject(false)
//     }
//     console.log('Resolvendo a promise')
//     resolve(true)
//  }, 1000 * 2)
// })

// console.log(p)

// setTimeout(() => {
//   console.log(p)
//  }, 1000 * 3)