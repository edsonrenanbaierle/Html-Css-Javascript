function addcontact(){
  const contactSection = document.getElementById('contact-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.id = "name"
  nameInput.name = "name"
  nameInput.type = "text"
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const telephoneLi = document.createElement('li')
  telephoneLi.innerText = "Telefone: "
  const telephoneInput = document.createElement('input')
  telephoneInput.id = "telephone"
  telephoneInput.name = "telephone"
  telephoneInput.type = "text"
  telephoneLi.appendChild(telephoneInput)
  ul.appendChild(telephoneLi)
  ul.appendChild(document.createElement('br'))

  const adressLi = document.createElement('li')
  adressLi.innerText = "Endereço: "
  const adressInput = document.createElement('input')
  adressInput.id = "adress"
  adressInput.name = "adress"
  adressInput.type = "text"
  adressLi.appendChild(adressInput)
  ul.appendChild(adressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)

}

function removecontact(){
  const contactSection = document.getElementById('contact-list')

  const title = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(title[title.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}