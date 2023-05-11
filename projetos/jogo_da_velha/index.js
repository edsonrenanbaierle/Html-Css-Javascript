const boardRegions = document.querySelectorAll('#main > button') //regioes do tabuleiro 
let vBoard = [] //tabuleiro virtual 
let turnPlayer = '' //turno do player


function updateTurn(){
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame(){//function que ira reinicializar o jogo e inicia-lo
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  turnPlayer = 'playerOne'
  updateTurn()
  boardRegions.forEach(function(element){
    element.classList.remove('win')
    element.innerText = ''
    element.addEventListener('click', handleBoardClick)
  })
}

function disableRegion(element){//impede de selecionar um local ja selecionado
  element.style.cursor = 'default'
  element.removeEventListener('click', handleBoardClick)
}

function enableRegions(element){
  element.style.cursor = 'pointer'
}

function getWinRegions(){
  const winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  console.log(winRegions)
  return winRegions
}

function handleBoardClick(ev){//function que lidara com o click da "placa"
  const region = ev.currentTarget.dataset.region //região que foi clicada
  const rowColumnPair = region.split('.')//onde tiver o ponto ira quebrar em um array
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  if(turnPlayer == 'playerOne'){
    ev.currentTarget.innerText = 'X'
    vBoard[row][column] = 'X'
  }else{
    ev.currentTarget.innerText = 'O'
    vBoard[row][column] = 'O'
  }

  disableRegion(ev.currentTarget)

  const regionsWin = getWinRegions()
  if(regionsWin.length > 0){
    //função colocar ainda
  }else if(vBoard.flat().includes('')){
    turnPlayer = turnPlayer === 'playerOne' ? 'playerTwo' : 'playerOne'
    updateTurn()
  }else{
    document.querySelector('#turnPlayer').innerText = 'EMPATE'
  }
}





// Obtém o botão de abrir o modal e o modal
const openModal = document.getElementById("open-modal");//serve também para reinicializar o game
const modal = document.getElementById("modal");
const fade = document.getElementById("fade")

// Obtém o botão de fechar o modal
const closeModal = modal.querySelector("#close-modal");//serve também como o start to jogo

// Adiciona evento de clique ao botão de abrir o modal
openModal.addEventListener("click", function() {
  initializeGame()
  modal.style.display = 'block';
  fade.style.display = "block";
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
  document.getElementById('playerOne').value = ''
  document.getElementById('playerTwo').value = ''
  document.querySelector('h2').innerHTML = '<span id="turnPlayer">Vez de(do): </span>'
  document.getElementById('playerOne').placeholder = ''
  document.getElementById('playerTwo').placeholder = ''
  document.querySelectorAll('#main > button').forEach(enableRegions)
});

// Adiciona evento de clique ao botão de fechar o modal
closeModal.addEventListener("click", function() {//verifica se foi escrito o nome
  if(document.getElementById('playerOne').value == '' && document.getElementById('playerTwo').value == ''){
    document.getElementById('playerOne').placeholder = 'Digite o nome'
    document.getElementById('playerTwo').placeholder = 'Digite o nome'
  }
  else if(document.getElementById('playerOne').value == ''){
    document.getElementById('playerOne').placeholder = 'Digite o nome'
  }else if(document.getElementById('playerTwo').value == ''){
    document.getElementById('playerTwo').placeholder = 'Digite o nome'
  }else{
    initializeGame()
    modal.style.display = "none";
    fade.style.display = "none";
  }
  
});

