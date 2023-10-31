function sendSpaceShip(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceShip.name, " comandado pelo capit\u00E3o ").concat(spaceShip.captain, " foi enviada a miss\u00E3o!"));
    return spaceShip;
}
function acellerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reduzindo a velocidade da nave de ".concat(spaceShip.speed, " para ").concat(targetSpeed));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da nave de ".concat(spaceShip.speed, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade atual: ".concat(spaceShip.speed));
    }
}
var spaceShipName = prompt('Insira o nome da nave a ser enviada!');
var spaceShipCaptain = prompt('Insira o nome do capitão da nave!');
var currentShip = sendSpaceShip(spaceShipName, spaceShipCaptain);
var speed = Number(prompt('Digite a nova velocidade que a nave deve atingir!'));
acellerate(speed, currentShip);
