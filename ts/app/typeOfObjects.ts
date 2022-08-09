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

