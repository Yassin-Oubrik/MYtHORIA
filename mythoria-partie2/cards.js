// affichage des carte
let card_opening = []
export async function affichage_card() {
    card_opening = await fetch('./cards.json')
        .then(res => res.json());

    let moncolluction = JSON.parse(localStorage.getItem('col')) || []
    let arena = JSON.parse(localStorage.getItem('arena')) || [];
    const article_player = document.querySelectorAll('#affichage_card article')
    const add = document.getElementById('add')
    add.addEventListener('click', () => {
        for (const element of article_player) {
            if (element.children.length === 0 && moncolluction.length > 0) {
                const id = moncolluction.shift()
                localStorage.setItem('col', JSON.stringify(moncolluction))
                const trouve = card_opening.find(e => e.id === Number(id))
                arena.push(id)
                localStorage.setItem('arena', JSON.stringify(arena));
                //moncolluction=moncolluction.filter(e=>e.id =! Number(el))
                // moncolluction.shift()
                element.innerHTML= `
                <img src="${trouve.image}" alt="${trouve.name}" >
                `
                break;

            }
        }
    })
    //reafficher et stocker
    let index = 0
    for (const element of article_player) {
        const id = arena[index];
        const trouve = card_opening.find(e => e.id === Number(id))
        if (trouve) {
            element.insertAdjacentHTML('afterbegin', `
                <img src="${trouve.image}" alt="${trouve.name}" >
            `);
        }
        index++
    }
}

//affchage des cart avant hp
 export function photo_hp() {
    const photo_hp = document.querySelectorAll('#photo_hp')
    const cardboot = document.querySelectorAll('#cardboot article')
    for (const element of photo_hp) {
        element.innerHTML=`<img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full ">
        `
    }
    for (const element of cardboot) {
        element.innerHTML=`<img src="../mythoria-partie1/images/back1.jpg" class="w-full h-full ">
        `
    }
}


//selectcart
let img= null;
let oldArticle = null
export function selectcart() {
    const article_player = document.querySelectorAll('#affichage_card article')
    for (const element of article_player) {
        element.addEventListener('click',()=>{
            for (const el of article_player) {
                el.style.borderColor = '';        
             }
            element.style.borderColor = 'orange';
            img = element.children[0]
            oldArticle = element;

        })
    }
        
        const attack = document.getElementById('attack')
        const defense = document.getElementById('defense')
        attack.addEventListener('click',()=>{
            if (img) {
            const cart_attack =document.querySelectorAll('#card_jouer_attack article')
            for (const e of cart_attack) {
                if (e.children.length === 0) {
                    e.appendChild(img)
                    oldArticle.style.borderColor = '';
                    img = null
                    oldArticle=null
                     break
                }
            }}
        })
        defense.addEventListener('click',()=>{
            if (img) {
             const cart_defense =document.querySelectorAll('#card_jouer_defense article')
            for (const e of cart_defense) {
                if (e.children.length === 0) {
                    e.appendChild(img)
                    oldArticle.style.borderColor = '';
                    img=null
                    oldArticle=null
                     break

                }
            }}
        })
    }
    



// selectcart()