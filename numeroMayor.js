var n=[];
var tam= prompt("¿Cuántos valores quieres ingresar?");

function NumeroMayor(tam){
    for(var i =0; i<tam; i++){
        n[i]=prompt('Ingresa valor: ');
    }
    n.sort(function(a, b){return a - b});
    console.log(n);
    document.write("El valor mayor es ", n[2])
}

NumeroMayor(tam);
