let compararCadenas = () => {
    while(true){
        let cadena1 = prompt("Dime la primera cadena de texto");
        let cadena2 = prompt("Dime la segunda cadena de texto");
        
        if(cadena1 == null || cadena2 == null){
            console.log("Textos vacios");
            break;
        }
        
        let cadena1SinEsp = cadena1.trim();
        let cadena2SinEsp = cadena2.trim();
        
        if (cadena1SinEsp === cadena2SinEsp) {
            console.log(`Los textos ${cadena1SinEsp} y ${cadena2SinEsp} son iguales.`);
          } else {
            console.log(`Los textos ${cadena1SinEsp} y ${cadena2SinEsp} son diferentes.`);
          }
    }
}
compararCadenas();

