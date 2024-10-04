async function getIt() {
    const response = await fetch("https://pokemon.com");
    const result = await response.text();
    console.log(result);
}

getIt();