function execute(){
  return new Promise((resolve, reject) => {
    console.log('A promise está sendo executada!')
    setTimeout(() => {
      if(true){
        resolve(true)
      }
      console.log('Resolvendo a promise')
      reject(false)
  }, 1000 * 2)
  })
}

const p = execute()
console.log(p)

setTimeout(() => {
  console.log(p)
 }, 1000 * 3)





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