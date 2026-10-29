// pour afficher tous les card a travers data
const shopBoosters = document.querySelector("#shop-boosters");
boosters.forEach((b) => {
    shopBoosters.innerHTML += `
        <article id="${b.id}">
            <img src="${b.image}" alt="${b.name}">
            <h3>${b.name}</h3>
            <p>${b.description}</p>
            <p>Price: ${b.price} DH</p>
            <p>Number of cards: ${b.nombreCartes}</p>
            <p>Categories: ${b.categories.join(",")}</p>
            <button class="add-cart">Add to Cart</button>
        </article>
    `;
});
// pour afficher panier
const panier_menu = document.getElementById('panier-menu')
const panier = document.getElementById('panier')
panier_menu.addEventListener('click', () => {
    panier.style.display = 'flex'
})

// pour cacher panier
const x = document.getElementById('x')
x.addEventListener('click', () => {
    panier.style.display = 'none'

})
// click sur btn add (event et increment)
const btn = document.querySelectorAll('.add-cart')
let inc = 0
const affichage_panier = document.querySelector('#affichage_panier')
//local 
let monpanier = JSON.parse(localStorage.getItem('pan')) || [];
function sauvegarder() {
    localStorage.setItem('pan', JSON.stringify(monpanier));
}

for (const element of btn) {
    element.addEventListener('click', () => {
        const id = element.parentElement.id
        const trouve = boosters.find(e => e.id == id)
        if (!repet(id)) {
            const span = document.querySelector('#panier-menu a  span')
            span.innerHTML = `(${inc = inc + 1})`
            // local
            monpanier.push({
                id: trouve.id,
                quantite: 1
            });
            sauvegarder();
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
            document.getElementById('text_aucun').style.display = 'none'
            total()

        }
    })
}
// btnRemove
affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_remove')) {
        e.target.parentElement.remove();
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc - Number(e.target.parentElement.querySelector('.quantite').textContent)})`
        paniervide()
        total()
        // local
        monpanier = monpanier.filter(
            p => p.id != e.target.parentElement.id
        );
        sauvegarder();
    }
});
// si les article de panier == 0 et cache total
function paniervide() {
    if (affichage_panier.children.length === 0) {
        panier.style.display = 'none'
        document.getElementById('affichage_total').style.display = 'none'
        document.getElementById('remove_all').style.display = 'none'
        document.getElementById('text_aucun').style.display = 'block'
        return true
    }
}
// plus et incrementer 
affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
        e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1;
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc + 1})`
        total()
        //local
        const article = e.target.closest('.article_panier');
        const produit = monpanier.find(p => p.id == article.id);
        produit.quantite = Number(
            article.querySelector('.quantite').textContent
        );
        sauvegarder();
    }
});
// moin et decreme,ter
affichage_panier.addEventListener('click', (e) => {
    if (e.target.classList.contains('moin')) {
        e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1;
        const span = document.querySelector('#panier-menu a  span')
        span.innerHTML = `(${inc = inc - 1})`

        // local
        const article = e.target.closest('.article_panier');
        const produit = monpanier.find(p => p.id == article.id);
        const quantite = Number(
            article.querySelector('.quantite').textContent
        );
        if (quantite === 0) {
            monpanier = monpanier.filter(p => p.id != article.id);
        } else {
            produit.quantite = quantite;
        }
        removequantite()
        paniervide()
        total()
        sauvegarder();
    }
});
//remove si quantite ===0
function removequantite() {
    const quant = document.querySelectorAll('.quantite');
    for (const element of quant) {
        if (element.textContent == 0) {
            element.closest('.article_panier').remove();
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
//afficher total
for (const element of btn) {
    element.addEventListener('click', () => {
        if (!document.getElementById('total_p')) {
            document.querySelector('#affichage_total').insertAdjacentHTML('beforeend', `
                  <p id='total_p' style='font-weight: bold;font-size: 15px; color:#C8A96B'>
                  total:
                  <span id="total_number" style='margin-left:5px;color:#8B6BB8 ; font-size:12px'>0</span>
                  </p>
                   <button id="acheter" style="padding:0px 10px; border:1px solid #C3B8D2; border-radius:25px;background-color:#C8A96B;color:black">acheter</button>`)
                  document.querySelector('#affichage_total').insertAdjacentHTML('afterend', `
                <button id='remove_all' style='cursor:pointer  ; margin-top:8px'>supprimer tous les article</button>
                `)
            removeAll()
            acheter()
            total()
        }
        document.querySelector('#affichage_total').style.display = 'flex'
        document.getElementById('remove_all').style.display = 'block'
    })
}

//remove all
function removeAll() {
    const remove_all = document.getElementById('remove_all')
    remove_all.addEventListener('click', (e) => {
        const affichage_panier = panier.querySelector('#affichage_panier')
        affichage_panier.innerHTML = ''
        panier.style.display = 'none'
        document.getElementById('text_aucun').style.display = 'block'
        e.target.style.display = 'none'
        document.querySelector('#affichage_total').style.display = 'none';
        const span = document.querySelector('#panier-menu a  span')
        inc = 0
        span.textContent = inc
        document.querySelector('#total_number').textContent = 0;
        // local
        monpanier = [];
        sauvegarder();
    })
}
// local opening
let monbooster = JSON.parse(localStorage.getItem('bos')) || []
//valider
function acheter() {
    const achete = document.getElementById('acheter')
    achete.addEventListener('click', () => {
        if (confirm("Voulez-vous confirmer?")) {
            alert("Commande valide ")
            monbooster = [...monbooster,...monpanier]
            savebos()
            document.getElementById('remove_all').click()
            sauvegarder();
        }
    })
}
//total
function total() {
    const article_panier = document.querySelectorAll('.article_panier')
    let total = 0
    for (const element of article_panier) {
        const boos = boosters.find(e => e.id == element.id)
        total = total + (boos.price * Number(element.querySelector('.quantite').textContent))
    }
    document.querySelector('#total_number').textContent = total
}
//affiche local
function reafficher() {
    inc = 0;
    for (const element of monpanier) {
        const trouve = boosters.find(e => e.id == element.id)
       if (trouve) {
        affichage_panier.insertAdjacentHTML('afterbegin', `
<div class='article_panier' id="${trouve.id}" style="display:flex; align-items:center; gap:15px; padding:10px">
    <img src="${trouve.image}" style="width:60px; height:90px; border-radius:6px;">
    <div class="element_create" style="flex:1; font-size:14px;">
        <p class="name" style="margin:3px ;">${trouve.name}</p>
        <p class="number" style="margin:3px ;"> cards${trouve.nombreCartes} </p>
        <p class="price" style="margin:3px ; color:#8B6BB8;">${trouve.price} DH</p>
        <div style="display:flex; align-items:center; gap:12px; margin-top:6px;">
            <span class="moin" style="cursor:pointer;">-</span>
            <span class='quantite'>${element.quantite}</span>
            <span class="plus" style="cursor:pointer;">+</span>
        </div>
    </div>
    <button class="btn_remove" style=" cursor:pointer;">x</button>
</div>
        `)
        inc = inc + element.quantite
        const span = document.querySelector('#panier-menu a span');
        span.textContent = `(${inc})`;
        if (!document.getElementById('total_p')) {
            document.querySelector('#affichage_total').insertAdjacentHTML('beforeend', `
                  <p id='total_p' style='font-weight: bold;font-size: 15px; color:#C8A96B'>
                  total:
                  <span id="total_number" style='margin-left:5px;color:#8B6BB8 ; font-size:12px'>0</span>
                  </p>
                   <button id="acheter" style="padding:0px 10px; border:1px solid #C3B8D2; border-radius:25px;background-color:#C8A96B;color:black">acheter</button>`)
            document.querySelector('#affichage_total').insertAdjacentHTML('afterend', `
                <button id='remove_all' style='cursor:pointer  ; margin-top:8px'>supprimer tous les article</button>
                `);

            removeAll();
            acheter();
        
    }}}
    if (monpanier.length > 0) {
        panier.style.display = 'flex';
        document.getElementById('text_aucun').style.display = 'none';
        document.getElementById('affichage_total').style.display = 'flex';
        document.getElementById('remove_all').style.display = 'block';
        total();
    }

}

reafficher();

// localopening
function savebos() {
    localStorage.setItem('bos', JSON.stringify(monbooster))
}
//   localStorage.removeItem('pan');
