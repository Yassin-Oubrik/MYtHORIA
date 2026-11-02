// import { start } from "./state";
// let moncolluction = JSON.parse(localStorage.getItem('col')) || []
// const add = document.getElementById('add')
// const affichage_add =document.querySelectorAll('#affichage_add article')
// function btn_add() {
//     let cartcolluction =[...moncolluction]
//     if (start) {
//         add.addEventListener('click',()=>{ 
//         for (const element of cartcolluction) {     
//           for (const el of affichage_add) {
//             if (el.children.length === 0) {
//                 const trouve =card_opening.find(e=>e.id ==element)
//                 el.insertAdjacentHTML('beforeend',`
//                     <img class='w-full h-full' src='${trouve.image}' alt='${trouve.name}'>
//                     `)
//                 cartcolluction=cartcolluction.filter(e=>e!= element)
//             }
//           }
//         }})
//     }
// }