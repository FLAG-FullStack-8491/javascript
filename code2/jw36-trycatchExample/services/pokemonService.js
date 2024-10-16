async function getPokemonList() {
    try {
        const response = await fetch("httokeapi.co/api/v2/pokemon");
        const result = await response.json();
    
        return result;
        
    } catch(error) {

        // A
        const pokeChaosError = new Error("Pokemon Chaos!");
        throw pokeChaosError;
        
        // B
        // console.log(error);
        // return undefined;
        // return {
        //     count: 0,
        //     status: "error",
        //     message: "something went horribly wrong..."
        // };
    }
}

export default {
    getPokemonList
}