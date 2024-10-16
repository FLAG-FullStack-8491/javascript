import pokemonService from "./services/pokemonService.js";

// A
try {
    const list = await pokemonService.getPokemonList();
    console.log(list);
} catch(error) {
    console.log(error);
    alert("ERROR!");
}

// B

// const list = await pokemonService.getPokemonList();
// if (list) {
//     console.log(list);
// } else {
//     alert("ERROR!");
// }

