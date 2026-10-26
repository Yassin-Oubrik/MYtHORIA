let monbooster = JSON.parse(localStorage.getItem('bos')) || []
const afficher_opening = document.getElementById('opening')
for (const element of monbooster) {
    //information de booster pour afficher les info
    const info_booster = boosters.find(e => e.id === element.id)
    //pour ajouter quantite a la place de card
    const article = document.querySelectorAll('#opening div')
    let res = false
    for (const e of article) {
        if (e.id == element.id) {
            e.querySelector('#Qty').textContent = Number(e.querySelector('#Qty').textContent) + element.quantite
            res = true
        }
    }
    // si aucun article respect la condition ajouter nevaux
    if (res == false) {
        afficher_opening.insertAdjacentHTML('beforeend', `
        <div id="${info_booster.id}" class="rounded-lg bg-[#241A35] p-4">
            <img src="${info_booster.image}" alt="${info_booster.name}"
                class="mb-4 h-48 w-full rounded-md object-cover">
            <p class="mb-3 font-bold text-[#C8A96B]">
                ${info_booster.name}
            </p>
            <p class="mb-3 text-sm text-gray-300">
                Qty: <span id="Qty">${element.quantite}</span>
            </p>
            <button id="btn_open"
                class="w-full rounded-md bg-[#8B6BB8] px-4 py-2 text-white hover:bg-[#72519F]">
                Open
            </button>
        </div>
    `)

    }
}
//message aucun
if (afficher_opening.children.length === 0) {
    document.getElementById('message').style.display = 'block'
} else {
    document.getElementById('message').style.display = 'none'
}


// Animation //moin 
const animation = document.getElementById('animation')
const btn = document.querySelectorAll('#btn_open')
for (const element of btn) {
element.addEventListener('click', () => {
    const article = element.parentElement
    const trouve = monbooster.find(e => e.id === Number(article.id))
    if (!trouve || trouve.quantite <= 0) return
    trouve.quantite--
    article.querySelector('#Qty').textContent=trouve.quantite
    if (trouve.quantite === 0) {
        monbooster =monbooster.filter(e=>e.id !== trouve.id)
        article.remove()
    }
    localStorage.setItem('bos',JSON.stringify(monbooster))
        animation.style.display = 'block'
        document.getElementById('result').innerHTML=''
        setTimeout(() => {
            animation.style.display = 'none'
            afficher_card()
        }, 3000)
    })
}

//local des card
  const moncard = JSON.parse(localStorage.getItem('card')) || []
  function saveCard(){
     localStorage.setItem('card',JSON.stringify(moncard))
  }
//affichage des card
function afficher_card() {
    const result = document.getElementById('result')
    const random_card=[]
    for (let i = 0; i < 5; i++) {
        const id = Math.floor(Math.random() * 20)+1
        random_card.push(id)
    }
    for (const element of random_card) {
            const trouve = card_opening.find(e=>e.id === element)
            moncard.push(trouve)
            result.insertAdjacentHTML("beforeend",`
                <div id='${trouve.id}' class="rounded-lg bg-[#241A35] p-3 text-center">
                <img src="${trouve.image}" class="mb-3 h-48 w-full rounded-md object-cover">
                <p class="font-bold text-[#C8A96B]">${trouve.rarity}</p>
                </div>
                `)

        }
        localStorage.setItem('card',JSON.stringify(moncard))

}
//   localStorage.removeItem('bos');
//   localStorage.removeItem('card');
// localStorage.clear()
