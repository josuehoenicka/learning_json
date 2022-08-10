var hiWorld = document.getElementById('hi');
var instruction = document.getElementById('more');
hiWorld.innerHTML = '<h1>Learning TypeScript :)</h1>';
instruction.innerHTML = '<h2>Press on F12 and Look at the console</h2>';
/*** console ***/
var message = 'Hola mundo';
console.log(message);
var nombre = 'Josue.';
var mensaje = 'Hola me llamo ' + nombre + ' Soy nuevo en TypeScript';
console.log(mensaje);
// void
function mensajeUsuario() {
    console.log("Me gusta programar! :)");
}
mensajeUsuario();
// enum
var Numeros;
(function (Numeros) {
    Numeros[Numeros["unoMenosUno"] = 0] = "unoMenosUno";
    Numeros[Numeros["ceroMasUno"] = 1] = "ceroMasUno";
    Numeros[Numeros["unoMasUno"] = 2] = "unoMasUno";
    Numeros[Numeros["unoMasDos"] = 3] = "unoMasDos";
})(Numeros || (Numeros = {}));
var numeroFav = Numeros.unoMasUno;
console.log("Mi numero favorito es el " + numeroFav); // -> 2
