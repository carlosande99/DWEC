const elem = document.querySelector('.combo');
const pago = document.querySelector('.forma_pago');
let rotated = false; // Variable para rastrear el estado de rotación

elem.children[1].addEventListener("mousedown", prueba);
pago.children[0].addEventListener("mousedown", prueba2);
pago.children[1].addEventListener("mousedown", prueba3);
pago.children[2].addEventListener("mousedown", prueba4);
pago.children[3].addEventListener("mousedown", prueba5);
pago.children[4].addEventListener("mousedown", prueba6);
const elem1 = document.querySelector('.forma_pago');
function prueba() {

    
    // Cambiar la rotación
    if (rotated) {
        elem.children[1].style.transform = "rotate(0deg)";
        rotated = false;
    } else {
        elem.children[1].style.transform = "rotate(180deg)";
        rotated = true;
    }
    
    // Cambiar la visibilidad
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba2(){
    elem.children[0].innerHTML = pago.children[0].innerHTML;
    elem.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba3(){
    elem.children[0].innerHTML = pago.children[1].innerHTML;
    elem.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba4(){
    elem.children[0].innerHTML = pago.children[2].innerHTML;
    elem.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba5(){
    elem.children[0].innerHTML = pago.children[3].innerHTML;
    elem.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba6(){
    elem.children[0].innerHTML = pago.children[4].innerHTML;
    elem.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}