// Reference to our canvas by using id from HTML file
const canvas = document.getElementById("gameArea");

// Getting context to draw on the canvas
const ctx = canvas.getContext("2d");

// Defining Variables
let x = 400;
let y = 250;
let radius = 50;
let startAngle = 0;
let endAngle = Math.PI * 2;
let speed = 10;

// Keyboard input
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let onePressed = false;
let twoPressed = false;
let threePressed = false;
let fourPressed = false;
let fivePressed = false;
let sixPressed = false;
let sevenPressed = false;
let eightPressed = false;
let ninePressed = false;

// Colors
let color1 = "#F20000";
let color2 = "#F27D00";
let color3 = "#F2C200";
let color4 = "#00F20C";
let color5 = "#0030F2";
let color6 = "#9900F2";
let color7 = "#F0C2EC";
let color8 = "#871906";
let color9 = "#000000";

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
  if (one) {
    ctx.fillStyle = color1;
  }
  
  if (two) {
  ctx.fillStyle = color2;
  }

  if (three) {
  ctx.fillStyle = color3;
  }

  if (four) {
  ctx.fillStyle = color4;
  }

  if (five) {
  ctx.fillStyle = color5;
  }

  if (six) {
  ctx.fillStyle = color6;
  }

  if (seven) {
  ctx.fillStyle = color7;
  }

  if (eight) {
  ctx.fillStyle = color8;
  }

  if (nine) {
  ctx.fillStyle = color9;
  }
  // Draw Sprite
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.fill();
}

function clearScreen() {
  ctx.fillStyle = "white";
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
  // Colors
  if (event.keyCode == 49){
    one = true;
  }
  if (event.keyCode == 50){
    two = true;
  }
  if (event.keyCode == 51){
    three = true;
  }
  if (event.keyCode == 52){
    four = true;
  }
  if (event.keyCode == 53){
    five = true;
  }
  if (event.keyCode == 54){
    six = true;
  }
  if (event.keyCode == 55){
    seven = true;
  }
  if (event.keyCode == 56){
    eight = true;
  }
  if (event.keyCode == 57){
    nine = true;
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
  // Colors
  if (event.keyCode == 49){
    one = false;
  }
  if (event.keyCode == 50){
    two = false;
  }
  if (event.keyCode == 51){
    three = false;
  }
  if (event.keyCode == 52){
    four = false;
  }
  if (event.keyCode == 53){
    five = false;
  }
  if (event.keyCode == 54){
    six = false;
  }
  if (event.keyCode == 55){
    seven = false;
  }
  if (event.keyCode == 56){
    eight = false;
  }
  if (event.keyCode == 57){
    nine = false;
  }
}

drawGame();