// Importamos la clase del modulo tsPersona
import { Persona } from './tsPersona';

// Creamos el tipo Person con Persona para poder asignarlo
//type Person = Persona;

const getPersonas = (): Persona[] => {
    let Personas: Array<Persona>;
    Personas = [];
    for (let i: number = 0; i < 10; i++) {
        const Person = new Persona(`Persona ${i}`, `Apellido ${i}`, i, i + i);
        Personas.push(Person);
    }
    return Personas;
}

console.log(getPersonas());