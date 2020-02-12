var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    ctx.fillStyle = rndCol;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}

function random(number){
    return Math.floor(Math.random() * (number + 1))
}

document.addEventListener('keypress', handleKey);
document.addEventListener('mousemove', handleMouse);

function handleMouse(e) {
    e = e || window.event;
    if (e.pageY > 30 && e.pageY < (canvas.height - 30)) {
        y = e.pageY;
    }
    if (e.pageX > 30 && e.pageX < (canvas.width - 30)) {
        x = e.pageX;
    }
    // console.log("mousex: " + e.pageX + " mousey: " + e.pageY);
    drawCircle(x, y, size);
}

function handleKey(e) {

    const keyPressed = e.key
    switch (keyPressed) {
        case 'w':
            if (y > 30) {
                y--;
            }
            break;
        case 'a':
            if (x > 30) {
                x--;
            }
            break;
        case 's':
            if (y < (canvas.height - 30)) {
                y++;
            }
            break;
        case 'd':
            if (x < (canvas.width - 30)) {
                x++;
            }
            break;
    }
    drawCircle(x, y, size);
    console.log('x: ' + x + ' y: ' + y);

}

var x = 50;
var y = 50;
const size = 25;

drawCircle(x, y, size);

window.onload = function () {
    setCanvasSize();
};

function setCanvasSize() {
    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    let width = Math.max(body.scrollWidth, body.offsetWidth, 
        html.clientWidth, html.scrollWidth, html.offsetWidth);

    canvas.height = height - 10;
    canvas.width = width - 10;

}