import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";

// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');


canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);

const player = new Player(
    canvas.width / 2.2,
    canvas.height / 1.3,
    bulletController
);

const colors = ['#004E73', '#EB9929', '#795D9D'];
const start = 50;
const gap = 100;
const rowY = [50, 150];
const rowX = [start, start + gap, start + 2 * gap, start + 3 * gap, start + 4 * gap]

const enemies = [
    new Enemy(rowX[0], rowY[0], colors[0], 5),
    new Enemy(rowX[1], rowY[0], colors[1], 5),
    new Enemy(rowX[2], rowY[0], colors[2], 2),
    new Enemy(rowX[3], rowY[0], colors[0], 2),
    new Enemy(rowX[4], rowY[0], colors[1], 10),
    new Enemy(rowX[0], rowY[1], colors[0], 5),
    new Enemy(rowX[1], rowY[1], colors[1], 5),
    new Enemy(rowX[2], rowY[1], colors[2], 2),
    new Enemy(rowX[3], rowY[1], colors[0], 2),
    new Enemy(rowX[4], rowY[1], colors[1], 20),
];

function gameLoop () {
    clearScreen();
    bulletController.draw(ctx);
    player.draw(ctx);
    enemies.forEach((enemy) => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
            }
        } else {
            enemy.draw(ctx);
        }
    });
}

function clearScreen() {
    ctx.fillStyle = "#aaddff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(gameLoop, 1000 / 60);