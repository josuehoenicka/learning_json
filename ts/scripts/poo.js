/*** Clase ***/
var Persona = /** @class */ (function () {
    // constructor
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    // metodos
    Persona.prototype.toString = function () {
        return this.nombre + this.apellido;
    };
    Persona.prototype.edad = function (añoActual) {
        return (añoActual - this.añoNac);
    };
    Object.defineProperty(Persona.prototype, "Nombre", {
        // metodo: getter
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Fecha", {
        // metodo: setter
        set: function (data) {
            this.añoNac = data;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
