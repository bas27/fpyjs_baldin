const timer = document.getElementById("timer")

setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе');
    };
}, 1000)