export async function combat() {
    const card = await fetch('./cards.json')
        .then(res => res.json())
    const attack_player = document.querySelectorAll('#card_jouer_attack article')
    const defense_player = document.querySelectorAll('#card_jouer_defense article')
    const attack_boot = document.querySelectorAll('#card_boot_attack article')
    const defense_boot = document.querySelectorAll('#card_boot_defense article')
    const damage_text = document.getElementById('damage_text')
    const dialog = document.getElementById('damage')
    const bg_boot = document.getElementById('bg_boot')
    const bg_player = document.getElementById('bg_player')
    const hp_boot = document.getElementById('hp_boot')
    const hp_player = document.getElementById('hp_player')
    let damage = 0
    for (let i = 0; i < attack_player.length; i++) {
        if (attack_player[i].children.length != 0 && defense_boot[i].children.length != 0) {
            const id_player = attack_player[i].querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = defense_boot[i].querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            if (trouve_player.attack - trouve_boot.power > 0) {
                damage = trouve_player.attack - trouve_boot.power
                damage_text.textContent = `boot - ${damage}`
                dialog.showModal()
                let hp = Number(hp_boot.textContent)
                //pour evite hp negative
                hp_boot.textContent = Math.max(0, hp - damage)
                let largeur = ((hp - Number(damage)) / 3000) * 100
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
        } else if (defense_player[i].children.length != 0 && attack_boot[i].children.length != 0) {
            const id_player = defense_player[i].querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = attack_boot[i].querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            if (trouve_boot.attack - trouve_player.power > 0) {
                damage = trouve_boot.attack - trouve_player.power
                damage_text.textContent = `player - ${damage}`
                dialog.showModal()
                let hp = Number(hp_player.textContent)
                //pour evite hp negative
                hp_player.textContent = Math.max(0, hp - damage)
                let largeur = ((hp - Number(damage)) / 3000) * 100
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
        } else if (attack_boot[i].children.length != 0 && attack_player[i].children.length != 0) {
            const id_player = attack_player[i].querySelector('img').dataset.id
            const trouve_player = card.find(e => e.id === Number(id_player))
            const id_boot = attack_boot[i].querySelector('img').dataset.id
            const trouve_boot = card.find(e => e.id === Number(id_boot))
            const damage_player = trouve_player.attack
            const damage_boot = trouve_boot.attack
            damage_text.textContent = `player - ${trouve_boot.attack} and boot - ${trouve_player.attack}`
            dialog.showModal()
            let hp_p = Number(hp_player.textContent)
            hp_player.textContent =  Math.max(0, hp_p - damage_boot)
            let largeur_p = ((hp_p - Number(damage_boot)) / 3000) * 100
            bg_player.style.width = `${largeur_p}%`
            let hp_b = Number(hp_boot.textContent)
            hp_boot.textContent = Math.max(0, hp_b - damage_player)
            let largeur_b = ((hp_b - Number(damage_player)) / 3000) * 100
            bg_boot.style.width = `${largeur_b}%`
            setTimeout(() => {
                dialog.close()
            }, 1500)
        }
    }
  hp()
}


export function hp() {
    const hp_boot = document.getElementById('hp_boot')
    const hp_player = document.getElementById('hp_player')
    const damage_text = document.getElementById('damage_text')
    const dialog = document.getElementById('damage')

    if (Number(hp_boot.textContent) <= 0) {
        damage_text.textContent = 'winner is player'
        dialog.showModal()
        setTimeout(() => {
            dialog.close()
        }, 3000)
    } else if (Number(hp_player.textContent) <= 0) {
        damage_text.textContent = 'winner is boot'
        dialog.showModal()
        setTimeout(() => {
            dialog.close()
        }, 2000)
    } else {
        return;
    }
}
// export function damage(at,def) {
//     return Math.max(0,(Number(at)-Number(def)))
// }
