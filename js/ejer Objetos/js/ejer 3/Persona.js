class Persona{
    #idPersona=1;
    #nombre;
    #apellido;
    #edad;
    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this.#idPersona += Persona.contadorPersonas++;;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
        
    }
    getIdPersona(){
        return this.#idPersona;
    }
    getNombre(){
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getEdad(){
        return this.#edad;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setApellido(apellido){
        this.#apellido = apellido;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    toString(){
        return 'Persona\nId: '+this.#idPersona+'\nNombre y apellido: '+this.#nombre+' '+this.#apellido+'\nEdad: '+this.#edad
    }
}
const persona = new Persona("Luis","Garcia",65);
console.log(persona.toString());
const persona2 = new Persona("Carlos","Pérez",23);
console.log(persona2.toString());