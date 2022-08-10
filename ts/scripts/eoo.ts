// superclase

class Operacion {
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value:number) {
        this.valorA = value;
    }
    set ValorB(value:number) {
        this.valorB = value;
    }
    get Resultado():number {
        return this.resultado;
    }
}

// extension de subclases

class Suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}

class Resta extends Operacion {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}

// instancias 

let operacionS = new Suma();
let operacionR = new Resta();

// ejercicios

operacionR.ValorA = 8;
operacionR.ValorB = 6;
operacionR.Restar();
console.log("El resultado es " + operacionR.Resultado);