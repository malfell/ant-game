let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
img.onload = function() {
  window.requestAnimationFrame(gameLoop);
};

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
canvas6.width = 800;
canvas6.height = 600;

const SCALE = 2;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx6.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

const CYCLE_LOOP = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
let keyPresses = {};

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

const MOVEMENT_SPEED = 1;
let positionX = 0;
let positionY = 0;

function gameLoop() {
  ctx6.clearRect(0, 0, canvas.width, canvas.height);
  if (keyPresses.w) {
    positionY -= MOVEMENT_SPEED;
  } else if (keyPresses.s) {
    positionY += MOVEMENT_SPEED;
  }
  if (keyPresses.a) {
    positionX -= MOVEMENT_SPEED;
  } else if (keyPresses.d) {
    positionX += MOVEMENT_SPEED;
  }
  drawFrame(0, 0, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}