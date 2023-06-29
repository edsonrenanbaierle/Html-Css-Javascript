const dayjs = require('dayjs')
// var calendar = require('dayjs/plugin/calendar')
// dayjs.extend(calendar)
// const data = '11/26/2003'


// const DayjsTreino = (data) =>{
//   const dataAtual = dayjs(dayjs().calendar(data))
//   const dataFormatada = dayjs(dayjs(data).calendar())
//   console.log(dataAtual.diff(data, 'year'))

//   const dataAniversarioAnoAtual = dayjs(dayjs('11/26/2023').calendar())
//   const proximoAniversario=dataAniversarioAnoAtual.add(1, 'year').format('DD/MM/YYYY')
//   console.log(proximoAniversario)

//   proximoAniversario.diff(dataAtual.format('MM/DD/YYYY'), 'day')

// }

// DayjsTreino(data)

function birthday(data){
  const birthday = dayjs(data)
  const today = dayjs()

  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade ${ageInYears}`)
  console.log(`Proximo Aniversário ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Faltam ${daysNextBirthday} para o aniversário`)
}

birthday('11-26-2003')