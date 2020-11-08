let p1Btn = document.querySelector('#p1Btn');
let p2Btn = document.querySelector('#p2Btn');
let resetBtn = document.querySelector('#reset');
let p1Disp = document.querySelector('#p1Disp');
let p2Disp = document.querySelector('#p2Disp');
let winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

p1Btn.addEventListener('click', function() {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true; //also runs if gameOver = !gameOver
      p1Disp.classList.add('winner');
      p2Disp.classList.add('loser');
    }
    p1Disp.textContent = p1Score;
  }
});

p2Btn.addEventListener('click', function() {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true; //also runs if gameOver = !gameOver
      p2Disp.classList.add('winner');
      p1Disp.classList.add('loser');
    }
    p2Disp.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value); //convert from string to num
  reset();
});

resetBtn.addEventListener('click', reset); //reference to reset func, no need
//for invocation operators
function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Disp.textContent = 0;
  p2Disp.textContent = 0;
  p1Disp.classList.remove('winner', 'loser');
  p2Disp.classList.remove('winner', 'loser');
}