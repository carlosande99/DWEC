// primer boton de añadir al carrito
const primer = document.querySelectorAll('.info-card')[0];
primer.children[4].addEventListener("mousedown",prueba);
// console.log(primer);
function prueba(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso1'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso1').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso1.jpg';
        foto.id = 'curso1';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = primer.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[1].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
        console.log(ult.children[4]);
    }
}
// segundo elemento
const second = document.querySelectorAll('.info-card')[1];
second.children[4].addEventListener("mousedown",prueba2);
// console.log(second);
function prueba2(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso2'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso2').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso2.jpg';
        foto.id = 'curso2';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = second.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[2].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // tercer elemento
const tercer = document.querySelectorAll('.info-card')[2];
tercer.children[4].addEventListener("mousedown",prueba3);
// console.log(tercer);
function prueba3(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso3'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso3').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso3.jpg';
        foto.id = 'curso3';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = tercer.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[3].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const quarta = document.querySelectorAll('.info-card')[3];
quarta.children[4].addEventListener("mousedown",prueba4);
// console.log(quarta);
function prueba4(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso4'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso4').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso4.jpg';
        foto.id = 'curso4';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = quarta.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[4].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const quinta = document.querySelectorAll('.info-card')[4];
quinta.children[4].addEventListener("mousedown",prueba5);
// console.log(quinta);
function prueba5(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso5'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso5').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso5.jpg';
        foto.id = 'curso5';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = quinta.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[5].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const sexta = document.querySelectorAll('.info-card')[5];
sexta.children[4].addEventListener("mousedown",prueba6);
// console.log(sexta);
function prueba6(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso6'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso6').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso1.jpg';
        foto.id = 'curso6';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = sexta.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[6].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const septima = document.querySelectorAll('.info-card')[6];
septima.children[4].addEventListener("mousedown",prueba7);
// console.log(septima);
function prueba7(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso7'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso7').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso2.jpg';
        foto.id = 'curso7';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = septima.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[7].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const octava = document.querySelectorAll('.info-card')[7];
octava.children[4].addEventListener("mousedown",prueba8);
// console.log(octava);
function prueba8(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso8'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso8').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso3.jpg';
        foto.id = 'curso8';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = octava.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[8].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const novena = document.querySelectorAll('.info-card')[8];
novena.children[4].addEventListener("mousedown",prueba9);
// console.log(novena);
function prueba9(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso9'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso9').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso4.jpg';
        foto.id = 'curso9';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = novena.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[9].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// // 
const decima = document.querySelectorAll('.info-card')[9];
decima.children[4].addEventListener("mousedown",prueba10);
function prueba10(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso10'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso10').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso5.jpg';
        foto.id = 'curso10';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = decima.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[10].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// 
const once = document.querySelectorAll('.info-card')[10];
once.children[4].addEventListener("mousedown",prueba11);
function prueba11(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso11'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso11').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso1.jpg';
        foto.id = 'curso11';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = once.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[11].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}
// 
const doce = document.querySelectorAll('.info-card')[11];
doce.children[4].addEventListener("mousedown",prueba12);
function prueba12(){
    const carrito = document.querySelector('#lista-carrito');
    // console.log(carrito);
    const comprobador = document.getElementById('curso12'); 
    if(comprobador){
        // nose si debe aumentar el precio
        const posiId = document.querySelector('#curso12').parentElement.parentElement;
        const posPrecio = posiId.children[2].children[0];
        console.log(posPrecio);

        // cambia la cantidad de veces seleccionado
        var posCantidad = posiId.children[3].children[0].innerText;
        posCantidad = parseInt(posCantidad);
        posCantidad++;
        posiId.children[3].children[0].textContent = posCantidad.toString();
    }else{
        // creamos una lista que tendra 5 elementos
        const añadir = document.createElement('tr');
        // añadimos la lista
        carrito.children[0].appendChild(añadir);
        // saca el ultimo tr
        const ult = carrito.children[0].lastElementChild;
        // console.log(ult);
        for(var i=0;i<5;i++){
            ult.appendChild(document.createElement('th'));
        }
        //mete la foto
        const foto = document.createElement('img'); 
        foto.src = 'img/curso2.jpg';
        foto.id = 'curso12';
        ult.children[0].appendChild(foto);
        // mete la informacion
        const infor = doce.children[0].innerText;
        const infor2 = document.createElement('p');
        infor2.textContent = infor;
        ult.children[1].appendChild(infor2);
        // crea el elemento y lo añade
        const precio = document.querySelectorAll('.u-pull-right')[12].innerText; //saca el precio
        const precio2 = document.createElement('p');
        precio2.textContent = precio;
        ult.children[2].appendChild(precio2);
        // cantidad
        const cantidad = document.createElement('p');
        cantidad.textContent = 1;
        ult.children[3].appendChild(cantidad);
        // boton de borrar
        const boton = document.createElement('img');
        boton.src = 'img/boton-x.png';
        boton.classList.add('borrar');
        ult.children[4].appendChild(boton);
    }
}

