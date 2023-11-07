// modifico el h1
document.querySelector('h1').innerHTML = "Hola bb :v | :)";
const encabezadoCSS = document.querySelector('h1');
encabezadoCSS.style.color = "black";
encabezadoCSS.style.fontWeight = "bold";
encabezadoCSS.style.textAlign = "center";
encabezadoCSS.style.backgroundImage = "url('../dom/img/espana.png')";

// modifico el nav
const nav = document.querySelector('.navegacion');
nav.children[0].textContent="AY!";
nav.children[1].textContent="MI MADRE"; 
nav.children[2].textContent="EL";
nav.children[3].textContent="BICHOO";

//modifico en h2
const encabezadoCSS2 = document.querySelector('h2');
encabezadoCSS2.style.textAlign = "center";
encabezadoCSS2.style.fontWeight = "normal";
encabezadoCSS2.style.fontSize = "4rem"

//modifico el logo y le añado un enlace
const enlace = document.createElement("a");
enlace.href = "../index.html";
const imagen = document.querySelector('.logo img');
imagen.src = '../dom/img/espana.png';
imagen.style.width = "50px";
imagen.style.height = "50px";
imagen.style.marginLeft = "20px";
imagen.parentNode.replaceChild(enlace, imagen);
enlace.appendChild(imagen);

// modificamos las imagenes 
const imagen1 = document.querySelectorAll('.card')[0];
imagen1.children[0].src = '../dom/img/nano.jpg';
imagen1.children[1].children[0].textContent = "Fernando";
imagen1.children[1].children[1].textContent = "Mi padre";
imagen1.children[1].children[2].textContent = "Alonso";

const imagen2 = document.querySelectorAll('.card')[1];
imagen2.children[0].src='../dom/img/nano.jpg';
imagen2.children[1].children[0].textContent = "Fernando";
imagen2.children[1].children[1].textContent = "Tu padre";
imagen2.children[1].children[2].textContent = "Alonso";

const imagen3 = document.querySelectorAll('.card')[2];
imagen3.children[0].src='../dom/img/nano.jpg';
imagen3.children[1].children[0].textContent = "Fernando";
imagen3.children[1].children[1].textContent = "Su padre";
imagen3.children[1].children[2].textContent = "Alonso";

const imagen4 = document.querySelectorAll('.card')[3];
imagen4.children[0].src='../dom/img/nano.jpg';
imagen4.children[1].children[0].textContent = "Fernando";
imagen4.children[1].children[1].textContent = "Nuestro padre";
imagen4.children[1].children[2].textContent = "Alonso";

// modificamos el estilo del fondo
const fondo = document.querySelectorAll('.card')[7];
fondo.children[0].src='../dom/img/bicho.jpg';
fondo.children[0].style.width="200px";
const fondo2 = document.querySelectorAll('.card')[8];
fondo2.children[0].src='../dom/img/bicho.jpg';
const fondo3 = document.querySelectorAll('.card')[9];
fondo3.children[0].src='../dom/img/bicho2.jpeg';
const fondo4 = document.querySelectorAll('.card')[10];
fondo4.children[0].src='../dom/img/bicho2.jpeg';