/*** type of objects ***/

// array

let list: string[] = ['Venezuela', 'Argentina', 'Brasil'];
let rocosos: boolean[] = [true, false, false, true];
let perdidos: any[] = ['Hola', 9, true];
let diametro: [string, number] = ['Hola mundo', 2];

// generic

function identity<T>(arg: T): T {
    return arg;
}

function any(arg: any): any {
    return arg;
}

// object

let persona: object = {
    nombre: 'Ana',
    edad: 45
}

// desestructuración

var obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj.c); // -> 3

var array = [1, 2, 3];
console.log(array[2]); // -> [3]

var arraySecond = [1, 2, 3, 5];
var [x, y, ...rest] = arraySecond;
console.log(rest); // -> [3, 5]

function resto(first: number, second: number, ...allOthers: any) {
    console.log(allOthers);
}
resto(1, 2, 3, 4, 5); // -> [3, 4, 5]

/**** aserción de tipos ***/
   
(nombre as string).toUpperCase();
(<string>nombre).toUpperCase();

/*** funciones ***/