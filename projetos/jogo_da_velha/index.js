const openModal = document.querySelector('#open-modal')
const closeModeal = document.querySelector('#start')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const vet = [openModal, closeModeal, fade]

function toogleModal(){
  fade.classList.toggle('hide')
  modal.classList.toggle('hide')
}

vet.forEach(function(ev){
  ev.addEventListener('click', function(){
    toogleModal()
  })
})
