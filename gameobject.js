function GameObject() {
    this.x = 0;
    this.y = 0;

    this.width = 50;
    this.height = 50;

    this.color = "#00ff00";

    this.vx = 0;
    this.vy = 0;
}

this.drawCircle = function() {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.width/2, 0, 360*Math.PI/180, true);
    context.closePath();
    context.fill();
    context.restore();
};