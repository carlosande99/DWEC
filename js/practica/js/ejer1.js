let salario = parseFloat(prompt("Dime tu salario"));
let edad = prompt("Dime tu edad?");
let hijos = prompt("Cuantos hijos tienes?");
switch(true){
    case (salario < 1000 && edad < 30 && hijos > 0) :
       document.write("Tu sueldo es: 1200");
       break;
    case(salario < 1000 && edad < 30 && hijos == 0) :
        salario = salario * 1.05;
        document.write("Tu sueldo va a ser: "+salario);
        break;
    case(edad >= 30 && edad < 45 && salario < 1250 && hijos == 1 || hijos == 2) :
        salario = salario * 1.10;
        document.write("Tu sueldo va a ser: "+salario);
        break;
    case(edad >= 30 && edad < 45 && salario < 1250 && hijos > 2 ) :
        salario = salario * 1.15;
        document.write("Tu sueldo va a ser: "+salario);
        break;
    case(edad > 45 && salario <= 2000) :
        salario = salario * 1.15;
        document.write("Tu sueldo va a ser: "+salario);
        break;
    default :
        document.write("Tu sueldo va a ser: "+salario);
        break;
}