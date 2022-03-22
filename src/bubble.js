import Player from "./Player.js";
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

function gameLoop () {
    setCommonStyle();
    clearScreen();
    bulletController.draw(ctx);
    player.draw(ctx);
}

function setCommonStyle() {
    ctx.shadowColor = "#F9F871";
    ctx.shadowBlur = 20;
}
function clearScreen() {
    ctx.fillStyle = "#87CEFA";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(gameLoop, 1000 / 60);