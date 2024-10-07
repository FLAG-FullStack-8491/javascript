// 1 - Copiar este codigo // 2 - Ao clicar no elemento da lista, mostrar info adicional
// por exempl: Email, Nome de empresa, etc...
const userList = document.querySelector("#userList");
const userDetails = document.querySelector("#userDetails");
let userData = [];

userList.addEventListener("click", function(event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const i = event.target.dataset.index;
    userDetails.innerHTML = `
        <p>Email: ${userData[i].email}</p>
        <p>Username: ${userData[i].username}</p>
        <p>Address: ${userData[i].address.street}, ${userData[i].address.suite}<br>${userData[i].address.zipcode}, ${userData[i].address.city} </p>
    `;
});

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const result = await response.json();
    userData = result;
    userList.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        userList.innerHTML += `<li data-index="${i}">${result[i].name}</li>`;
        // userList.innerHTML += `<li data-phone="${result[i].phone}" data-user="${result[i].username}" data-email="${result[i].email}">${result[i].name}</li>`;
        // console.log(`${result[i].name} <${result[i].email}>,`);
    }
}

getUsers();
