/* Switch
    Estructura de control de flujo, nos ayuda a tomar decisiones
    medante la evaluación de una condición.
*/
/* const edad = parseInt(prompt('Ingresa tu edad:'));
let mensaje ="";

switch(edad){
    case 18:
        mensaje = "Acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;
}

document.write(`<p> ${mensaje}</p>`) */

const nombre = prompt("Ingresa tu nombre: ");

switch(nombre){
    case 'Diana':
        mensaje= 'Eres administradora';
        break;
    case 'Juan':
        mensaje = 'Eres usuario';
    default:
        mensaje ='No tienes pemisos';
        break;
}

document.write(`<p>${mensaje}</p>`)