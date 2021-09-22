/* Arreglos
    Estructura de datos
*/

//Declaración de arreglos
const arreglo = [];
const arreglo2 = new Array();


let lenguajes = ['JavaScript', 'Java', 'PHP', 'Python','C#','C',
                'Ruby'];

/* ForEach*/          //Funcion anonima
document.write('<ul>')
lenguajes.forEach(function(lenguaje,index){
    document.write(`<li>  ${index} - ${lenguaje} </li>`)
});
document.write('</ul')

/* Map, crea un nuevo arreglo con los resultados */
let numeros = Array(2,3,4,27,19,12);
let numeros2 = numeros.map(function(numero){
    return numero *2;
});

console.log(numeros);
console.log(numeros2);
/* Includes determina si un arreglo contiene un valor */

console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('PHP'));

/* Filter , crear un nuevo arreglo con todos los elementos
    que cumplan con la condición 
*/

let filtrados = numeros.filter(function(numero){
    if(numero > 10){
        return numero;
    }
});

console.log(filtrados);