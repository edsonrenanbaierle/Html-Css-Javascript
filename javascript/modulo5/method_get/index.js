function createdCountryCard(country){
  const card = document.createElement('div')
  card.classList.add('country');

  const countryName = country.name.commom
  const name = document.createElement('h2')
  name.textContent = countryName
  
  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  const span = document.createElement('span')
  span.innerText = `Capital: ${country.capital}`


  card.append( name, flag, span)
  document.querySelector('#countries').append(card)
}


async function getCountries(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  countries.forEach(createdCountryCard)
}

getCountries()