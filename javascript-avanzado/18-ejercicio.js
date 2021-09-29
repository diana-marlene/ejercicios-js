const $divcontent = document.querySelector("#cardscontainer");

const mostrarCards = () => { 

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( resp => resp.json()).then(data => {
    console.log(data);

    data.forEach( card => {
        col = document.createElement('div');
        col.classList.add('col-md-4');
        col.innerHTML = `
        <div  class="card" >
        <img id="img" src = "${card.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">"${card.title}"</p>
        </div>
    </div>
        `;
        $divcontent.appendChild(col);

    }); 

});

}
mostrarCards();

