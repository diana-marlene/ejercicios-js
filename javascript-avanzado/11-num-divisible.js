let n1 = parseInt(prompt('Escribe un numero:'));

document.write(`<h1>Numero ingresado: ${n1}</h1>`)
for (let j=0; j<=n1;j++){
    if (n1%j == 0){
        document.write(`<h1> Divisible con : ${j}</h1>`);
    }
}