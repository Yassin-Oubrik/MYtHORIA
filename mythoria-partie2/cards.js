import { game } from "./state.js";
// affichage des carte
let card_opening = []
export async function affichage_card() {
    card_opening = await fetch('./cards.json')
        .then(res => res.json());
    let moncolluction = JSON.parse(localStorage.getItem('col')) || []
    const colluction = [...moncolluction];
    const article_player = document.querySelectorAll('#affichage_card article')
    const add = document.getElementById('add')
    add.onclick=() => {
        for (const element of article_player) {
            if (element.children.length === 0 && colluction.length > 0) {
                const id = colluction.shift()
                const trouve = card_opening.find(e => e.id === Number(id))
                element.innerHTML = `
                <img src="${trouve.image}" alt="${trouve.name}" data-id="${trouve.id}">
                `
                break;
            }
        }
    }

}

//affchage des cart avant hp
export function photo_hp() {
    const photo_hp_boot = document.getElementById('photo_hp_boot')
    const photo_hp_player = document.getElementById('photo_hp_player')
    photo_hp_boot.innerHTML = `<img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full">`
    photo_hp_player.innerHTML = `<img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full">`
}
//les photo boot
export function photo_boot() {
    const cardboot = document.querySelectorAll('#cardboot article')
    for (const element of cardboot) {
        element.innerHTML = ` <img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full">`
    }
}


//selectcart
let img = null;
let oldArticle = null
export function selectcart() {
    const article_player = document.querySelectorAll('#affichage_card article')
    for (const element of article_player) {
        element.addEventListener('click', () => {
            if (game.turn !== 'player') {
                return
            }
            for (const el of article_player) {
                el.style.borderColor = '';
            }
            element.style.borderColor = 'orange';
            img = element.children[0]
            oldArticle = element

        })
    }

    const attack = document.getElementById('attack')
    const defense = document.getElementById('defense')
    attack.addEventListener('click', () => {
        document.querySelector('#card_jouer_attack article').innerHTML = '';
        document.querySelector('#card_jouer_defense article').innerHTML = '';
        document.querySelector('#card_boot_attack article').innerHTML = '';
        document.querySelector('#card_boot_defense article').innerHTML = '';
        if (img) {
            if (game.turn !== 'player') {
                return
            }
            const cart_attack = document.querySelector('#card_jouer_attack article')
       
                if (cart_attack.children.length === 0) {
                    cart_attack.appendChild(img)
                    game.turn = 'boot'
                    attack.disabled = true
                    defense.disabled = true
                    document.getElementById('turn').disabled = false;
                    oldArticle.style.borderColor = '';
                    img = null
                    oldArticle = null
                }
            
        }
    })
    defense.addEventListener('click', () => {
        document.querySelector('#card_jouer_attack article').innerHTML = ''
        document.querySelector('#card_jouer_defense article').innerHTML = ''
        document.querySelector('#card_boot_attack article').innerHTML = ''
        document.querySelector('#card_boot_defense article').innerHTML = ''
        if (img) {
            const cart_defense = document.querySelector('#card_jouer_defense article')
            
                if (cart_defense.children.length === 0) {
                    cart_defense.appendChild(img)
                    game.turn = 'boot'
                    attack.disabled = true
                    defense.disabled = true
                    document.getElementById('turn').disabled = false;
                    oldArticle.style.borderColor = '';
                    img = null
                    oldArticle = null
                }
            
        }
    })
}



