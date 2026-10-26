const categorie = document.querySelector(' #categories #cards');
const booster = document.querySelector('#boosters .cards');
const legend = document.querySelector('#legend .cards');
categories.forEach((c) => {
    categorie.innerHTML += `
        <article>
            <img src="${c.image}" alt="${c.name}">
            <h3>${c.name}</h3>
            <p>${c.description}</p> 
        </article>
    `;
});
boosters.forEach((c)=>{
    booster.innerHTML+=`
    <article>
    <img  src='${c.image}' alt='${c.name}'>
     <h3>${c.name}</h3>
     <p>Price:${c.price} DH</p>
     <a href="shop.html">discover pack</a>
     </article>
 `
})
cards.forEach((c)=>{
     legend.innerHTML+=`
        <article>
            <img src="${c.image}" alt="${c.name}">
            <h3>${c.name}</h3>
            <p>${c.description}</p>
            <p>Type: ${c.type}</p>
            <p>Rarity: ${c.rarity}</p>
            <p>Power: ${c.power}</p>
        </article>
     `
})



