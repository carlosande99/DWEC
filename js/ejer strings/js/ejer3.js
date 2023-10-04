function extraerCaracteresNoRepetidos(cadena1, cadena2) {
    
    let cadenaTrabajo = cadena1;
    let cadenaOtra = cadena2;
  
    if (cadena2.length > cadena1.length) {
      cadenaTrabajo = cadena2;
      cadenaOtra = cadena1;
    }
  
    console.log(`Vamos a trabajar sobre la cadena más larga: ${cadenaTrabajo}`);
  
    
    let caracteresNoRepetidos = "";
  
    
    for (let i = 0; i < cadenaTrabajo.length; i++) {
      let caracter = cadenaTrabajo[i];
      if (caracteresNoRepetidos.indexOf(caracter) == -1 && caracter !== " ") {
        caracteresNoRepetidos += caracter+",";
      }
    }
  
    console.log(`Caracteres NO repetidos en la cadena ${cadenaOtra}: ${caracteresNoRepetidos}`);
  }
  
  
  let cadena1 = prompt("Ingrese la primera cadena:");
  let cadena2 = prompt("Ingrese la segunda cadena:");
  
extraerCaracteresNoRepetidos(cadena1, cadena2);
  