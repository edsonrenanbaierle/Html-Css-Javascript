function addContact(){
  const contactSection = document.getElementById('contact-list')

  const h3=document.createElement('h3')
  h3.innerText= "Lista de Contatos"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = "text"
  nameInput.name = "fullname"
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = "text"
  phoneInput.name = "phone"
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const addresLi = document.createElement('li')
  addresLi.innerHTML = '<label for="addres">Endereço: </label>'
  const addresinput = document.createElement('input')
  addresinput.type = 'text'
  addresinput.name = 'address'
  addresinput.id = 'address'
  addresLi.appendChild(addresinput)
  ul.appendChild(addresLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)

}

function removeContact(){
  const contactSection = document.getElementById('contact-list')

  const titles = document.getElementsByTagName('h3')
  const contact = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length -1])
  contactSection.removeChild(contact[contact.length -1])
}