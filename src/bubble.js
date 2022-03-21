import Player from "./Player.js";

// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');


canvas.width = 550;
canvas.height = 600;

const player = new Player(
    canvas.width / 2.2,
    canvas.height / 1.3
);

function gameLoop () {
    clearScreen();
    player.draw(ctx);
}

function clearScreen() {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(gameLoop, 1000 / 60);