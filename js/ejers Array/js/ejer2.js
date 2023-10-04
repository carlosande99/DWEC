const array = [];
const arrayPar = [2,6,10,10,10,8,8,6,0,0];
const arrayImp = [5,9,9,7,5,1,3,7,7,3];
const arrayParMulti = [];
const arrayImpMulti = [];
// bucle que guarda los datos en los arrays
// for(let i=0;i<20;i++){
//     array[i] = parseInt(Math.random()*10);
//     if(array[i]%2==0){
//         arrayPar.push(array[i]);
//     }else{
//         arrayImp.push(array[i]);
//     }
// }
console.log("Array PARES: "+arrayPar);
console.log("Array IMPARES: "+arrayImp);
// elimina las posiciones del array
arrayPar.pop();
arrayPar.shift();
let posi = arrayImp.length/2
if(arrayImp.length%2==0){
    arrayImp.splice(posi,1);
    arrayImp.splice(posi-1,1);
}else{
    arrayImp.splice(posi,1);
}
console.log("Array PARES sin 1 y ultimo: "+arrayPar);
console.log("Array IMPARES sin elementos centrales: "+arrayImp);
// suma todos sus elementos
let sum = 0;
let sum2 = 0;
for(let i=0;i<arrayPar.length;i++){
    sum += arrayPar[i];
}
for(let i=0;i<arrayImp.length;i++){
    sum2 += arrayImp[i];
}
arrayPar.push(sum);
arrayImp.push(sum2);
console.log("Array PARES con la suma: "+arrayPar);
console.log("Array IMPARES con la suma: "+arrayImp);
// media de los elementos
let media = (sum/(arrayPar.length-1));
let media2 = (sum2/(arrayImp.length-1));
arrayPar.unshift(media);
arrayImp.unshift(media2);
console.log("Array PARES con la media: "+arrayPar);
console.log("Array IMPARES con la media: "+arrayImp);
// multiplicacion
let mult = arrayPar[0];
let mult2 = arrayImp[0];
for(let i=0;i<arrayPar.length;i++){
    arrayParMulti[i] = (mult * arrayPar[i]);
}
for(let i=0;i<arrayImp.length;i++){
    arrayImpMulti[i] = (mult2 * arrayImp[i]);
}
console.log("Array PARES con la multiplicacion: "+arrayParMulti);
console.log("Array IMPARES con la multiplicacion: "+arrayImpMulti);
// uniremos los dos arrays
const arrayGran = arrayParMulti.concat(arrayImpMulti);
const arrayGranOrd = arrayGran.slice().sort(function(a,b){
    return a-b;
});
console.log("Array FINAL SIN ORDENAR: "+arrayGran);
console.log("Array FINAL ORDENADO: "+arrayGranOrd);
// quitar repetidos
const arrayGranOrdSinDupe = arrayGranOrd.filter(function(valor, indice, self){
    return self.indexOf(valor) === indice;
});
console.log("Array sin REPETIDOS: "+arrayGranOrdSinDupe);