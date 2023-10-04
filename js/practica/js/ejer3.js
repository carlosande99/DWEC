let numero = prompt("Dime un numero");
let veces = prompt("Dime el numero de veces que se hallara el doble");
console.log("El numero es "+numero+" y se hallara el doble "+veces+" veces<br>");

for(let i=0;i<veces;i++){
    numero*=2;
    console.log(numero+"<br>");
}