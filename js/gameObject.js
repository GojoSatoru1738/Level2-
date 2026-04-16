function GameObject() {
    this.x = 0;
    this.y = 0;

    this.width = 50;
    this.height = 50;

    this.color = "#00ff00";

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

    this.move = function() {
        this.x += this.vx;
        this.y += this.vy;
    };
}