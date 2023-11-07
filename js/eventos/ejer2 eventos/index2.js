const elem = document.querySelector('.estrellas');
const cara = document.querySelector('.emoji');
elem.children[0].addEventListener("mousedown",prueba);
elem.children[1].addEventListener("mousedown",prueba2);
elem.children[2].addEventListener("mousedown",prueba3);
elem.children[3].addEventListener("mousedown",prueba4);
elem.children[4].addEventListener("mousedown",prueba5);
function prueba(){
    cara.removeAttribute("style");
    cara.children[0].style.transform = "translateX(-50px)";
    cara.children[1].style.transform = "translateX(-50px)";
    cara.children[2].style.transform = "translateX(-50px)";
    cara.children[3].style.transform = "translateX(-50px)";
    cara.children[4].style.transform = "translateX(-50px)";
    cara.children[5].style.transform = "translateX(-50px)";
    cara.children[1].style.color = "red";

    elem.children[1].style.color="lightgrey";
    elem.children[2].style.color="lightgrey";
    elem.children[3].style.color="lightgrey";
    elem.children[4].style.color="lightgrey";
}
function prueba2(){
    cara.removeAttribute("style");
    cara.children[0].style.transform = "translateX(-100px)";
    cara.children[1].style.transform = "translateX(-100px)";
    cara.children[2].style.transform = "translateX(-100px)";
    cara.children[3].style.transform = "translateX(-100px)";
    cara.children[4].style.transform = "translateX(-100px)";
    cara.children[5].style.transform = "translateX(-100px)";
    cara.children[2].style.color = "orange";

    elem.children[1].style.color="gold";
    elem.children[2].style.color="lightgrey";
    elem.children[3].style.color="lightgrey";
    elem.children[4].style.color="lightgrey";
}
function prueba3(){
    cara.removeAttribute("style");
    cara.children[0].style.transform = "translateX(-150px)";
    cara.children[1].style.transform = "translateX(-150px)";
    cara.children[2].style.transform = "translateX(-150px)";
    cara.children[3].style.transform = "translateX(-150px)";
    cara.children[4].style.transform = "translateX(-150px)";
    cara.children[5].style.transform = "translateX(-150px)";
    cara.children[3].style.color = "grey";

    elem.children[1].style.color="gold";
    elem.children[2].style.color="gold";
    elem.children[3].style.color="lightgrey";
    elem.children[4].style.color="lightgrey";
}
function prueba4(){
    cara.removeAttribute("style");
    cara.children[0].style.transform = "translateX(-200px)";
    cara.children[1].style.transform = "translateX(-200px)";
    cara.children[2].style.transform = "translateX(-200px)";
    cara.children[3].style.transform = "translateX(-200px)";
    cara.children[4].style.transform = "translateX(-200px)";
    cara.children[5].style.transform = "translateX(-200px)";
    cara.children[4].style.color = "chartreuse";

    elem.children[1].style.color="gold";
    elem.children[2].style.color="gold";
    elem.children[3].style.color="gold";
    elem.children[4].style.color="lightgrey";
}
function prueba5(){
    cara.removeAttribute("style");
    cara.children[0].style.transform = "translateX(-250px)";
    cara.children[1].style.transform = "translateX(-250px)";
    cara.children[2].style.transform = "translateX(-250px)";
    cara.children[3].style.transform = "translateX(-250px)";
    cara.children[4].style.transform = "translateX(-250px)";
    cara.children[5].style.transform = "translateX(-250px)";
    cara.children[5].style.color = "green";

    elem.children[1].style.color="gold";
    elem.children[2].style.color="gold";
    elem.children[3].style.color="gold";
    elem.children[4].style.color="gold";
}
