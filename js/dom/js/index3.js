const elem2 = document.querySelector('.combo');
const pago = document.querySelector('.forma_pago');
let rotated = false; // Variable para rastrear el estado de rotación

elem2.children[1].addEventListener("mousedown", prueba_2);
pago.children[0].addEventListener("mousedown", prueba2_2);
pago.children[1].addEventListener("mousedown", prueba3_2);
pago.children[2].addEventListener("mousedown", prueba4_2);
pago.children[3].addEventListener("mousedown", prueba5_2);
pago.children[4].addEventListener("mousedown", prueba6_2);
const elem1 = document.querySelector('.forma_pago');
function prueba_2() {

    
    // Cambiar la rotación
    if (rotated) {
        elem2.children[1].style.transform = "rotate(0deg)";
        rotated = false;
    } else {
        elem2.children[1].style.transform = "rotate(180deg)";
        rotated = true;
    }
    
    // Cambiar la visibilidad
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba2_2(){
    elem2.children[0].innerHTML = pago.children[0].innerHTML;
    elem2.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba3_2(){
    elem2.children[0].innerHTML = pago.children[1].innerHTML;
    elem2.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba4_2(){
    elem2.children[0].innerHTML = pago.children[2].innerHTML;
    elem2.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba5_2(){
    elem2.children[0].innerHTML = pago.children[3].innerHTML;
    elem2.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}
function prueba6_2(){
    elem2.children[0].innerHTML = pago.children[4].innerHTML;
    elem2.children[1].style.transform = "rotate(180deg)";
    rotated = true;
    elem1.style.visibility = (rotated ? "hidden" : "visible");
}