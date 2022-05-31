// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

pi = Math.PI;
const background = 'black';
const user_clr = 'red';
const com_clr = 'blue';
const ball_clr = 'white';
const net_clr = 'yellow';

// Player
const user = {
    x: 0,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: user_clr
};

// Computer
const com = {
    x: canvas.width - 10,
    y: (canvas.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: com_clr
};

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    xVelocity: 5,
    yVelocity: 5,
    speed: 7,
    color: ball_clr
};

// Net
const net = {
    x: (canvas.width - 2) / 2,
    y: 0,
    width: 2,
    height: 10,
    color: net_clr
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

function drawRect(x, y, w, h, color) {
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

function drawNet() {
    for (let i = 0; i <= canvas.height; i+=20) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

function drawText(x, y, text, color) {
    ctx.fillStyle = color;
    ctx.font = '5rem fantasy';
    ctx.fillText(text, x, y);
}

function drawing() {
    // Clear Canvas
    clearScreen();
    // Scores
    // User Score
    drawText(canvas.width / 4, canvas.height / 5, user.score, user_clr);
    // Computer Score
    drawText(3*canvas.width / 4, canvas.height / 5, user.score, com_clr);
    // Net
    drawNet();
    // Player
    drawRect(user.x, user.y, user.width, user.height, user.color);
    // Computer
    drawRect(com.x, com.y, com.width, com.height, com.color);
    // Ball
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;
}


function move() {
    ball.x += ball.xVelocity;
    ball.y += ball.yVelocity;

}

function computer_move() {
    com.y += ((ball.y - (com.y + com.height / 2))) * 0.1;
}

function boundary() {
    // Top and bottom walls
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.yVelocity = -ball.yVelocity;
    }
}

function collision(ball, paddle) {
    // Players
    paddle.top = paddle.y;
    paddle.bottom = paddle.y + paddle.height;
    paddle.left = paddle.x;
    paddle.right = paddle.x + paddle.width;
    // Ball
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;

    /*
    --|--
    |   |
    _|  |_
    --|--
    */
    return paddle.left < ball.right && paddle.top < ball.bottom && paddle.right > ball.left && paddle.bottom > ball.top;
}

function update() {
    // Motion of the ball
    move();
    computer_move();
    boundary();
    // Check if Player paddle or Computer paddle
    let player = (ball.x + ball.radius < canvas.width / 2) ? user : com;
    if (collision(ball, player)) {
        // Check collision point
        let collidePoint = (ball.y - (player.y + player.height / 2));
        // Normalize numbers to get value between -1 and 1
        collidePoint = collidePoint / (player.height / 2);

        // Math.PI/4 = 45 degrees
        let angleRad = (Math.PI / 4) * collidePoint;

        // Change velocity directions
        let direction = (ball.x + ball.radius < canvas.width / 2) ? 1 : -1;
        ball.xVelocity = direction * ball.speed * Math.cos(angleRad);
        ball.yVelocity = ball.speed * Math.sin(angleRad);

        // Increase speed upon impact
        ball.speed += 0.1;
    }
}


main();