import { player, boot } from "./state.js";
import { photo_hp , photo_boot  } from "./cards.js";
export function role() {

    // player.role = localStorage.getItem('playerrole');
    // boot.role = localStorage.getItem('bootrole');

    if (!player.role || !boot.role) {

        const random = (Math.random() *10)+1;

        if (random >= 5) {
            player.role = 'lumier';
            boot.role = 'depenere';
        } else {
            player.role = 'depenere';
            boot.role = 'lumier';
        }

        // localStorage.setItem('playerrole', player.role);
        // localStorage.setItem('bootrole', boot.role);
    }

    document.getElementById('role_player').textContent = player.role;
    document.getElementById('role_boot').textContent = boot.role;
    //div affichage
    const role_dialog = document.getElementById('role_dialog');
    //dialoge
    const dialog = document.getElementById('dialog1');
    role_dialog.textContent = player.role;
    dialog.showModal();
    setTimeout(() => {
        dialog.close();
        role_dialog.innerHTML ='';
        photo_hp()
        photo_boot()
    }, 3000);
}
//les role apre refresh
// export function afficherole() {
//     // player.role = localStorage.getItem('playerrole');
//     // boot.role = localStorage.getItem('bootrole');
//     if (player.role && boot.role) {
//         document.getElementById('role_player').textContent = player.role;
//         document.getElementById('role_boot').textContent = boot.role;
//     }
// }

