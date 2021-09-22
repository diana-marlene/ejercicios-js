/* Ciclos while
    Nos permite repetir el código mientras una condición
    sea verdadera
*/

// ciclos for -> numero definido de iteraciones 
let num1 = parseInt(prompt('Ingresa un numero'));
// NaN -> not a number
while(isNaN(num1)){
    num1 = parseInt(prompt('Ingresa un numero'));
}


let num2 =parseInt(prompt('Ingresa un numero :'));
const numero_secreto= 23;

/* while(num2 !== numero_secreto){
    console.log("No adivinaste el numero secreto intenta de nuevo");
    num2 = parseInt(prompt('Ingresa un numero:'));
} */


/* Ciclo do while

*/

do{
    document.write(`<p>El numero introducido es : ${num2}</p>`);
    num2 =parseInt(prompt('Ingresa un numero :'));

}
while(num2>5);
