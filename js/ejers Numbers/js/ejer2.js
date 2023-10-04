let comensales = parseInt(prompt("Cuantos comensales sois?"));
let ancianos = parseInt(prompt("Cuantos sois mayores de 65 años"));
let niños = parseInt(prompt("Cuantos son niños menores de 10 años"));
let comprobador = true;
let infor = 0;
let aux = comensales;
let rest = aux - niños;
let descuentos;
function pantInfor(infor, rest){
alert(`De momento llevas ${infor} menús elegidos...\nTe quedan ${rest} por elegir...`)
}
if(comensales < (ancianos+niños)){
    comprobador = false;
    alert("ERROR al poner los comensales")
}
if(comprobador){
    alert(`Estas son las opciones de menú para adultos...\n\n
    1.-Menú del día --> 12,50€\n\n
    2.-Menú del día PREMIUM --> 17,45€\n\n
    3.-Menú Buffet Libre --> 23,85€\n\n
    NOTA: Todos los precios son sin IVA`);

    pantInfor(infor,rest);
    let menuDia = parseInt(prompt("¿Cuántos comensales quieren el menú:\n1.-Menú del día --> 12,5€"));
    infor += menuDia;
    rest-=menuDia;
    pantInfor(infor,rest);
    let menuPrem = parseInt(prompt("¿Cuántos comensales quieren el menú:\n2.-Menú del día PREMIUM --> 17,45€"));
    infor += menuPrem;
    rest-=menuPrem;
    pantInfor(infor,rest);
    let menuLibre = rest;
    
    alert(`Contamos con un total de ${comensales} comensales: ${niños} niños y ${comensales-niños} adultos\n\n
    Los menús que se servirán serán los siguientes:\n\n
    ${menuDia} menú/s del día\n\n
    ${menuPrem} menú/s PREMIUM y\n\n
    ${menuLibre} Buffet Libre\n\n
    ${niños} menú/s infantil/es`);
    let preSinDescuento;
    let preDescuento;
    if(menuDia>=ancianos){
        descuentos = ancianos;
        preDescuento = 12.50 * ancianos * 0.85;
        preSinDescuento = (menuDia - ancianos) * 12.50;
    }else if(menuDia == 0){
        descuentos = 0;
        preDescuento = 0;
        preSinDescuento = 0;
    }else{
        descuentos = menuDia;
        preDescuento = menuDia * 12.50 * 0.85;
        preSinDescuento = 0;
    }
    alert(`Debe saber que ${descuentos} menú/s se beneficiarán de un 15% de descuento,\n\n
    respecto al menú de adultos por ser mayores de 65 años\n\n
    NOTA: El descuento será aplicado a los menús más economicos`);
    
    alert(`Los menús infantiles tienen un precio de 9.25€ + IVA\n\n 
    En su caso, se le aplicará este precio a ${niños} comensales`);
    
    let precio = (preDescuento + preSinDescuento)+(17.45*menuPrem)+(23.85*menuLibre)+(9.25*niños);
    
    alert(`Los menús que se servirán serán los siguientes:
    ${menuDia} menús/s del día x 12.50€...........${(preDescuento + preSinDescuento).toFixed(2)}€
    ${menuPrem} menús/s PREMIUM x 17.45€..........${(menuPrem * 17.45).toFixed(2)}€
    ${menuLibre} menús Buffet x 23.85€............${(menuLibre*23.85).toFixed(2)}€
    ${niños} menús Infantil x 9.25€...............${(9.25*niños).toFixed(2)}€
    Total.........................................${precio.toFixed(2)}€
    IVA 10%.......................................${(precio*0.1).toFixed(2)}€
    TOTAL IVA INCLUIDO............................${(precio+(precio*0.1)).toFixed(2)}€`);
}
