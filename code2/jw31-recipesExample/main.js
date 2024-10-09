const recipeContainer = document.querySelector("#recipeContainer");

const response = await fetch("https://dummyjson.com/recipes");
const result = await response.json();

// console.log(result.recipes);

const filteredRecipes = result.recipes.filter(function(value) {
    return value.ingredients.length > 10;
});

filteredRecipes.sort(function(a, b) {
    if (a.prepTimeMinutes == b.prepTimeMinutes) {
        if (a.name == b.name) {
            return 0;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    }
    return b.prepTimeMinutes - a.prepTimeMinutes;
});

filteredRecipes.forEach(function(value) {
    console.log(value);

    recipeContainer.innerHTML += `
        <div>
            <h3>${value.name}</h3>
            <strong>Preparation time:</strong> ${value.prepTimeMinutes} mins
            <br>
            <b>Ingredients:</b> ${value.ingredients.join("; ")}
            <br>
            <br>
        </div>
    `;

});