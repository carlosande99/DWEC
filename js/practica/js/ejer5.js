let numero;
let opcion;
let primo;
let aux = 0;
let contador = 0;
function pedirNum(){
    numero = parseInt(prompt("Dime un numero"));
}
function menu(){
    do{
        opcion = parseInt(prompt("Elige una de estas dos opciones: Indica 1 o 2\n1.¿Tu número es primo?\n2.Primos hasta tu número"));
        if(opcion == 1){
            pedirNum();
            esPrimo();
        }else if(opcion == 2){
            pedirNum();
            numDePrimos();
        }
    }while(opcion != 1 && opcion != 2);
}
function esPrimo(){
    if(numero<1){
        console.log(`${numero} NUMERO NO PRIMO`);
    }else{
        for(let i = 1;i<=numero;i++){
            if(numero%i == 0){
                aux++;
            }
        }
        if(aux==2 || aux==1){
            console.log(primo = numero + " NUMERO PRIMO");
            aux=0;
            contador++;
        }
        if(aux>2 && opcion==1){
            console.log(primo = numero + " NUMERO NO PRIMO");
            aux=0;
        }else{
            aux=0;
        }
    }
    
}
function numDePrimos(){
    if(numero<=1){
        console.log(`El numero ${numero} no es valido`);
    }else{
        let aux2 = numero;
        for(numero=1;numero<=aux2;numero++){
            esPrimo();
        }
        console.log(`Entre el número 1 y ${aux2} hay ${contador} números primos.`);
    }
}
menu();
