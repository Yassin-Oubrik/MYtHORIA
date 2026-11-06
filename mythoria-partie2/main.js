    import { psedou , role_refresh ,affiche_psedou} from "./ui.js";
    import { player } from "./state.js";
    import { affichage_card,selectcart,photo_hp,photo_boot} from "./cards.js";
    import { boot } from "./turns.js";
    // import { combat } from "./combat.js";
    affiche_psedou()
    role_refresh()
    photo_boot()
    photo_hp()
   let gameInitialized = false;
    export function startGame()  {
        if (gameInitialized) return;
        gameInitialized = true;
        affichage_card()
        // photo_hp()
        selectcart()
        boot()
        // combat()
    }
  psedou()
if (player.start === true) {
    startGame();
}
