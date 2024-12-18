const wrapperEl = document.querySelector(".wrapper");
const loaderEl = document.querySelector(".loader");
const BASE_URL = "https://dummyjson.com";

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    response 
    .json()
    .then((res)=> createCard(res))
    .catch((err)=> createCard(err))
    .finally(()=>{
        loaderEl.style.display = "none"
    })

    
}

window.addEventListener("load", () => {
    fetchData("/users?limit=32");
});

function createCard(data) {
    data.users.forEach(user => {
        const divEl = document.createElement("div");
        divEl.className = "card__wrapper";
        divEl.innerHTML = `
            <div class="card__image">
                <img src="${user.image}" alt="user">
            </div>
            <div class="card__content">
                <h1>${user.firstName} ${user.lastName}</h1>
                <p>Age: ${user.age}</p>
                <p>@${user.email}</p>
                <p>${user.address.city}</p>
                <button type="submit">Message</button>
            </div>
        `;
        wrapperEl.appendChild(divEl);    
    });
}
