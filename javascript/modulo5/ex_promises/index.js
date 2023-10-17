function IMC(weight, height){
  return new Promise((result, reject) => {
    if(isNaN(weight) || isNaN(height)){
      reject('Parametro digitado não condiz com um número')
    }else{
      result(weight/(height * height))
    }
  })
}


function tableIMC(weight, height){
  IMC(weight, height).then((result) => {
    console.log(`O resultado do Imc foi: ${result.toFixed(2)}`)
    if(result <= 18.5){
      console.log('Estado atual de Magreza!')
    }else if(result > 18.5 && result <= 24.9){
      console.log('Estado atual de Normal!')
    }else if(result > 25 && result <= 29.9){
      console.log('Estado atual de Sobrepeso!')
    }else if(result > 30 && result <= 39.9){
      console.log('Estado atual de Obesidade!')
    }else{
      console.log('Estado atual de Obesidade Grave!')
    }
  }).catch((error) => {
    console.log(error)
  })
  console.log('Teste de assincronicidade')
}

tableIMC(85, 1.82)