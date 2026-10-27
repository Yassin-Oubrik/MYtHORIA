const moncolluction = JSON.parse(localStorage.getItem('col')) || []
const moncard = JSON.parse(localStorage.getItem('card')) || []
const deck = document.getElementById('deck')
for (const element of moncolluction) {
    const trouve = moncard.find(e=> e.id === Number(element))
        deck.innerHTML += `
    <article id="${trouve.id}">
            <img src="${trouve.image}" alt="${trouve.name}">
            <h3 class='text-center'>${trouve.name}</h3>
            <p class='text-center'>${trouve.rarity}</p>
    </article>
    `
}
