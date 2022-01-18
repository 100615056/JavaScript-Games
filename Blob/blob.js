// Reference to our canvas by using id from HTML file
const canvas = document.getElementById("gameArea");

// Getting context to draw on the canvas
const ctx = canvas.getContext("2d");

// Defining Variables
let x = 400;
let y = 300;
let radius = 50;
let startAngle = 0;
let endAngle = Math.PI * 2;
let speed = 10;

// Keyboard input
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Game Loop
function drawGame() {
  requestAnimationFrame(drawGame);
  clearScreen();
  inputs();
  boundaryCheck();
  drawBlob();
}

// Prevent blob from exiting canvas
function boundaryCheck() {
  // Cannot exit top position
  if (y < radius) {
    y = radius;
  }
  // Cannot exit bottom position
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  // Cannot exit left position
  if (x < radius) {
    x = radius;
  }
  // Cannot exit right position
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}

// Moves blob after keyboard input
function inputs() {
  if (upPressed) {
    y -= speed;
  }
  if (downPressed) {
    y += speed;
  }
  if (leftPressed) {
    x -= speed;
  }
  if (rightPressed) {
    x += speed;
  }
}

function drawBlob() {
  ctx.fillStyle = "Chartreuse";
  // Change colour of blob based on input
  if (upPressed) {
    ctx.fillStyle = "Crimson";
  }
  if (downPressed) {
    ctx.fillStyle = "Cyan";
  }
  if (leftPressed) {
    ctx.fillStyle = "Fuchsia";
  }
  if (rightPressed) {
    ctx.fillStyle = "BlueViolet";
  }
  // Draw Sprite
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.fill();
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Keyboard Events
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  if (event.keyCode == 38 || event.keyCode == 87) {
    upPressed = true;
  }
  if (event.keyCode == 40 || event.keyCode == 83) {
    downPressed = true;
  }
  if (event.keyCode == 37 || event.keyCode == 65) {
    leftPressed = true;
  }
  if (event.keyCode == 39 || event.keyCode == 68) {
    rightPressed = true;
  }
}

function keyUp(event) {
  if (event.keyCode == 38 || event.keyCode == 87) {
    upPressed = false;
  }
  if (event.keyCode == 40 || event.keyCode == 83) {
    downPressed = false;
  }
  if (event.keyCode == 37 || event.keyCode == 65) {
    leftPressed = false;
  }
  if (event.keyCode == 39 || event.keyCode == 68) {
    rightPressed = false;
  }
}

drawGame();