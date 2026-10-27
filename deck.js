let moncolluction = JSON.parse(localStorage.getItem('col')) || []
const moncard = JSON.parse(localStorage.getItem('card')) || []
const deck = document.getElementById('deck')
console.log('col:', moncolluction)
console.log('card:', moncard)
console.log('deck:', deck)
for (const element of moncolluction) {
    const trouve = moncard.find(e=> e.id === Number(element))
    if (trouve) {
       deck.innerHTML += `
    <article id="${trouve.id}">
            <img src="${trouve.image}" alt="${trouve.name}">
            <h3 class='text-center'>${trouve.name}</h3>
            <p class='text-center'>${trouve.rarity}</p>
            <button id="remove" >Remove</button>
    </article>
    ` 
    } 
}


let power_total = 0
let common_total = 0
let legendary_total = 0
for (const element of moncolluction) {
        const trouve = moncard.find(e => e.id === Number(element))
       if (trouve) {
        power_total+=Number(trouve.power)
        if (trouve.rarity == 'Common') {
            common_total++
        }
        if (trouve.rarity == 'Legendary') {
            legendary_total++
        }
       }
}

document.getElementById('power_total').textContent=power_total
document.getElementById('common_total').textContent=common_total
document.getElementById('legendary_total').textContent=legendary_total


//remove
function remove() {
   const btn_remove= document.querySelectorAll('#remove')
   for (const element of btn_remove ) {
    element.addEventListener('click' ,(e)=>{
        e.target.parentElement.remove()
        moncolluction = moncolluction.filter(a=>a != e.target.parentElement.id )
        localStorage.setItem('col', JSON.stringify(moncolluction))
    })
   }
}
remove()