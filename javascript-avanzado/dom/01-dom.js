/* document.write('Hola desde Js'); */
// Acceder a una etiqueta HTML
//const title = document.getElementsByTagName('h1');
/* Devuelve un arreglo de los elementoss que tengan esa etiqueta */

/* title[0].innerHTML = 'Titulo cambiado desde JavaScript';

const texto = document.getElementById('text')
texto.innerHTML = 'Parrafo cambiado desde JavaScript';
texto.style.background = 'blue';

console.log(texto); */

// Obtiene un elemento por id
document.getElementsById

// Obtiene todos los elementos de una clase y devuelve un arreglo
document.getElementsByClassName

// Obtiene todos los elementos por nombre y devuelve un arreglo
document.getElementsByName

//Referencia a los elementos
const texto =document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde JavaScript';


/* Crear elementos html */

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);