const numero1 = parseInt(prompt('Ingresa un numero'));
const numero2 = parseInt(prompt('Ingresa un numero'));

if (numero1<numero2){
    mayor =numero2;
    menor = numero1;
}else{
    mayor=numero1;
    menor =numero2;
}

for (let i = menor ; i<mayor; i++){
    
    if(i%2!=0){
        document.write(i, " ")
    }
}