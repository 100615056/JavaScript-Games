// Reference canvas and get context
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

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
const color1 = "#F20000";
const color2 = "#F27D00";
const color3 = "#F2C200";
const color4 = "#00F20C";
const color5 = "#0030F2";
const color6 = "#9900F2";
const color7 = "#F0C2EC";
const color8 = "#871906";
const color9 = "#000000";

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
  if (onePressed) {
    ctx.fillStyle = color1;
  }
  
  if (twoPressed) {
  ctx.fillStyle = color2;
  }

  if (threePressed) {
  ctx.fillStyle = color3;
  }

  if (fourPressed) {
  ctx.fillStyle = color4;
  }

  if (fivePressed) {
  ctx.fillStyle = color5;
  }

  if (sixPressed) {
  ctx.fillStyle = color6;
  }

  if (sevenPressed) {
  ctx.fillStyle = color7;
  }

  if (eightPressed) {
  ctx.fillStyle = color8;
  }

  if (ninePressed) {
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
    onePressed = true;
  }
  if (event.keyCode == 50){
    twoPressed = true;
  }
  if (event.keyCode == 51){
    threePressed = true;
  }
  if (event.keyCode == 52){
    fourPressed = true;
  }
  if (event.keyCode == 53){
    fivePressed = true;
  }
  if (event.keyCode == 54){
    sixPressed = true;
  }
  if (event.keyCode == 55){
    sevenPressed = true;
  }
  if (event.keyCode == 56){
    eightPressed = true;
  }
  if (event.keyCode == 57){
    ninePressed = true;
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
    onePressed = false;
  }
  if (event.keyCode == 50){
    twoPressed = false;
  }
  if (event.keyCode == 51){
    threePressed = false;
  }
  if (event.keyCode == 52){
    fourPressed = false;
  }
  if (event.keyCode == 53){
    fivePressed = false;
  }
  if (event.keyCode == 54){
    sixPressed = false;
  }
  if (event.keyCode == 55){
    sevenPressed = false;
  }
  if (event.keyCode == 56){
    eightPressed = false;
  }
  if (event.keyCode == 57){
    ninePressed = false;
  }
}


drawGame();