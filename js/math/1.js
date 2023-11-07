class Punto{
    _nombre;
    _x;
    _y;
    constructor(nombre,x,y){
        this._nombre = nombre;
        this._x = x;
        this._y = y;
    }
    static mostrar(punto){
        return `Las coordenadas de "${punto._nombre}" son (${punto._x},${punto._y})`;
    }
    copiar(){
        return new Punto(this._nombre,this._x,this._y);
    }
    cambiar(){
        while(true){
            let x = parseInt(prompt("Indica la coordenada de las x (Entre -6 y 6)",'0'));
            let y = parseInt(prompt("Indica la coordenada de las y (Entre -6 y 6)",'0'));
        
            if(isNaN(x) || isNaN(y)){
                alert("Operacion cancelada");
                break;
            }else if(x>=-6 && x <= 6 && y>=-6 && y<=6){
                this._x = x;
                this._y = y;
                break;
            }else {
                alert("Coordenadas no validas");
            }
        }
    }
    static iguales(punto1, punto2){
        // comparar esos dos puntos
        // devuelve true o false
        return punto1._x === punto2._x && punto1._y === punto2._y;
    }
    sumar(){
        // entre 6 y -6
        let x = parseInt((Math.random() * (6-(-6)+1)+(-6)));
        let y = parseInt((Math.random() * (6-(-6)+1)+(-6)));
        // console.log(x);
        // console.log(y);
        this._nombre = "punto3";
        let a = this._x;
        let b = this._y;
        x = x+a;
        y = y+b;
        this._x = (x);
        this._y = (y);
    }
    obtenerDistancia(punto){
        // sacar las distancias entre dos puntos
        const dx = punto._x - this._x;
        const dy = punto._y - this._y;
        return Math.sqrt(dx * dx + dy * dy);
    }
// setters
    set nombre(nombre){
        this._nombre = nombre;
    }
    set x(x){
        this._x = x;
    }
    set y(y){
        this._y = y;
    }
// getters
    get nombre(){
        return this._nombre;
    }
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }
}
var objeto;
var objeto2;
var objeto3;
var xd = true;

while(xd){
    let x = parseInt(prompt("Indica la coordenada de las x (Entre -6 y 6)",'0'));
    let y = parseInt(prompt("Indica la coordenada de las y (Entre -6 y 6)",'0'));
// mira si se le dio cancelar
    if(isNaN(x) || isNaN(y)){
        alert("Operacion cancelada");
        xd = false;
        break;
        // compara que los datos estan en el limite
    }else if(x>=-6 && x <= 6 && y>=-6 && y<=6){
        // alert(x);
        objeto = new Punto("punto1",x,y);
        alert(Punto.mostrar(objeto));
        objeto2 = objeto.copiar();
        objeto2._nombre = "punto2";
        alert(Punto.mostrar(objeto2));
        break;
    }else {
        alert("Coordenadas no validas");
    }
}
if(xd){
    let respuesta = confirm("Quieres modificar las coordenadas del punto?");
    if(respuesta){
        objeto2.cambiar();
        alert(Punto.mostrar(objeto2));
    }
    // si son iguales crea punto 3
    if(Punto.iguales(objeto,objeto2)){
        objeto3 = objeto.copiar();
        objeto3.sumar();
        alert(Punto.mostrar(objeto3));
    }
    // obtiene la distancia entre los dos puntos
    var distancia = objeto.obtenerDistancia(objeto2).toFixed(2);
    alert(`La distancia entre los puntos "${objeto._nombre}"-->(${objeto._x},${objeto._y}) y \n"${objeto2._nombre}" --> (${objeto2._x},${objeto2._y}) es ${distancia}`);
}
