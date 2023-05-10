

// Obtém o botão de abrir o modal e o modal
const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade")

// Obtém o botão de fechar o modal
const closeModal = modal.querySelector("#close-modal");

// Adiciona evento de clique ao botão de abrir o modal
openModal.addEventListener("click", function() {
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.padding = '1rem';
  modal.style.borderRadius = '0.5rem';
  modal.style.display = 'grid';
  modal.style.gridTemplateRows = '1fr';
  modal.style.rowGap = '0.3rem';
  modal.style.zIndex = '10';
  modal.style.backgroundColor = 'var(--bg-color)';
  modal.style.color = 'var(--font-color)';
  fade.style.display = "block";
});

// Adiciona evento de clique ao botão de fechar o modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
  fade.style.display = "none";
});

