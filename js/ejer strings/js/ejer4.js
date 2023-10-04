function obtenerPalabrasValidas() {
    let palabra1 = prompt("Introduce la primera palabra (debe contener al menos 4 caracteres):").trim();
    while (palabra1.length < 4) {
        palabra1 = prompt("La primera palabra debe contener al menos 4 caracteres:").trim();
    }

    let palabra2 = prompt("Introduce la segunda palabra (debe contener al menos 5 caracteres):").trim();
    while (palabra2.length < 5) {
        palabra2 = prompt("La segunda palabra debe contener al menos 5 caracteres:").trim();
    }

    let palabra3 = prompt("Introduce la tercera palabra (debe contener al menos 6 caracteres):").trim();
    while (palabra3.length < 6) {
        palabra3 = prompt("La tercera palabra debe contener al menos 6 caracteres:").trim();
    }

    return [palabra1, palabra2, palabra3];
}

function crearCuartaPalabra(palabra1, palabra2, palabra3) {
    let inicio = palabra1.slice(0, 2).toUpperCase();
    
    let centro;
    if (palabra2.length % 2 === 0) {
        centro = palabra2.slice(palabra2.length / 2 - 1, palabra2.length / 2 + 1).toLowerCase();
    } else {
        centro = palabra2.slice(palabra2.length / 2 - 1, palabra2.length / 2 + 2).toLowerCase();
    }

    let final = palabra3.slice(-2).toUpperCase();

    let cuartaPalabra = inicio + centro + final;
    return cuartaPalabra;
}

let [palabra1, palabra2, palabra3] = obtenerPalabrasValidas();
let cuartaPalabra = crearCuartaPalabra(palabra1, palabra2, palabra3);
console.log("La cuarta palabra compuesta es:", cuartaPalabra);
