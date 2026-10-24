
const shopBoosters = document.querySelector("#shop-boosters");

boosters.forEach((b) => {
    shopBoosters.innerHTML += `
        <article id="${b.id}">
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <p>${b.description}</p>
            <p>Price: ${b.price} DH</p>
            <p>Number of cards: ${b.nombreCartes}</p>
            <p>Categories: ${b.categories.join(", ")}</p>
            <button class="add-cart">Add to Cart</button>
        </article>
    `;
});


const panier_menu = document.getElementById('panier-menu')
const panier = document.getElementById('panier')
panier_menu.addEventListener('click', () => {
    panier.style.display = 'flex'
})


const x = document.getElementById('x')
x.addEventListener('click', () => {
    panier.style.display = 'none'
})

const btn = document.querySelectorAll('.add-cart')
let inc = 0
const affichage_panier = document.querySelector('#affichage_panier')
for (const element of btn) {
    element.addEventListener('click', () => {
        const id = element.parentElement.id
        const trouve = boosters.find(e => e.id == id)
if (!repet(id)) {
            const span = document.querySelector('#panier-menu a  span')
            span.innerHTML = `(${inc = inc + 1})`
            affichage_panier.insertAdjacentHTML('afterbegin', `
<div class='article_panier' id="${trouve.id}" style="display:flex; align-items:center; gap:15px; padding:10px">
    <img src="${trouve.image}" style="width:60px; height:90px; border-radius:6px;">
    <div class="element_create" style="flex:1; font-size:14px;">
        <p class="name" style="margin:3px ;">${trouve.name}</p>
        <p class="number" style="margin:3px ;"> cards${trouve.nombreCartes} </p>
        <p class="price" style="margin:3px ; color:#8B6BB8;">${trouve.price} DH</p>
        <div style="display:flex; align-items:center; gap:12px; margin-top:6px;">
            <span class="moin" style="cursor:pointer;">-</span>
            <span class='quantite'>${1}</span>
            <span class="plus" style="cursor:pointer;">+</span>
        </div>
    </div>
    <button class="btn_remove" style=" cursor:pointer;">x</button>
</div>
        `)
            panier.style.display = 'flex'
        } 
    })
}
// btnRemove
affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_remove')) {
        e.target.parentElement.remove();
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc - Number(e.target.parentElement.querySelector('.quantite').textContent)})`
        if (affichage_panier.children.length === 0) {
            panier.style.display = 'none'
        }
    }
});

affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
        e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1;
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc + 1})`
    }
});

affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('moin')) {
        e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1;
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc - 1})`
        removequantite()
        if (affichage_panier.children.length === 0) {
            panier.style.display = 'none'
        }
    }
});
function removequantite() {
    const quant = document.querySelectorAll('.quantite');
    for (const element of quant) {
        if (element.textContent == 0) {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

// repetitation

function repet(p) {
    const repet = affichage_panier.querySelectorAll('.article_panier');
    for (const element of repet) {
            if (element.id === p) {
                alert('cet element existe sure le panier');
                return true;
            }
    }

}