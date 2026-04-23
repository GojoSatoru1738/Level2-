var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000/60;

//BALL
var ball = new GameObject();

ball.x = canvas.width / 2;
ball.y = canvas.height / 2;
ball.vx = 4;
ball.vy = 4;
ball.width = 50;
ball.height = 50;
ball.color = "purple";

//PADDLE
var paddle = new GameObject();

paddle.x = 25;
paddle.y = canvas.height/2;

paddle.width = 5;
paddle.height = 100;

timer = setInterval(animate, interval);

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);


var w = false;
var s = false;

function press(e)
{
	
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
}

function release(e)
{
	
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
}

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.x += ball.vx;
    ball.y += ball.vy;
//ye
    if (ball.collidesWith(paddle)) {
        ball.vx = -ball.vx;

        // prevent sticking
        ball.x = paddle.right() + ball.width / 2;
    }
    
    if (ball.x > canvas.width) {
        ball.x = canvas.width;
        ball.x -= ball.width/2;
        ball.vx = -ball.vx;
    }

    
    if (ball.x < 0) {
        ball.x = 0;
        ball.x += ball.width/2;
        ball.vx = -ball.vx;
    }

    
    if (ball.y < 0) {
        ball.y = 0;
        ball.y += ball.height/2;
        ball.vy = -ball.vy;
    }

    
    if (ball.y > canvas.height) {
        ball.y = canvas.height;
        ball.y -= ball.height/2;
        ball.vy = -ball.vy;
    }

    ball.drawCircle();

    paddle.move();
    paddle.drawRect();

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
