const $btn = document.querySelector('#btn');
const $entrada = document.querySelector('#texto');
const $lista = document.querySelector('#lista')

$btn.addEventListener('click',() =>{
    let ingresado = $entrada.value;
    let elemento = document.createElement('li');
    elemento.textContent = ingresado;
    $lista.appendChild(elemento);
});


