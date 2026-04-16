function GameObject() {
    this.x = 0;
    this.y = 0;

    this.width = 1;
    this.height = 50;

    this.color = "purple";

    this.vx = 0;
    this.vy = 0;

    this.drawRect = function() {
        context.fillStyle = this.color;
        context.fillRect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
    };

    
    this.drawCircle = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.width/2, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };


  
    this.move = function() {
            if (w)
             {
                 this.y -= 10;
                 }
    
            if (s)
             {
             this.y += 10;
             }
         };
    }
