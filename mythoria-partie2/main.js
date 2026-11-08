import { psedou } from "./ui.js";
import { player } from "./state.js";
import { affichage_card, selectcart, photo_hp, photo_boot } from "./cards.js";
import { boot, tab } from "./turns.js";
import { reset } from './combat.js';
// import { combat } from "./combat.js";

let gameInitialized = false;
export function startGame() {
    if (gameInitialized) return;
    gameInitialized = true;
    affichage_card()
    selectcart()
    boot()
}

export function newgame (){
    reset()
    tab.length = 0
    player.start = false
    document.getElementById('psedo').textContent = ''
    document.getElementById('role_player').textContent = ''
    document.getElementById('role_boot').textContent = ''
}
//initial
reset();
tab.length = 0;
player.start = false;
// affiche_psedou()
photo_boot()
photo_hp()
psedou()

document.getElementById('new_game').addEventListener('click', newgame);