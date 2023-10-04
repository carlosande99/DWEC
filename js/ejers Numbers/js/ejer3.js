let num = prompt("Dime un numero y pon su prefijo correspondiente(binario--0b--, octal--0o--,\nhexadecimal--0x--,decimal--No tiene prefijo--)").trim();
let cadena = num.slice(0,2);
// console.log(cadena);
switch(true){
    case cadena == "0o" :
        console.log(`El numero ${num} en octal corresponde a:`);
        console.log(`--> El numero expresado en decimal es: ${+num}`);
        var decimal = +num;
        console.log(`--> El numero expresado en binario es: ${decimal.toString(2)}`);
        console.log(`--> El numero expresado en hexadecimal es: ${decimal.toString(16)}`);
        break;
    
    case cadena == "0b" :
        console.log(`El numero ${num} en binario corresponde a:`);
        console.log(`--> El numero expresado en decimal es: ${+num}`);
        var decimal = +num;
        console.log(`--> El numero expresado en octal es: ${decimal.toString(8)}`);
        console.log(`--> El numero expresado en hexadecimal es: ${decimal.toString(16)}`);
        break;
    
    case cadena == "0x" :
        console.log(`El numero ${num} en hexadecimal corresponde a:`);
        console.log(`--> El numero expresado en decimal es: ${+num}`);
        var decimal = +num;
        console.log(`--> El numero expresado en binario es: ${decimal.toString(2)}`);
        console.log(`--> El numero expresado en octal es: ${decimal.toString(8)}`);
        break;
    
    default :
        console.log(`El numero ${num} en decimal corresponde a:`);
        var decimal = +num;
        console.log(`--> El numero expresado en binario es: ${decimal.toString(2)}`);
        console.log(`--> El numero expresado en octal es: ${decimal.toString(8)}`);
        console.log(`--> El numero expresado en hexadecimal es: ${decimal.toString(16)}`);
        break;
}