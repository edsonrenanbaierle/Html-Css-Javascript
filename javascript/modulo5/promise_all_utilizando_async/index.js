function awaitFor(seconds){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

const numbers = [1,2,3,4,5,6,7,8]

async function execute(){
  const square = await Promise.all(numbers.map(async(n) => {
    await awaitFor(2)
    return n * n
  }))

  console.log(square)

}

execute()