let x = true;
const palabras = [];
do{
    let palabra = prompt("Dime una palabra");
    if(palabra != undefined && palabra != null && palabra != ""){
        palabras.push(palabra);
    }else{
        x = false;
    }
}while(x);
console.log(palabras);
const palabrasSinEsp = [];
for(let i = 0;i<palabras.length;i++){
    if(palabras[i].trim().indexOf(" ")==-1 && palabras[i].trim()!="" && !/\d/.test(palabras[i])){
        palabrasSinEsp.push(palabras[i].trim());
    }

}
console.log(palabrasSinEsp.sort().reverse());