export default class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.radius = 40;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.speed = 4;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }
    
    draw(ctx) {
        this.move();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = "#00c3b0";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#F9F871";
        ctx.stroke();
        this.shoot();
    }

    shoot() {
        if (this.shootPressed) {
            console.log('Shoot')
            const speed = 5;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x - this.radius / 8;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if (this.downPressed) {
            this.y += this.speed;
        }
        if (this.upPressed) {
            this.y -= this.speed;
        }
        if (this.leftPressed) {
            this.x -= this.speed;
        }
        if (this.rightPressed) {
            this.x += this.speed;
        }
    }

    keydown = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = true;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = true;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code === "Space") {
            this.shootPressed = true;
        }
    };

    keyup = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = false;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = false;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code === "Space") {
            this.shootPressed = false;
        }
    };
}