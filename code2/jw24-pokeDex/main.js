// O objectivo e mostrar uma lista do lado esquerdo
// ao carregar no elemento da list quero mostar a info de detalhe do lado direito

// 1 - Usar fetch para descarregar a lista de pokemons
//   - testar por exemplo com console.log()

// 2 - fazer um loop para percorrer todos os pokemons descarregados
//     e coloca-los como <li> no elemento <ul id="pokeList"> 

// 3 - adicionar um eventListener a <ul>, para poder receber informacao
//     de que o utilizador clickou num dos elementos da lista
//    - testar com um alert ou com um console.log
//    - testar de formar a garantir que temos info acerca do elemento clickado

// 4 - na funcao do event listener
//     fazer um novo fetch baseado no pokemon escolhido, para is buscar os detalhes
//     desse pokemon especifico
//   - isto vai acontecer sempre que o utilizador clique numa li

// 5 - colocar essa info na <img> e nos <span> apropriados

// 6 - tornar isto bonito com CSS

function fetchPokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            createPokeList(result.results);
            // fetchPokemonByName(result.results[0].name);
        });
}

// async function fetchPokemonList() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//     const result = await response.json();
    
//     createPokeList(result.results);
//     fetchPokemonByName(result.results[0].name);    
// }

function createPokeList(pokemonData) {
    pokeList.innerHTML = "";
    for (let i = 0; i < pokemonData.length; i++) {
        // alert(pokemonData[i].name);
        pokeList.innerHTML += `<li>${pokemonData[i].name}</li>`;
    }
}

function fetchPokemonByName(name) {
    fetch ("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            // console.log(result);
            displayPokemonDetails(result);
        });
}

function displayPokemonDetails(pokemonDetails) {
    // console.log(pokemonDetails.name);
    // console.log(pokemonDetails.weight);
    // console.log(pokemonDetails.sprites.other["official-artwork"].front_default);

    pokeImage.src = pokemonDetails.sprites.other["official-artwork"].front_default;
    pokeName.textContent = pokemonDetails.name;
    pokeWeight.textContent = pokemonDetails.weight;
}

const pokeList = document.querySelector("#pokeList");
const pokeImage = document.querySelector("#pokeImage");
const pokeName = document.querySelector("#pokeName");
const pokeWeight = document.querySelector("#pokeWeight");
const pokemonUsageMessage = document.querySelector("#pokemonUsageMessage");
const pokemonDetails = document.querySelector("#pokemonDetails");

pokeList.addEventListener("click", function(event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    pokemonUsageMessage.style.display = "none";
    pokemonDetails.style.display = "block";

    // alert(event.target.textContent);
    fetchPokemonByName(event.target.textContent);
});

fetchPokemonList();