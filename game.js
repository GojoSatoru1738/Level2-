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

    player1.drawRect();
}