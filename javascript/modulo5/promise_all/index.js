// function asyncSum(a, b) {
//   return new Promise((resolve, reject) => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//           reject('arguments must be of type number')
//       } else {
//           resolve(a + b)
//       }
//   })
// }

// function asyncSubtract(a, b) {
//   return new Promise((resolve, reject) => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//           reject('arguments must be of type number')
//       } else {
//           resolve(a - b)
//       }
//   })
// }

// const sum = asyncSum(57, 22)
// const subtract = asyncSubtract(57, null)

// Promise.all([sum, subtract]).then((result) => console.log(result)).catch((err) => console.log(err))

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

