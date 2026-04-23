var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000/60;


var ball = new GameObject();

ball.x = canvas.width / 2;
ball.y = canvas.height / 2;
ball.vx = -4;
ball.vy = 0;
ball.width = 50;
ball.height = 50;
ball.color = "purple";


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
    
    if (ball.x > canvas.width) {
        ball.x = canvas.width;
        ball.x -= ball.width/2;
        ball.vx = -ball.vx;
    }

    
    
    if (ball.x < 0) {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
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
    
    if (w) {
        paddle.vy = -5;
    } 
    else if (s) {
        paddle.vy = 5;
    } 
    else {
        paddle.vy = 0;
    }

    paddle.move();
    paddle.drawRect();

    if (paddle.y < paddle.height/2) {
    paddle.y = paddle.height/2;
}

if (paddle.y > canvas.height - paddle.height/2) {
    paddle.y = canvas.height - paddle.height/2;
}

// ALL DA COLLISION
    if (ball.x - ball.width/2 < paddle.x + paddle.width/2)
{
    if (ball.y > paddle.y - paddle.height/2)
    {
        if (ball.y < paddle.y + paddle.height/2)
        {
            
            if (ball.y < paddle.y - paddle.height/6) {
                ball.vx = 4;
                ball.vy = -4;
            }
            
            else if (ball.y < paddle.y + paddle.height/6) {
                ball.vx = 4;
                ball.vy = 0;
            }
            
            else {
                ball.vx = 4;
                ball.vy = 4;
            }

            
            ball.x = paddle.x + paddle.width/2 + ball.width/2;
        }
    }
}
   
}


