function cifrarTextoCesar() {
    let texto = prompt("Ingrese el texto a cifrar:");
    let desplazamiento = prompt("Ingrese el desplazamiento (número entero):");
  
    while (!Number.isInteger(+desplazamiento)) {
      desplazamiento = prompt("Ingrese un número entero válido:");
    }

    desplazamiento = parseInt(desplazamiento);

    let textoCifrado = "";
    let textoOriginal = "";
    let nuevoCharNum = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        let codUniOrig = texto.charCodeAt(i);

        let nuevoCodUni = codUniOrig + desplazamiento;

        let nuevoChar = String.fromCharCode(nuevoCodUni);
        
        nuevoCharNum += nuevoCodUni;

        textoCifrado += nuevoChar;
        textoOriginal += char;
    }
  
    console.log(`Texto Original: ${textoOriginal}`);
    console.log(`Texto Cifrado: ${textoCifrado}`+`${nuevoCharNum}`);
}
cifrarTextoCesar();