import { psedou , role_refresh ,affiche_psedou} from "./ui.js";
import { player } from "./state.js";
import { affichage_card,photo_hp ,selectcart} from "./cards.js";
import { boot } from "./combat.js";
affiche_psedou()
role_refresh()
psedou()
if (player.start== true) {
    affichage_card()
    photo_hp()
    selectcart()
    boot()
}

