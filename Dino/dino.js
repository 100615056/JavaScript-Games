/* Source: https://github.com/kubowania/chrome-trex-game */

document.addEventListener("DOMContentLoaded", () => {
    const dino = document.querySelector(".dino");
    const gameArea = document.querySelector(".gameArea");
    var change = document.getElementById("score");
    // Define Variables
    let jumping = false;
    let gravity = 0.9;
    let gameOver = false;
    // Keyboard Event for jumping
    function control(e) {
      if (e.keyCode === 32) {
        if (!jumping) {
          jumping = true;
          jump();
        }
      }
    }
    document.addEventListener("keyup", control);
    let score = 0;
    let dinoPosition = 0;
  
    function jump() {
      let count = 0;
      let timerId = setInterval(function () {
        if (count === 15) {
          clearInterval(timerId);
          // Down movement of Dino
          let downTimerId = setInterval(function () {
            if (count === 0) {
              clearInterval(downTimerId);
              jumping = false;
            }
            dinoPosition -= 5;
            count--;
            dinoPosition = dinoPosition * gravity;
            dino.style.bottom = dinoPosition + "px";
          }, 20);
        }
        // Upwards movement of Dino
        dinoPosition += 30;
        count++;
        dinoPosition = dinoPosition * gravity;
        dino.style.bottom = dinoPosition + "px";
      }, 20);
    }
  
    function generateObstacles() {
      // Create obstacles at random intervals
      let randomTime = Math.random() * 6000;
      let cactusPosition = 700;
      const obstacle = document.createElement("div");
      if (!gameOver) obstacle.classList.add("cactus");
      gameArea.appendChild(obstacle);
      obstacle.style.left = cactusPosition + "px";
  
      // Delete cactus on leaving game area
      let timerId = setInterval(function () {
        if (cactusPosition < 0) {
          obstacle.classList.remove("cactus");
        }
        // Check for collision and end game if collision occurs
        if (cactusPosition > 0 && cactusPosition < 90 && dinoPosition < 30) {
          clearInterval(timerId);
          gameOver = true;
          // Remove sprites of the screen
          while (gameArea.firstChild) {
            gameArea.removeChild(gameArea.lastChild);
          }
          alert("Game Over");
          document.location.reload();
        }
        // If dino cleared obstacle, increase score
        if (dinoPosition > 30 && cactusPosition == 0) {
          score++;
          change.innerHTML = score;
        }
        cactusPosition -= 10;
        obstacle.style.left = cactusPosition + "px";
      }, 20);
      if (!gameOver) {
        setTimeout(generateObstacles, randomTime);
        score = score;
      }
    }
    generateObstacles();
  });