class Empleado extends Persona{
    static contadorPersonas = 0;
    #idEmpleado = 1;
    #sueldo;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.#idEmpleado+=Empleado.contadorPersonas++;
        this.#sueldo = sueldo;
    }
    getIdEmpleado(){
        return this.#idEmpleado;
    }
    getSueldo(){
        return this.#sueldo;
    }
    setSueldo(sueldo){
        this.#sueldo = sueldo;
    }
    toString(){
        return 'Empleado\n'+'Id persona: '+this.getIdPersona()+'\n'+'Nombre y apellidos: '+this.getNombre()+' '+this.getApellido()+'\nId empleado: '+this.#idEmpleado+'\nSueldo: '+this.#sueldo;
    }
}
const empleado = new Empleado("Laura","Gonzalez",28,1500);
const empleado2 = new Empleado("Pietro","Sanchez",32,1200);
console.log(empleado.toString());
console.log(empleado2.toString());