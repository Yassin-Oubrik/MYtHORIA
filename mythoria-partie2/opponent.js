import { player, boot } from "./state.js";
export function role() {

    player.role = localStorage.getItem('playerrole');
    boot.role = localStorage.getItem('bootrole');

    if (!player.role || !boot.role) {

        const random = (Math.random() *10)+1;

        if (random >= 5) {
            player.role = 'lumier';
            boot.role = 'depenere';
        } else {
            player.role = 'depenere';
            boot.role = 'lumier';
        }

        localStorage.setItem('playerrole', player.role);
        localStorage.setItem('bootrole', boot.role);
    }

    document.getElementById('role_player').textContent = player.role;
    document.getElementById('role_boot').textContent = boot.role;

    const role_dialog = document.getElementById('role_dialog');
    const dialog = document.getElementById('dialog1');

    role_dialog.textContent = player.role;
    dialog.showModal();

    setTimeout(() => {
        dialog.close();
        role_dialog.innerHTML ='';
        // affichage_card()
    }, 3000);
}
//les role apre refresh
export function afficherole() {
    player.role = localStorage.getItem('playerrole');
    boot.role = localStorage.getItem('bootrole');

    if (player.role && boot.role) {
        document.getElementById('role_player').textContent = player.role;
        document.getElementById('role_boot').textContent = boot.role;
    }
}
// lappele de function sur ui 
// localStorage.removeItem('playerrole');
// localStorage.removeItem('bootrole');
