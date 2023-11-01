let arrayString: [string, string, string]

arrayString = ['ola', 'mundo', '!']

const [frase1, frase2, frase3] = arrayString

console.log(frase1 + frase2 + frase3)


enum Planets {
  VENUS = 'Venus',
  MARTE = 'Marte', 
  SATURNO = 'Saturno',
  TERRA = 'Terra'
}

function planetas(x : Planets){
  console.log(x)
}

planetas(Planets.MARTE)