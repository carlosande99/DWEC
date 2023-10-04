const Numeros = {
    maximo: 0,
    minimo: 0,
    get numeros(){
        let numeros = "";
        for(let i=this.minimo+1;i<this.maximo;i++){
            numeros = numeros + i + " ";
        }
        return (`Numeros de diferencia entre el minimo: ${this.minimo} y el maximo: ${this.maximo} -> ${numeros}`);
    },
    set nuevosNumeros(num=[]){
        let max = num[0];
        let min = num[0];
        for(let i=0;i<num.length;i++){
            if(max<num[i]){
                max = num[i];
            }
            if(min>num[i]){
                min = num[i];
            }
        }
        this.maximo = max;
        this.minimo = min;
    }
};
const numeros = [];
// console.log(Numeros.numeros);
let x = true;
while(x){
    let num = parseInt(prompt("Dime un numero:"));
    if(num != NaN && /\d/.test(num)){
        numeros.push(num);
    }else{
        x = false;
    }
}
Numeros.nuevosNumeros = numeros;
console.log(Numeros.numeros);
numeros.sort(function(a, b){
    return b-a
});
console.log(numeros);

