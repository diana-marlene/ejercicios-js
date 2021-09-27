const $btn = document.querySelector('#btn');

$btn.addEventListener('click',() =>{
    console.log('Me presionaste');
});

const $inpTex = document.querySelector('#text');

$inpTex.addEventListener('keyup',(e) =>{
    console.log(e.target.value);
});