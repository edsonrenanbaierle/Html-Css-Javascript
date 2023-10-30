var prompt = require('prompt-sync')();
var option;
var numberOne;
var numberTwo;
do {
    numberOne = Number(prompt('Digite um número: '));
    numberTwo = Number(prompt('Digite um número: '));
    option = Number(prompt("Escolha a op\u00E7\u00E3o desejada\n1- Adi\u00E7\u00E3o\n2- Subtra\u00E7\u00E3o\n3- Multiplica\u00E7\u00E3o\n4- Divis\u00E3o\n5- Sair\nDigite: "));
    if (option === 1)
        addition(numberOne, numberTwo);
    else if (option === 2)
        subtract(numberOne, numberTwo);
    else if (option === 3)
        multiplication(numberOne, numberTwo);
    else if (option === 4)
        division(numberOne, numberTwo);
    else if (option === 5)
        console.log('Obrigado por utilizar o programa!');
    else
        console.log('Digite uma opção valida!');
} while (option !== 5);
function addition(numberOne, numberTwo) {
    console.log("A soma entre ".concat(numberOne, " e ").concat(numberTwo, " \u00E9 ").concat(numberOne + numberTwo));
}
function subtract(numberOne, numberTwo) {
    console.log("A subtra\u00E7\u00E3o entre ".concat(numberOne, " e ").concat(numberTwo, " \u00E9 ").concat(numberOne - numberTwo));
}
function multiplication(numberOne, numberTwo) {
    console.log("A multiplica\u00E7\u00E3o entre ".concat(numberOne, " e ").concat(numberTwo, " \u00E9 ").concat(numberOne * numberTwo));
}
function division(numberOne, numberTwo) {
    console.log("A divis\u00E3o entre ".concat(numberOne, " e ").concat(numberTwo, " \u00E9 ").concat(numberOne / numberTwo));
}
