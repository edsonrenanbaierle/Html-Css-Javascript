function sum(a, b){
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if(isNaN(firstNumber) || isNaN(secondNumber)){
    throw new Error('The arguments must be two numbers')
  }
  
  return firstNumber + secondNumber

}

try{
  console.log(sum(3, 2))
  console.log(sum(undefined, 2))
  console.log(sum('3', 2))
  console.log(sum(3, '2'))
  console.log(sum(3, 'zero'))
  console.log(sum(true, 2))
}catch (error){
  console.log('An Error ocurred!')
  console.log(error.message)
}finally{
  console.log('Calculations finished!')
}