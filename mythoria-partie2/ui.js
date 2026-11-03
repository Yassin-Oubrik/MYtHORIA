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
let card_opening =[]
export async function affichage_card() {
    async function getcard() {
        const response = await fetch('./cards.json');
        // if (!response.ok) {
        //     throw new Error("Erreur lors du chargement des cartes");
        // }
        card_opening = await response.json();
    }
    await getcard();
    let moncolluction = JSON.parse(localStorage.getItem('col')) || []
    const cart_player = document.querySelectorAll('#affichage_card article')
    const add = document.getElementById('add')
    add.addEventListener('click', () => {
        for (const element of cart_player) {
            if (element.children.length === 0 && moncolluction.length > 0) {
                    const id =moncolluction.shift()
                    const trouve = card_opening.find(e => e.id === Number(id))
                    //moncolluction=moncolluction.filter(e=>e.id =! Number(el))
                    // moncolluction.shift()
                    element.insertAdjacentHTML('afterbegin', `
                <img src="${trouve.image}" alt="${trouve.name}">
                `)
                    break;
           
            }
        }
    })
}

// 
