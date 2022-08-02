const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const arr = document.getElementsByClassName('hole')

const getHole = (index) => document.getElementById(`hole${index}`);

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}

function myAlert(event) {
  if (event == dead) {
    alert("Победа!");
  }
  if (event == lost) {
    alert("Вы проиграли");
  }
}

for (let index = 1; index < arr.length + 1; index++) {
  let hole = getHole(index);

  hole.addEventListener("click", () => {
    hole.className.includes("hole_has-mole") ? dead.textContent++ : lost.textContent++;

    if (dead.textContent == 10) {
      myAlert(dead);
      reset();
    }

    if (lost.textContent == 5) {
      myAlert(lost);
      reset();
    }
  });
}
