var arrayString;
arrayString = ['ola', 'mundo', '!'];
var frase1 = arrayString[0], frase2 = arrayString[1], frase3 = arrayString[2];
console.log(frase1 + frase2 + frase3);
var Planets;
(function (Planets) {
    Planets["VENUS"] = "Venus";
    Planets["MARTE"] = "Marte";
    Planets["SATURNO"] = "Saturno";
    Planets["TERRA"] = "Terra";
})(Planets || (Planets = {}));
function planetas(x) {
    console.log(x);
}
planetas(Planets.MARTE);
