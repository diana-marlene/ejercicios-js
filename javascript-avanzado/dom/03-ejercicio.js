const edad = document.querySelector('#name');  // var donde se va a imprimir
const input = document.querySelector('#edad'); // Se guarda el valor del input

const mayorEdad= ()=>{
    parseInt(input.value) >= 18 ? edad.textContent = 'Eres mayor de edad' :edad.textContent = 'Eres menor de edad' ;
    /* Recuperar valor de input  y condición */
}
