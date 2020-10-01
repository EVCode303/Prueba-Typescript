/*export default*/ class Persona { 
    /*private nombre: string;
    private apellido: string;
    private edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }*/

    constructor(
        private nombre: string, 
        private apellido: string, 
        private edad: number,
        private telefono: number
    ){}

    // Setters
    public setNombre(nombre: string): void{
        this.nombre = nombre;
    }
    public setApellido(apellido: string): void{
        this.apellido = apellido;
    }
    public setEdad(edad: number): void{
        this.edad = edad;
    }

    // Getters
    public getNombre(): string{
        return this.nombre;
    }
    public getApellido(): string{
        return this.apellido;
    }
    public getEdad(): number{
        return this.edad;
    }
}

// Exportamos la clase para poder usarla en otros modulos
export { Persona };