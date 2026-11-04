export async function boot() {
    const card = await fetch('./cards.json')
        .then(res => res.json());
    const attack = document.querySelectorAll('#card_boot_attack article')
    const defense = document.querySelectorAll('#card_boot_defense article')
    const turn = document.getElementById('turn')
    turn.addEventListener('click', () => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * card.length)
            const trouve = card[random]
            const choix = Math.random()
            if (choix >= 0.5) {
                for (const element of attack) {
                    if (element.children.length == 0) {
                        element.innerHTML = `
            <img src="${trouve.image}" class="w-full h-full ">
            `
                        break
                    }
                }
            } else {
                for (const element of defense) {
                    if (element.children.length == 0) {
                        element.innerHTML = `
            <img src="${trouve.image}" class="w-full h-full ">
            `
                        break
                    }
                }
            }
        }, 2000)

    })


}