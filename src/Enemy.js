export default class Enemy {
    constructor(x, y, color, health) {
        this.x = x;
        this.y  = y;
        this.color = color;
        this.health = health;
        this.radius = 40;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.speed = 4;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        if (this.health > 1) {
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
        else {
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }

        // Draw Text
        ctx.fillStyle = 'white';
        ctx.font = '25px Arial';
        if (this.health < 10) {
            ctx.fillText(this.health, this.x - this.radius / 5, this.y + this.radius / 4);
        }

        else {
            ctx.fillText(this.health, this.x - this.radius / 3, this.y + this.radius / 4); 
    }
    }
}