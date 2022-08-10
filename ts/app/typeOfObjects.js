/*** type of objects ***/
// array
var list = ['Venezuela', 'Argentina', 'Brasil'];
var rocosos = [true, false, false, true];
var perdidos = ['Hola', 9, true];
var diametro = ['Hola mundo', 2];
// generic
function identity(arg) {
    return arg;
}
function any(arg) {
    return arg;
}
// object
var persona = {
    nombre: 'Ana',
    edad: 45
};
// desestructuración
var obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(obj.c); // -> 3
var array = [1, 2, 3];
console.log(array[2]); // -> [3]
var arraySecond = [1, 2, 3, 5];
var x = arraySecond[0], y = arraySecond[1], rest = arraySecond.slice(2);
console.log(rest); // -> [3, 5]
function resto(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
resto(1, 2, 3, 4, 5); // -> [3, 4, 5]
/*** funciones ***/
function calcularIva(productos) {
    var total = 0;
    productos.forEach(function (_a) {
        var precio = _a.precio;
        total += precio;
    });
    return [total, total * 0.15];
}
var Producto = /** @class */ (function () {
    function Producto() {
    }
    return Producto;
}());
