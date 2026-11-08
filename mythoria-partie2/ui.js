import { player } from "./state.js";
import { role} from "./opponent.js"
import { startGame } from "./main.js";
// import { card_opening } from "../mythoria-partie1/data.js";
//  Dialog et pseudo
export function psedou() {
    const dialog = document.getElementById('dialog');
    const form = document.getElementById('form');
    const btn_start = document.getElementById('start')
    // let monNom = localStorage.getItem('psod');
    // player.start = localStorage.getItem('gamestarted') === 'true';
    btn_start.addEventListener('click', () => {
        if (!player.start) {
            dialog.showModal();
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // const name = document.getElementById('player_name').value.trim();
        const name =document.getElementById('player_name').value.trim();
        // monNom = name
        // localStorage.setItem('psod', name)
        player.start = true;
        // localStorage.setItem('gamestarted', 'true');
        affiche_psedou(name);
        dialog.close();
        role()
        startGame();
    });
}



// psedou()
// afficher psodo
export function affiche_psedou(monNom) {
    const psedo = document.getElementById('psedo')
    // let monNom = localStorage.getItem("psod");
    psedo.innerHTML = monNom
}
//pour afficher apre refrech
// affiche_psedou()
// role
// export function role_refresh() {
//     player.start = localStorage.getItem("gamestarted") === "true";
//     if (player.start) {
//         afficherole()
//     }
// }


// localStorage.clear()