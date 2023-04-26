function clearTheme(){
  document.body.style.color = 'rgb(0, 0, 0)'
  document.body.style.backgroundColor = 'rgb(255, 255, 255)'
}

function darkTheme(){
  document.body.style.color = 'rgb(255, 255, 255)'
  document.body.style.backgroundColor = 'rgb(0, 0, 0)'

  document.body.h1.style.color = 'red'
}

function swapTheme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}





document.getElementById('clear-theme').addEventListener('click', clearTheme)
document.getElementById('dark-theme').addEventListener('click', darkTheme)
document.getElementById('swap-theme').addEventListener('click', swapTheme)