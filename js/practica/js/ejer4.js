let numero;
let adivinar = Math.random();
adivinar = Math.floor(adivinar * 10) + 1;
let contador = 1;
function pregunta(){
    numero = parseInt(prompt("Dime un numero"));
}

function comprobador(){
    //comprueba si le dio a cancelar o forzó la salida
    if(isNaN(numero)){
        console.log("Error!!!");   
        if(window.confirm("Desea volver a intentarlo?")){
            pregunta();
        }
        //comprueba si el numero esta fuera de rango
     }else if(numero < 0 || numero > 10){
        console.log("Numero fuera de rango");
        if(window.confirm("Desea volver a intentarlo?")){
            pregunta();
        }
     }
}

pregunta();
comprobador();

// lo vuelvo a comprobar porque si metias un numero fuera del limite y dabas cancelar entraba en bucle
while(numero != adivinar && !isNaN(numero) && numero<10 && numero>0){
    contador++;
    if(numero >= 0 && numero < 11){
        if(numero > adivinar){
            console.log("El numero es menor");
            pregunta();
            comprobador();
        }else if(numero < adivinar){
            console.log("El numero es mayor");
            pregunta();
            comprobador();
        }
        
    }
    console.log(contador);
}
if(numero == adivinar){
    console.log(`ADIVINADO EL NUMERO ERA: ${adivinar}`);
    console.log("Numero de intentos: "+contador);
}else{
    console.log(`TE SALISTES EL NUMERO ERA ${adivinar}`);
}

 