import { player } from "./state.js";
import { role } from "./opponent.js";
import { startGame } from "./main.js";
//  Dialog et pseudo
export function psedou() {
    const dialog = document.getElementById('dialog');
    const form = document.getElementById('form');
    const btn_start = document.getElementById('start')
    btn_start.addEventListener('click', () => {
        if (!player.start) {
            dialog.showModal();
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name =document.getElementById('player_name').value.trim()
        player.start = true;
        affiche_psedou(name)
        dialog.close()
        role()
        startGame();
    });
}



// afficher psodo
export function affiche_psedou(monNom) {
    const psedo = document.getElementById('psedo')
    psedo.innerHTML = monNom
}
