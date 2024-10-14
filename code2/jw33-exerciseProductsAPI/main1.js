// DOM elements
const productsBox = document.querySelector("#productsBox");
const categoriesBox = document.querySelector("#categoriesBox");
const priceSortSelect = document.querySelector("#priceSortSelect");

// Support functions
async function getProducts(url) {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    

    productsBox.innerHTML = "";
    result.products.forEach(element => {
        productsBox.innerHTML += `
        <div>
            <img src="${element.thumbnail}" alt="">
            <p>${element.title}</p>
            <p>Price: ${element.price}</p>
        </div>
        `;
    });
}

// Listeners
categoriesBox.addEventListener("click", function(event) {
    if (event.target.tagName !== "A") {
        return;
    }
    event.preventDefault();
    
    slug = event.target.dataset.slug;
    const url = `https://dummyjson.com/products/category/${slug}?sortBy=price&order=${priceSortSelect.value}`;

    getProducts(url);
});

priceSortSelect.addEventListener("change", function() {
    const url = `https://dummyjson.com/products/category/${slug}?sortBy=price&order=${priceSortSelect.value}`;
    getProducts(url);
});

// Main
const response = await fetch("https://dummyjson.com/products/categories");
const result = await response.json();
let slug = "beauty";

const url = `https://dummyjson.com/products/category/${slug}?sortBy=price&order=${priceSortSelect.value}`;
getProducts(url);

result.forEach(element => {
    categoriesBox.innerHTML += `<a href="#" data-slug="${element.slug}">${element.name}</a>`;
});