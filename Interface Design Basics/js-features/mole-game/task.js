const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(index) {
    document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
    if (getHole(i).onclick == 'hole hole_has-mole') {
        dead.textContent += 1;
    }
    else {
        lost.textContent += 1;
    }
}
