let num1 = parseInt(prompt('Ingresa un numero : '));
let suma = 0, cont = 0,prom, numeros =[];

while(num1>=0){
    numeros.push(num1) ;
    suma = suma+num1;
    cont ++;
    prom = suma/cont;
    num1 = parseInt(prompt('Ingresa un numero: '));
}

document.write(`Numeros ingresados : ${numeros} <br/>La suma es : ${suma} <br/> Promedio : ${prom}`)