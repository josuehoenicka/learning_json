const hiWorld: HTMLElement = document.getElementById('hi');
const instruction: HTMLElement = document.getElementById('more');
hiWorld.innerHTML = '<h1>Learning TypeScript :)</h1>';
instruction.innerHTML = '<h2>Press on F12 and Look at the console</h2>';

/*** console ***/

let message: string = 'Hola mundo';
console.log(message);

let nombre: string = 'Josue.';
let mensaje: string = 'Hola me llamo ' + nombre + ' Soy nuevo en TypeScript';
console.log(mensaje);

// void

function mensajeUsuario(): void {
    console.log("Me gusta programar! :)");
}
mensajeUsuario();

// enum

enum Numeros {
    unoMenosUno,
    ceroMasUno,
    unoMasUno,
    unoMasDos
}

let numeroFav: Numeros = Numeros.unoMasUno;
console.log("Mi numero favorito es el " + numeroFav); // -> 2
