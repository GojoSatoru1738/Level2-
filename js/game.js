var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000/60;

var player1 = new GameObject();

player1.x = 25;
player1.y = canvas.height/2;

player1.width = 20;
player1.height = 100;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.move();

    if (player1.y < player1.height/2) {
    player1.y = player1.height/2;
}

if (player1.y > canvas.height - player1.height/2) {
    player1.y = canvas.height - player1.height/2;
}

    player1.drawRect();
}

document.addEventListener("keydown", keyDownHand);
document.addEventListener("keyup", keyUpHand);

function keyDownHand(e) {
    if (e.key == "w") {
        player1.vy = -5;
    }
    if (e.key == "s") {
        player1.vy = 5;
    }
}

function keyUpHand(e) {
    if (e.key == "w" || e.key == "s") {
        player1.vy = 0;
    }
}