
const shopBoosters = document.querySelector("#shop-boosters");

boosters.forEach((b) => {
    shopBoosters.innerHTML += `
        <article id=${b.id}>
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <p>${b.description}</p>
            <p>Price: ${b.price} DH</p>
            <button class="add-cart">Add to Cart</button>
        </article>
    `;
});


let ajouter = document.querySelectorAll('.add-cart');
let afiche_panyier = document.getElementsByClassName("cards")[1];

ajouter.forEach((e) => {
    e.addEventListener("click", () => {
        const id = Number(e.parentElement.id);
        const boos = boosters.find((b) => b.id === id);
        const existe = document.getElementById(`bita9a${id}`);

        if (existe) {
            const quantite = existe.querySelector(".quantite");
            quantite.innerHTML = Number(quantite.innerHTML) + 1;
        } else {
            afiche_panyier.innerHTML += `
                <article class='boosterpanyer'id="bita9a${boos.id}">
                    <img src="${boos.image}" alt="${boos.name}">
                    <h3>${boos.name}</h3>
                    <p>Price: ${boos.price} DH</p>
                    <button class="moins">-</button>
                    <span class="quantite">1</span>
                    <button class="plus">+</button>
                    <button class="remove">Remove</button>
                </article>
            `;
            total()
        }
    });

});

afiche_panyier.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus")) {
        const article = e.target.parentElement;
        const quantite = article.querySelector(".quantite");
        quantite.innerHTML = Number(quantite.innerHTML) + 1;
    }
    total()
});


afiche_panyier.addEventListener("click", (e) => {
    if (e.target.classList.contains("moins")) {
        const article = e.target.parentElement;
        const quantite = article.querySelector(".quantite");

        if (Number(quantite.innerHTML) > 1) {
            quantite.innerHTML = Number(quantite.innerHTML) - 1;
        }else{
            e.target.parentElement.remove();
        }
    }
    total()
});


afiche_panyier.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
    }
    total()
});

function total() {
    let somme = 0;

    const articles = document.querySelectorAll(".boosterpanyer");

    articles.forEach((e) => {
        const id = Number(e.id.replace("bita9a", ""));

        const booster = boosters.find((b) => b.id === id);

        if (booster) {
            const quantite = Number(
                e.querySelector(".quantite").textContent
            );

            somme += booster.price * quantite;
        }
    });

    document.querySelector("#total").textContent = somme;
}


const vider = document.querySelector("#vider");

vider.addEventListener("click", () => {
    afiche_panyier.innerHTML = "";
    total();
});


const valider = document.querySelector("#valider");
valider.addEventListener("click", () => {
    const articles = afiche_panyier.querySelectorAll(".boosterpanyer");
    if (articles.length === 0) {
        alert("votre panier est vide ");
    } else {
        alert("Commande valide ");
        afiche_panyier.innerHTML = "";

    }
});