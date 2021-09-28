const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector("#cats")

$btnCat.addEventListener('click', ()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
      
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300';
        imgCat.height= '200'
        // document.body.append(imgCat);
        $divCats.appendChild(imgCat);

    });
})

  /* Deestructuración  Se usa para extraer elmentos 
  de un arreglo u objeto
      
        const [cat] = data;
        console.log(cat); 
        const {url} = cat; */