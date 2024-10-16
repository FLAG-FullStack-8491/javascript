const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

div1.textContent = "Bom dia!";
div1.addEventListener("click", function() {
    alert("kakaka");
});

// So para exemplo
// o try and catch nao deve ser usado para este tipo de erros!
const x = 12;
try {
    x = 24;
    console.log("este ja nao da...");
} catch(error) {
    // console.log(error);
}


div2.textContent = "Sei la!";

alert(123);




fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(result => {
        // faz alguma coisa com o resultado...
    })
    .catch(error => {
        alert("Network error. Please refresh");
    });


    
try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const result = await response.json();
    // faz alguma coisa com o resultado...
} catch(error) {
    alert("Network error. Please refresh");
}
