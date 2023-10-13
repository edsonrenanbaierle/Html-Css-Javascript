function sum(a, b){
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if(isNaN(firstNumber) || isNaN(secondNumber)){
    throw new Error('The arguments must be two numbers')
  }
  
  return firstNumber + secondNumber

}

//tente excutar isso
try {
  console.log(sum(3, 2))
  console.log(sum(undefined, 2))
  console.log(sum('3', 2))
  console.log(sum(3, '2'))
  console.log(sum(3, 'zero'))
  console.log(sum(true, 2))
}catch (error){ // lnaça um erro caso ocorra
  console.log('An error occorred')
  console.log(error.message)
}finally { //lança no fim, não importa se deu erro
  console.log('Finished program')
}
