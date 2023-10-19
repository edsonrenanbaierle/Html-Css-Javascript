// async function asyncSum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//       return Promise.reject('arguments must be of type number')
//   } else {
//       return a + b
//   }
// }

// async function asyncSubtract(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return Promise.reject('arguments must be of type number')
//   } else {
//     return a-b
//   }
// }

// async function execute(){

//   try {
//     const result = await asyncSum(7, null)
//     console.log(result)
//     const result2 = await asyncSubtract(7, 2)
//     console.log(result2)
//   } catch (err) {
//     console.log(err)
//   }
// }

// execute()

const number = [1, 2, null, 3, 4, 5, 6, 7, 8]

function asyncSquare(x){
  return new Promise((resolve, reject) => {
    if (typeof x!== 'number') {
      reject('arguments must be of type number')
    } else {
      resolve(x * x)
    }
  })
}

Promise.all(number.map((number) => asyncSquare(number))).then((result) => console.log(result)).catch((err) => console.log(err))

