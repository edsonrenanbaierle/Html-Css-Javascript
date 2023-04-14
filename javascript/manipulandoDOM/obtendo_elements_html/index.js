function Show(){
  const elementId = document.getElementById('contact-list')
  console.log(elementId)

  const tagName = document.getElementsByTagName('input')
  console.log(tagName)

  const className = document.getElementsByClassName('contacts')
  console.log(className)

  const querryAll = document.querySelectorAll('li')
  console.log(querryAll)

  const name = document.getElementsByName('contact2')
  console.log(name)

  const querrySelector = document.querySelector('ul > li > label')
  console.log(querrySelector)
}