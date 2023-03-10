function show(){
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const li = document.getElementsByTagName('li')
  console.log(li)

  const contactInput = document.getElementsByClassName('contact-input')
  console.log(contactInput)

  const contact = document.querySelectorAll('#contact-list > li > label')
  console.log(contact)

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}