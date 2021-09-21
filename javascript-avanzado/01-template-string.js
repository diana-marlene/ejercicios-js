const nombre = prompt('¿Cuál es tu nombre?');
const edad = prompt('¿Cuál es tu edad?');
// console.log('Hola '+ nombre+ ' saludos' + 'Tu edad es '+ edad+ 'años');

const saludo = `<h1> Hola ${nombre} saludos. <br/>Tu edad ${edad} es años </h1>`;

document.write(saludo);