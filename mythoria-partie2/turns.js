import { combat } from "./combat.js";
import { game } from "./state.js";
export let tab = [];
export async function boot() {
    const card = await fetch('./cards.json')
        .then(res => res.json());
    const attack = document.querySelector('#card_boot_attack article')
    const defense = document.querySelector('#card_boot_defense article')
    const btn_attack = document.getElementById('attack');
    const btn_defense = document.getElementById('defense');
    const turn = document.getElementById('turn')
    turn.addEventListener('click', () => {
        if (game.turn !== 'boot') {
            return
        }
        turn.disabled = true
        setTimeout(async () => {
            let trouve

            do {
                const random = Math.floor(Math.random() * card.length)
                trouve = card[random]
            } while (tab.includes(trouve.id));

            const choix = Math.random()
            let place = false

            if (choix >= 0.5) {

                if (attack.children.length == 0) {
                    attack.innerHTML = `
            <img src="${trouve.image}" alt="${trouve.name}" data-id="${trouve.id}" class="w-full h-full ">
            `
                    place = true
                }

            } else {

                if (defense.children.length == 0) {
                    defense.innerHTML = `
            <img src="${trouve.image}" alt="${trouve.name}" data-id="${trouve.id}" class="w-full h-full ">
            `
                    place = true

                }

            }
            if (place) {
                tab.push(trouve.id);
                await combat()
                game.turn = 'player'
                btn_attack.disabled = false
                btn_defense.disabled = false
            }
            turn.disabled = false;

        }, 1000)

    })

}