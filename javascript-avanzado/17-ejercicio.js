const $btnDog = document.querySelector('#btnDog');
const $divDogs = document.querySelector("#polaroid");

$btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then( resp => resp.json()).then(data => {
        console.log(data);
        const divDogs = document.createElement('img');
        const imgDog = document.createElement('img');
        //const imgDog = document.createElementById('#polaroid');
        imgDog.src = data.message;
        imgDog.width = '300';
        imgDog.height= '200';
        $divDogs.appendChild(imgDog);
    });
});