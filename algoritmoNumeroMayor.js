var n=[];

function NumeroMayor(){
    n[0]=prompt('Ingresa primer numero');
    n[1]=prompt('Ingresa segundo numero');
    n[2]=prompt('Ingresa tercer numero');
    n.sort();
    console.log(n);
    document.write("El valor mayor es ", n[2])
}

NumeroMayor();
