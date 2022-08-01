const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

var getHole = index => document.getElementById(`hole${index}`);


for (let index = 1; index < 10; index++) {
    let hole = getHole(index);
    hole.addEventListener('click', () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (Number(dead.textContent) == 10) {
                alert("Победа!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
        else {
            lost.textContent++;
            if (Number(lost.textContent) == 5) {
                alert("Вы проиграли");
                dead.textContent = 0;
                lost.textContent = 0;
            }

        }
    });
};