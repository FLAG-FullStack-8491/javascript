const url = "https://dummyjson.com/products/";

async function getAllProducts() {
    try {
        const response = await fetch(url);
        const result = await response.json();
    
        return result.products;
    } catch(error) {
        console.log(error);
        return [];
    }
}

async function getProductById(id) {
    try {
        const response = await fetch(url + id);
        if (response.status === 404) {
            // return null;
            throw new Error("404");
        }
        const result = await response.json();
    
        return result;
    } catch(error) {
        console.log(error);
        return null;
    }
}

async function addProduct(product) {

    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    }

    try {
        const response = await fetch(url + "/add", init);
        if (response.status !== 201) {
            return null;
        }
        const result = await response.json();

        return result;
    } catch(error) {
        console.log(error);
        return null;
    }
}

export default {
    getAllProducts,
    getProductById,
    addProduct
}