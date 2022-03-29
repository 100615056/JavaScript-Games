export default class Bullet {
    constructor(x, y, speed, damage) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
    
        this.radius = 5;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.color = "#00baff";
    
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
        this.y -= this.speed;
    }

    collideWith(sprite) {
        var dx = (this.x + this.radius) - (sprite.x + sprite.radius);
        var dy = (this.y + this.radius) - (sprite.y + sprite.radius);
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.radius + sprite.radius) {
            // Collision detected!
            this.color = 'green';
        } 

        else {
            // no collision
            this.color = 'blue';
        }
    }
}