const partie1 = document.getElementById('partie1')
const partie2 = document.getElementById('partie2')
const moncard = JSON.parse(localStorage.getItem('card')) || []
let moncolluction = JSON.parse(localStorage.getItem('col')) || []
function save() {
    localStorage.setItem('col',JSON.stringify(moncolluction))
}
function aficher(e) {
for (const element of e) {
    partie1.innerHTML += `
    <article id="${element.id}">
            <img src="${element.image}" alt="${element.name}">
            <h3 class='text-center'>${element.name}</h3>
            <p class='text-center'>${element.rarity}</p>
    </article>
    `
}}
aficher(moncard)


function grand_carte(){
const article = document.querySelectorAll('article')
for (const element of article) {
    element.addEventListener('click', () => {
        const trouve = moncard.find(e => e.id === Number(element.id))
        partie2.innerHTML = `

            <img src="${trouve.image}" alt="${trouve.name}" class="w-[80%]  max-h-[70%]  rounded-2xl ">
            <h3 class='text-center font-bold text-xl text-[#C8A96B]'>${trouve.name}</h3>
            <p class='text-center font-bold text-sm text-white'>${trouve.description}</p>
            <p class='text-center font-bold text-white'>Type: ${trouve.type}</p>
            <p class='text-center font-bold text-[#C8A96B]'>Rarity: ${trouve.rarity}</p>
            <p id="${trouve.id}" class='text-center font-bold text-[#8B6BB8]'>Power: ${trouve.power} <button id='btn_deck' class="text-[#C8A96B] ml-1 border border-[1px solid black] px-2 bg-[#8B6BB8] hover:bg-[#E9E2D4]">add</button></p>

            `
            add_btn()
    })
}}
grand_carte()

//filter 
let colluction=[]
function filter_type() {
    const option_type = document.querySelector('#filter_type')
    option_type.addEventListener('change', () => {
        colluction = moncard.filter(e =>  option_type.value === 'all' || e.type === option_type.value)
        partie1.innerHTML = ''
        if (colluction.length > 0) {
           aficher(colluction) 
        }
        grand_carte()
    }
    );
}
filter_type()

function filter_rarity() {
    const option_rarity = document.querySelector('#filter_rarity')
    option_rarity.addEventListener('change', () => {
        colluction = moncard.filter(e =>  option_rarity.value === 'all' || e.rarity === option_rarity.value)
        partie1.innerHTML = ''
        if (colluction.length > 0) {
           aficher(colluction) 
        }
        grand_carte()
    }
    );
}
filter_rarity()


function add_btn() {
    const btn_deck =partie2.querySelector('#btn_deck')
    btn_deck.addEventListener('click', ()=>{
        if (confirm('voulez vous choisir cette carte ?')) {
            const id=btn_deck.parentElement.id
            if (moncolluction.includes(id)) {
                alert('carte existe deja')
            } else if(moncolluction.length >=20) {
                alert('deck et complet')
            }else{
                alert('carte ajouter avec succes')
                moncolluction.push(id)
                save()
            }
            
        }
    })
}

