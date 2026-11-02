import { player } from "./state.js";
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');
const  btn_start = document.getElementById('start')
let monNom = localStorage.getItem('psod')||'';
export function psedou() {
    btn_start.addEventListener('click', () => {
    dialog.showModal();
});
//event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('player_name').value.trim();
    monNom=name
    localStorage.setItem('psod',monNom)
    player.start=true;
    affiche_psedou();
    dialog.close();
});
}
psedou()
// localStorage
export function affiche_psedou() {
    const psedo = document.getElementById('psedo')
    psedo.innerHTML=monNom
}
//pour afficher apre refrech
affiche_psedou()
