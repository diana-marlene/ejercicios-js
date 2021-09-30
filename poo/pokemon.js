class Pokemon{
    name = '';
    type = '';
    evolutions = [];

    constructor(name,type,evolutions){
        this.name;
        this.type;
        this.evolutions = evolutions;

    }
    
 
    attack(){
        return `${this.name}, esta atacando`;
    }

    evole(evolution=0){
        // Valida que la opción exista
        const EVOLE = this.evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if(EVOLE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name =EVOLE;
        }
        return message;
    }
}

const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);