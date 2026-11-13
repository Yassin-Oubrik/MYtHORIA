import { psedou } from "./ui.js";
import { game } from "./state.js";
import { affichage_card, selectcart } from "./cards.js";
import { boot, tab } from "./turns.js";
import { reset } from './combat.js';
// import { combat } from "./combat.js";
// let initial = false;
export function startGame() {
    // if (initial) return;
    //  initial = true;
    affichage_card()
    selectcart()
    boot()
}

export function newgame (){
    reset()
    //pour iniitialiser les card de boot ajoute sur turn
    tab.length = 0
    game.start = false
    document.getElementById('psedo').textContent = ''
    document.getElementById('role_player').textContent = ''
    document.getElementById('role_boot').textContent = ''
}
//initial
reset();
tab.length = 0;
game.start = false;
// affiche_psedou()
// photo_boot()
// photo_hp()
psedou()

document.getElementById('new_game').addEventListener('click', newgame);