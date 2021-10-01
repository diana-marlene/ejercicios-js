
class Pokemon{
    #name = '';
    #type = '';
    #evolutions = [];

    constructor(name,type,evolutions){
        this.#name;
        this.#type;
        this.#evolutions = evolutions;

    }

    /* Asignar valores*/
    set name(name){
        this.#name = name;
    }

    set type(type){
        this.#type = type;
    }

    set evolutions(evolutions){
        this.#evolutions = evolutions;
    }

    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }


    attack(){
        return `${this.#name}, esta atacando`;
    }

    evole(evolution=0){
        // Valida que la opción exista
        const EVOLE = this.#evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if(EVOLE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name =EVOLE;
        }
        return message;
    }
}

const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 
'Charizard']);

const Squirtle = new Pokemon('Squirtle', 'Water', ['Watortle', 
'Charizard']);


console.log((`${Charmander.name}  es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evole(0));
console.log((`${Charmander.name}  es de tipo ${Charmander.type}`));

