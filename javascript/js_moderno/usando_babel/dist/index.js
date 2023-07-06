"use strict";

var avarage = function avarage() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (acumulator, num) {
    return acumulator + num;
  }, 0);
  return sum / numbers.length;
};
var weightedAvarege = function weightedAvarege() {
  for (var _len2 = arguments.length, entry = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entry[_key2] = arguments[_key2];
  }
  var sum = entry.reduce(function (acumulator, _ref) {
    var number = _ref.number,
      peso = _ref.peso;
    return acumulator + number * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var pesos = entry.reduce(function (acumulator, _ref2) {
    var peso = _ref2.peso;
    return acumulator + (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  return sum / pesos;
};
var midian = function midian() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var midlle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[midlle];
  } else {
    var firstMidle = orderedNumbers[midlle - 1];
    var secondMidle = orderedNumbers[midlle];
    return avarage(firstMidle, secondMidle);
  }
};
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidades = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
};
console.log("M\xE9dia Aritimetica simples: ".concat(avarage(3, 3, 6)));
console.log("M\xE9dia ponderada: ".concat(weightedAvarege({
  number: 9,
  peso: 3
}, {
  number: 7
}, {
  number: 10,
  peso: 1
})));
console.log("Mediana: ".concat(midian(2, 5, 99, 32, 3)));
console.log("Mediana: ".concat(midian(2, 5, 99, 32, 3, 7)));
console.log("Moda: ".concat(moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));