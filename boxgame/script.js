// Select all needed elements
const player = document.querySelector('.player');
const target = document.querySelector('.target');
const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.getElementById('score');

// Initial positions for the player box
let position = { x: 180, y: 180 };
const step = 10; // How many pixels the box moves per key press
let score = 0;

// Generate a random position for the target within the game area
function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + 'px';
  target.style.top = randomY + 'px';
}

// Check if player catches the target
function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  // Check overlap between the two rectangles
  const overlap = !(
    playerRect.right < targetRect.left ||
    playerRect.left > targetRect.right ||
    playerRect.bottom < targetRect.top ||
    playerRect.top > targetRect.bottom
  );

  // If they overlap, increase score and move target
  if (overlap) {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  }
}

// Listen for arrow key presses
document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case 'ArrowUp':
      if (position.y > 0) position.y -= step;
      break;
    case 'ArrowDown':
      if (position.y < gameArea.clientHeight - player.clientHeight)
        position.y += step;
      break;
    case 'ArrowLeft':
      if (position.x > 0) position.x -= step;
      break;
    case 'ArrowRight':
      if (position.x < gameArea.clientWidth - player.clientWidth)
        position.x += step;
      break;
  }

  // Apply movement to the player box
  player.style.top = position.y + 'px';
  player.style.left = position.x + 'px';

  // Check for collision with target after moving
  checkCollision();
});

// Place the target somewhere random when the game starts
moveTarget();
