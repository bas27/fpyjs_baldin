const clickerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

var timeClick = document.getElementById('clicker__time');
var lastClicked = 0;

img.onmousedown = () => {
    img.width = Number(img.width) + 20;
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    var timeNow =  (new Date()).getTime();
    timeClick.textContent = (1/((timeNow - lastClicked)/1000)).toFixed(2);
    lastClicked = timeNow;
}

img.onmouseup = () => {
        img.width = Number(img.width) - 20;
    }


