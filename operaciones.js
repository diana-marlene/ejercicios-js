var num1=parseInt(prompt('Ingresa numero 1: '));
var num2=parseInt(prompt('Ingresa numero 2: '));

function operacion(n1,n2){
    suma = n1+n2;
    resta = n1-n2;
    mult = n1*n2;
    div = n1/n2;
    document.write("Suma : ", suma + '</br>')
    document.write(" Resta : ", resta + '</br>')
    document.write(" Multiplicación : ", mult+ '</br>')
    document.write(" División: ", div+ '</br>')

}

operacion(num1,num2);
