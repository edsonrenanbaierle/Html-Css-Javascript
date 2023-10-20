async function IMC(weight, height){
  if(isNaN(weight) || isNaN(height)){
    return Promise.reject('Parametro digitado não condiz com um número')
  }else{
    return (weight/(height * height))
  }
}


async function tableIMC(weight, height){
    try {
      const result = await IMC(weight, height)

      console.log(`O resultado do Imc foi: ${result.toFixed(2)}`)
      if(result <= 18.5) console.log('Estado atual de Magreza!')
      else if(result > 18.5 && result <= 24.9) console.log('Estado atual de Normal!')
      else if(result > 25 && result <= 29.9) console.log('Estado atual de Sobrepeso!')
      else if(result > 30 && result <= 39.9) console.log('Estado atual de Obesidade!')
      else console.log('Estado atual de Obesidade Grave!')

    } catch (error) {
      console.error(error)
    }
}

tableIMC(82, 1.82)