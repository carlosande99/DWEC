let numero = prompt("Dime un numero");
let contador=0;
let aux=numero;
for(let i=0;i<Infinity;i++){
    aux*=numero;
    console.log(aux);
    contador++;
    if(aux === Infinity){
        break;
    }
}
console.log(`Han sido necesarias: ${contador} operaciones.`);