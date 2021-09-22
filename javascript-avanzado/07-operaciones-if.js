const n1 = parseInt(prompt('Ingresa numero 1 :'));
const n2 = parseInt(prompt('Ingresa numero 2 :'));

if (n1> n2){
    document.write(`Suma: ${n1+n2}`);
    document.write(`<br/>Resta: ${n1-n2}`);
}else if (n1<n2){
    document.write(`Multipilcación: ${n1*n2}`);
    document.write(`<br/> División: ${n1/n2}`);
}else{
    document.write('Numeros iguales :)')
}