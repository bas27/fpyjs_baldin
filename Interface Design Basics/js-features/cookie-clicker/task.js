const clickerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

let timeClick = document.getElementById('clicker__time');
let lastClicked = 0;

img.onmousedown = () => {
    img.width = Number(img.width) + 20;
    clickerCounter.textContent++
    var timeNow =  (new Date()).getTime();
    timeClick.textContent = (1/((timeNow - lastClicked)/1000)).toFixed(2);
    lastClicked = timeNow;
}

img.onmouseup = () => {
        img.width = Number(img.width) - 20;
    }

//второй вариант
// img.onclick = () => {
//     img.width = ++clickerCounter.textContent % 2 ? 250 : 200;
//     ...
// }