"use strict";
const spaceShips = [];
function saveSpaceShip() {
    const spaceShip = {
        name: prompt(`Digite o nome da nave!`),
        pilot: prompt(`Digite o nome do piloto!`),
        crewLimit: Number(prompt(`Digite o tamanho máximo da tripulação!`)),
        crew: [],
        inMission: false
    };
    spaceShips.push(spaceShip);
}
function addMember(spaceShip, name) {
    if (spaceShip.crew.length >= spaceShip.crewLimit) {
        alert('A nave está com a tripulação cheia!');
    }
    else {
        spaceShip.crew.push(name);
    }
}
function sendOfMission(spaceShip) {
    if (Math.floor(spaceShip.crewLimit / 3) > spaceShip.crew.length) {
        alert('Não é possível enviar em missão a tripulação, número de pessoas insuficiente!');
    }
    else {
        spaceShip.inMission = true;
    }
}
function showShips() {
    spaceShips.forEach((element, ind) => {
        alert(`Nave ${ind}
Nome: ${element.name}
Piloto: ${element.pilot}
Maximo de tripulação: ${element.crewLimit}
Tripulação: ${element.crew.forEach((element) => `${element}, `)}
Missão: ${element.inMission}`);
    });
}
