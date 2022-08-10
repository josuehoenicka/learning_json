/*** Clase ***/
class Persona {
    // atributos
    readonly nombre: string;
    readonly apellido: string;
    private añoNac: number;

    // constructor
    constructor (nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // metodos
    public toString(): string {
        return this.nombre + this.apellido;
    }
    public edad(añoActual: number): number {
        return (añoActual - this.añoNac);
    }

    // metodo: getter
    get Nombre(): string {
        return this.nombre;
    }

    // metodo: setter
    set Fecha(data: number){
        this.añoNac = data;
    }
}