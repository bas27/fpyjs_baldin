const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

// function getHole(index) {
//     document.getElementById(`hole${index}`)
// }




// for (let i = 1; i < 10; i++) {
//     if (getHole(i).onclick == 'hole hole_has-mole') {
//         dead.textContent += 1;
//     }
//     else {
//         lost.textContent += 1;
//     }
// }


var hole1 = document.getElementById('hole1')

hole1.onclick = () => {
    if (hole1.className.includes('hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    }
    else {
        lost.textContent = Number(lost.textContent) + 1;
    }
}

function getHole() {
for (let index = 0; index < 10; index++) {
    if (document.getElementById(`hole${index}`).onclick == `hole${index}`) {
        return `hole${index}`
    }
}