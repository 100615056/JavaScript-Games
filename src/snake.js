// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 7;
let score = 0;

// Colors
const background = 'black';
const snake_head = 'orange';
const food = 'red';
const snake_body = 'green';
const score_clr = 'white';
const score_fnt = '1rem Roboto';
const score_txt = 'Score: ';
const over_clr = 'white';
const over_fnt = '3rem Roboto';
const over_txt = 'Game Over!';

// Number of tiles
let tileCount = 20;
// Creating sprite size
let tileSize = canvas.width / tileCount - 2;
// Snake position
let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

// Food position
let appleX = 5;
let appleY = 5;

// Variables for moving snake
let xVelocity = 0;
let yVelocity = 0;


// Game Loop
function drawGame() {
    moveSnake();
    let result = gameOver();
    if (result) {
        return;
    }
    clearScreen();

    foodCollision();
    drawApple();
    drawSnake();

    drawScore();

    // Levels
    const lvl_one = 4;
    const lvl_two = 8;
    const lvl_three = 12;
    
    if (score > lvl_one) {
        speed = 9;
    }

    if (score > lvl_two) {
        
        speed = 11;
    }

    if (score > lvl_three) {
        
        speed = 13;
    }

    // Change screen update based on speed
    setTimeout(drawGame, 1000 / speed);
}

function gameOver() {
    let gameOver = false;

    // Check start of game
    if (yVelocity === 0 && xVelocity === 0) {
        return false;
    }

    // Check walls
    if (headX < 0) {
        gameOver = true;
    }

    else if (headX === tileCount) {
        gameOver = true;
    }

    else if (headY < 0) {
        gameOver = true;
    }

    else if (headY === tileCount) {
        gameOver = true;
    }

    // Check Body collision
    for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
        gameOver = true;
        break;
        }
    }

    // Game over message
    if (gameOver) {
        ctx.fillStyle = over_clr;
        ctx.font = over_fnt;
        ctx.fillText(over_txt, canvas.width / 5, canvas.height / 2);
    }

    return gameOver;
}


function clearScreen() {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function drawScore() {
    ctx.fillStyle = score_clr;
    ctx.font = score_fnt;
    ctx.fillText(score_txt + score, canvas.width - 60, 20);
}


function drawSnake() {
    // Draw snake body
    ctx.fillStyle = snake_body;
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    // Add snake parts 
    // Place item at the end of the list
    snakeParts.push(new SnakePart(headX, headY));
    if (snakeParts.length > tailLength) {
        // Remove furthest item from snake items
        snakeParts.shift();
    }

    // Draw Snake head
    ctx.fillStyle = snake_head;
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

}


function moveSnake() {
    // Move snake head in x-direction
    headX += xVelocity;
    // Move snake head in y-direction
    headY += yVelocity;
}


function drawApple() {
    ctx.fillStyle = food;
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}


function foodCollision() {
    if (appleX === headX && appleY === headY) {
        // Move apple to random position on collision
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        // Increase snake's body
        tailLength++;
        score++;
    }
}


document.body.addEventListener('keydown', keyDown);


function keyDown(event) {
    // Up
    if (event.keyCode == 38 || event.keyCode == 87) {
        // Prevent from going in opposite direction
        if (yVelocity == 1) {
            return;
        }
        yVelocity = -1;
        xVelocity = 0;
    }
    // Down
    if (event.keyCode == 40 || event.keyCode == 83) {
        // Prevent from going in opposite direction
        if (yVelocity == -1) {
            return;
        }
        yVelocity = 1;
        xVelocity = 0;
    }
    // Left
    if (event.keyCode == 37 || event.keyCode == 65) {
        // Prevent from going in opposite direction
        if (xVelocity == 1) {
            return;
        }
        yVelocity = 0;
        xVelocity = -1;
    }
    // Right
    if (event.keyCode == 39 || event.keyCode == 68) {
        // Prevent from going in opposite direction
        if (xVelocity == -1) {
            return;
        }
        yVelocity = 0;
        xVelocity = 1;
    }
}


drawGame();