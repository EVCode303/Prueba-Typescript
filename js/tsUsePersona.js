"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos la clase del modulo tsPersona
var tsPersona_1 = require("./tsPersona");
// Creamos el tipo Person con Persona para poder asignarlo
//type Person = Persona;
var getPersonas = function () {
    var Personas;
    Personas = [];
    for (var i = 0; i < 10; i++) {
        var Person = new tsPersona_1.Persona("Persona " + i, "Apellido " + i, i, i + i);
        Personas.push(Person);
    }
    return Personas;
};
console.log(getPersonas());
