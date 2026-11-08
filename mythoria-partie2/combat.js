import { player,boot,game } from "./state.js"
import { newgame } from "./main.js";
export async function combat() {
    if (player.stop || boot.stop) return
    const card = await fetch('./cards.json')
        .then(res => res.json())
    const attack_player = document.querySelector('#card_jouer_attack article')
    const defense_player = document.querySelector('#card_jouer_defense article')
    const attack_boot = document.querySelector('#card_boot_attack article')
    const defense_boot = document.querySelector('#card_boot_defense article')
    const damage_text = document.getElementById('damage_text')
    const dialog = document.getElementById('damage')
    const bg_boot = document.getElementById('bg_boot')
    const bg_player = document.getElementById('bg_player')
    const hp_boot = document.getElementById('hp_boot')
    const hp_player = document.getElementById('hp_player')
    let damage = 0
        if (attack_player.children.length != 0 && defense_boot.children.length != 0) {
            const id_player = attack_player.querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = defense_boot.querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            if (trouve_player.attack - trouve_boot.power > 0) {
                damage = trouve_player.attack - trouve_boot.power
                damage_text.textContent = `boot - ${damage}`
                dialog.showModal()
                let hp = Number(hp_boot.textContent)
                //pour evite hp negative
                hp_boot.textContent = Math.max(0, hp - damage)
                let largeur = (Number(hp_boot.textContent) / 1000) * 100
                bg_boot.style.width = `${largeur}%`
                setTimeout(() => {
                    dialog.close()
                }, 1500)

            } else {
                damage = 0
                damage_text.textContent = `aucun damage`
                dialog.showModal()
                setTimeout(() => {
                    dialog.close()
                }, 1000)
            }
            // attack_player.innerHTML = '';
            // defense_boot.innerHTML = '';
        } else if (defense_player.children.length != 0 && attack_boot.children.length != 0) {
            const id_player = defense_player.querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = attack_boot.querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            if (trouve_boot.attack - trouve_player.power > 0) {
                damage = trouve_boot.attack - trouve_player.power
                damage_text.textContent = `player - ${damage}`
                dialog.showModal()
                let hp = Number(hp_player.textContent)
                //pour evite hp negative
                hp_player.textContent = Math.max(0, hp - damage)
                let largeur = (Number(hp_player.textContent) / 1000) * 100
                bg_player.style.width = `${largeur}%`
                setTimeout(() => {
                    dialog.close()
                }, 1500)
            } else {
                damage = 0
                damage_text.textContent = `aucun damage`
                dialog.showModal()
                setTimeout(() => {
                    dialog.close()
                }, 1000)
            }
            //  defense_player.innerHTML = '';
            // attack_boot.innerHTML = '';
        } else if (attack_boot.children.length != 0 && attack_player.children.length != 0) {
            const id_player = attack_player.querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = attack_boot.querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            const damage_player = trouve_player.attack
            const damage_boot = trouve_boot.attack
            damage_text.textContent = `player - ${trouve_boot.attack} and boot - ${trouve_player.attack}`
            dialog.showModal()
            let hp_p = Number(hp_player.textContent)
            hp_player.textContent =  Math.max(0, hp_p - damage_boot)
            let largeur_p = (Number(hp_player.textContent) / 1000) * 100
            bg_player.style.width = `${largeur_p}%`
            let hp_b = Number(hp_boot.textContent)
            hp_boot.textContent = Math.max(0, hp_b - damage_player)
            let largeur_b = (Number(hp_boot.textContent) / 1000) * 100
            bg_boot.style.width = `${largeur_b}%`
            setTimeout(() => {
                dialog.close()
            }, 1500)
            // attack_player.innerHTML = '';
            // attack_boot.innerHTML = '';
        }else if (defense_player.children.length !== 0 &&  defense_boot.children.length !== 0) {
               damage = 0
                damage_text.textContent = 'aucun damage'
                dialog.showModal();
            setTimeout(() => {
                dialog.close()
            }, 1000)
    //     defense_player.innerHTML = '';
    //    defense_boot.innerHTML = '';
        }

    

  hp()
}


export function hp() {
    const hp_boot = document.getElementById('hp_boot')
    const hp_player = document.getElementById('hp_player')
    const damage_text = document.getElementById('damage_text')
    const dialog = document.getElementById('damage')

    if (Number(hp_boot.textContent) <= 0) {
        player.stop=true
        boot.stop=true
        damage_text.textContent = 'winner is player'
        dialog.showModal()
        newgame()
        setTimeout(() => {
            dialog.close()
        }, 3000)
    } else if (Number(hp_player.textContent) <= 0) {
        damage_text.textContent = 'winner is boot'
        player.stop=true
        boot.stop=true
        dialog.showModal()
        newgame()
        setTimeout(() => {
            dialog.close()
        }, 2000)
    } else {
        return;
    }
    document.getElementById('attack').disabled=true
    document.getElementById('defense').disabled=true
    document.getElementById('turn').disabled=true
    document.getElementById('add').disabled=true
}


//reset
export function reset() {
    //rest hp
    const hp_boot =document.getElementById('hp_boot')
    const hp_player =document.getElementById('hp_player')
     hp_boot.textContent = 1000;
     hp_player.textContent = 1000;
     document.getElementById('bg_boot').style.width='100%'
     document.getElementById('bg_player').style.width='100%'
     const selector =[ 
        '#card_jouer_attack article',
        '#card_jouer_defense article',
        '#card_boot_attack article',
        '#card_boot_defense article',
        '#affichage_card article',
        '#cardboot article'
     ]
     for (const element of selector) {
        document.querySelectorAll(element).forEach(e=>{
            e.innerHTML=''
        })  
     }
     //state
    player.stop = false;
    boot.stop = false;
    game.turn = 'player';
    //btn
    document.getElementById('attack').disabled = false;
    document.getElementById('defense').disabled = false;
    document.getElementById('turn').disabled = false;
    document.getElementById('add').disabled = false;
}
// export function damage(at,def) {
//     return Math.max(0,(Number(at)-Number(def)))
// }
