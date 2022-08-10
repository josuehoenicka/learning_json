// superclase
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operacion = /** @class */ (function () {
    function Operacion() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    Object.defineProperty(Operacion.prototype, "ValorA", {
        set: function (value) {
            this.valorA = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "ValorB", {
        set: function (value) {
            this.valorB = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Resultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    return Operacion;
}());
// extension de subclases
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suma.prototype.Sumar = function () {
        this.resultado = this.valorA + this.valorB;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resta.prototype.Restar = function () {
        this.resultado = this.valorA - this.valorB;
    };
    return Resta;
}(Operacion));
// instancias 
var operacionS = new Suma();
var operacionR = new Resta();
// ejercicios
operacionR.ValorA = 8;
operacionR.ValorB = 6;
operacionR.Restar();
console.log("El resultado es " + operacionR.Resultado);
