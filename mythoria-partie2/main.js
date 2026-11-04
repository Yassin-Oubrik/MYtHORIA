import { psedou , role_refresh ,affiche_psedou,affichage_card ,photo_hp } from "./ui.js";
import { player } from "./state.js";
affiche_psedou()
role_refresh()
psedou()
if (player.start== true) {
    affichage_card()
    photo_hp()
}

