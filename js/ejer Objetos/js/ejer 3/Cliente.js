class Cliente extends Persona{
    static contadorPersonas = 0;
    #idCliente = 1;
    #fechaRegistro;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.#idCliente +=Cliente.contadorPersonas++;
        this.#fechaRegistro = fechaRegistro;
    }
    getIdCliente(){
        return this.#idCliente;
    }
    getFechaRegistro(){
        return this.#fechaRegistro;
    }
    setFechaRegistro(fechaRegistro){
        this.#fechaRegistro = fechaRegistro;
    }
    toString(){
        return 'Cliente:\n'+'Id persona: '+this.getIdPersona()+'\n'+'Nombre y apellido: '+this.getNombre()+' '+this.getApellido()+'\nEdad: '+this.getEdad()+'\nId cliente: '+this.#idCliente+'\nFecha registro: '+this.#fechaRegistro
    }
}
const cliente = new Cliente("Rodrigo","MARQUEZ",50,"03/10/2023");
console.log(cliente.toString());
const cliente2 = new Cliente("Pietro","sanchez",32,"03/10/2023");
console.log(cliente2.toString());

