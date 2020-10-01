"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
/*export default*/ var Persona = /** @class */ (function () {
    /*private nombre: string;
    private apellido: string;
    private edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }*/
    function Persona(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    // Setters
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    // Getters
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
