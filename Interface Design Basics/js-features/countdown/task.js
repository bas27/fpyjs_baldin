const timer = document.getElementById("timer")
var t = setInterval(start, 1000);

function start () {
    if (timer.textContent <= 0) {
        clearTimeout(t);
    }
    else {
        timer.textContent = Number(timer.textContent) - 1;
        if (timer.textContent == 0) {
            alert('Вы победили в конкурсе');
        }

    }
}
