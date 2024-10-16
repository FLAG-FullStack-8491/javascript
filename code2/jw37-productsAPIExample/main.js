import productsService from "./services/productsService.js";

const addProductForm = document.querySelector("#addProductForm");
const inputTitle = document.querySelector("#inputTitle");
const inputCategory = document.querySelector("#inputCategory");
const inputDescription = document.querySelector("#inputDescription");

addProductForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const myProduct = {
        title: inputTitle.value,
        category: inputCategory.value,
        description: inputDescription.value
    }

    const result = await productsService.addProduct(myProduct);
    if (result) {
        console.log(result);
        alert("INSERIDO COM SUCESSO COM O NOVO ID " + result.id);
    } else {
        alert("ERRO!");
    }
});