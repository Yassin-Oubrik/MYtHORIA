
const shopBoosters = document.querySelector("#shop-boosters");

boosters.forEach((b) => {
    shopBoosters.innerHTML += `
        <article>
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <p>${b.description}</p>
            <p>Price: ${b.price} DH</p>
            <button class="add-cart">Add to Cart</button>
        </article>
    `;
});