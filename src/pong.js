// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

pi = Math.PI;
const object_clr = 'white';
const background = 'black'


// Player
const user = {
    x: 0,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: object_clr
};

// Computer
const com = {
    x: canvas.width - 10,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: object_clr
};

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    xVelocity: 5,
    yVelocity: 5,
    speed: 7,
    color: object_clr
};

// Net
const net = {
    x: (canvas.width - 2) / 2,
    y: 0,
    width: 2,
    height: 10,
    color: object_clr
};


// Main Loop
function main() {
    drawing();
    requestAnimationFrame(main);
}

function clearScreen() {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPaddle(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, pi * 2, true);
    ctx.closePath();
    ctx.fill();
}



function drawing() {
    // Clear Canvas
    clearScreen();

    // Net

    // Player
    drawPaddle(user.x, user.y, user.width, user.height, user.color);
    // Computer
    drawPaddle(com.x, com.y, com.width, com.height, com.color);
    // Ball
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}



main();