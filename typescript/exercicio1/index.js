"use strict";
const spaceShips = [];
let decision;
do {
    decision = Number(prompt(`Bem vindo!
Escolha uma das opções abaixo:
1- Cadastrar uma nova SpaceShip;
2- Adicionar um novo membro a uma SpaceShip;
3- Enviar em missão uma SpaceShip;
4- Ver todas as SpaceShip cadastradas;
5- Encerrar e sair do programa;`));
    switch (decision) {
        case 1:
            saveSpaceShip();
            break;
        case 2:
            const nameMember = prompt('Digite o nome do membro que deseja adicionar: ');
            const spaceShipe = prompt('Digite o nome da nave no qual quer adicionar o membro: ');
            addMember(nameMember, spaceShipe);
            break;
        case 3:
            const spaceShipeOfMission = prompt('Digite o nome da nave no qual você deseja enviar em missão: ');
            sendOfMission(spaceShipeOfMission);
            break;
        case 4:
            showShips();
            break;
        case 5:
            alert('Obrigado por utilizar o programa!');
            break;
        default:
            alert('Por favor digite um número de 1 a 5!');
            break;
    }
} while (decision != 5);
function saveSpaceShip() {
    const spaceShip = {
        name: prompt(`Digite o nome da nave!`),
        pilot: prompt(`Digite o nome do piloto!`),
        crewLimit: Number(prompt(`Digite o tamanho máximo da tripulação!`)),
        crew: [],
        inMission: false
    };
    const shipe = findRocket(spaceShip.name);
    if (shipe) {
        alert('Não foi possível cadastrar, nave já cadastrada!');
    }
    else {
        spaceShips.push(spaceShip);
        alert('Cadastro realizado com sucesso!');
    }
}
function addMember(name, nameShip) {
    const ship = findRocket(nameShip);
    if (ship) {
        if (ship.crew.length >= ship.crewLimit) {
            alert('A nave está com a tripulação cheia!');
        }
        else {
            ship.crew.push(name);
            alert('Novo membro adicionado com sucesso!');
        }
    }
    else {
        alert('A nave não foi encontrada!');
    }
}
function sendOfMission(nameShip) {
    const ship = findRocket(nameShip);
    if (ship) {
        if (Math.floor(ship.crewLimit / 3) > ship.crew.length) {
            alert('Não é possível enviar em missão a tripulação, número de pessoas insuficiente!');
        }
        else {
            ship.inMission = true;
            alert('A nave nfoi enviada em missão!');
        }
    }
    else {
        alert('A nave não foi encontrada!');
    }
}
function showShips() {
    if (spaceShips.length < 1) {
        alert('Nenhum SpaceShip foi cadastrado ainda!');
    }
    else {
        spaceShips.forEach((element, ind) => {
            alert(`Nave ${ind + 1}
  Nome: ${element.name}
  Piloto: ${element.pilot}
  Maximo de tripulação: ${element.crewLimit}
  Tripulação: ${element.crew}
  Missão: ${element.inMission}`);
        });
    }
}
function findRocket(name) {
    return spaceShips.find((elemen) => elemen.name === name);
}
