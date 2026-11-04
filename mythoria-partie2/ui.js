import { player } from "./state.js";
import { role, afficherole } from "./opponent.js"
// import { card_opening } from "../mythoria-partie1/data.js";
//  Dialog et pseudo
export function psedou() {
    const dialog = document.getElementById('dialog');
    const form = document.getElementById('form');
    const btn_start = document.getElementById('start')
    // let monNom = localStorage.getItem('psod');
    player.start = localStorage.getItem('gamestarted') === 'true';
    btn_start.addEventListener('click', () => {
        if (!player.start) {
            dialog.showModal();
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('player_name').value.trim();
        // monNom = name
        localStorage.setItem('psod', name)
        player.start = true;
        localStorage.setItem('gamestarted', 'true');
        affiche_psedou();
        dialog.close();
        role()
    });
}



// psedou()
// afficher psodo
export function affiche_psedou() {
    const psedo = document.getElementById('psedo')
    let monNom = localStorage.getItem("psod");
    psedo.innerHTML = monNom
}
//pour afficher apre refrech
// affiche_psedou()
// role
export function role_refresh() {
    player.start = localStorage.getItem("gamestarted") === "true";
    if (player.start) {
        afficherole();
    }
}


// // affichage des carte
let card_opening = []
export async function affichage_card() {
    card_opening = await fetch('./cards.json')
        .then(res => res.json());

    let moncolluction = JSON.parse(localStorage.getItem('col')) || []
    let arena = JSON.parse(localStorage.getItem('arena')) || [];
    const article_player = document.querySelectorAll('#affichage_card article')
    const add = document.getElementById('add')
    add.addEventListener('click', () => {
        for (const element of article_player) {
            if (element.children.length === 0 && moncolluction.length > 0) {
                const id = moncolluction.shift()
                localStorage.setItem('col', JSON.stringify(moncolluction))
                const trouve = card_opening.find(e => e.id === Number(id))
                arena.push(id)
                localStorage.setItem('arena', JSON.stringify(arena));
                //moncolluction=moncolluction.filter(e=>e.id =! Number(el))
                // moncolluction.shift()
                element.innerHTML= `
                <img src="${trouve.image}" alt="${trouve.name}" >
                `
                break;

            }
        }
    })
    //reafficher et stocker
    let index = 0
    for (const element of article_player) {
        const id = arena[index];
        const trouve = card_opening.find(e => e.id === Number(id))
        if (trouve) {
            element.insertAdjacentHTML('afterbegin', `
                <img src="${trouve.image}" alt="${trouve.name}" >
            `);
        }
        index++

    }
}

//affchage des cart avant hp
 export function photo_hp() {
    const photo_hp = document.querySelectorAll('#photo_hp')
    for (const element of photo_hp) {
        element.innerHTML=`<img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full ">
        `
    }
}
// localStorage.clear()