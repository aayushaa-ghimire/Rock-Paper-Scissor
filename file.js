let uchoice = null;
let uscore = 0;
let cscore = 0;

const winner = document.getElementById('winner');
const computerDisplay = document.getElementById('computer');
const uscoreDisplay = document.getElementById('uscore');
const cscoreDisplay = document.getElementById('cscore');

// Simple choice selection
document.getElementById('rock').onclick = () => (uchoice = 'rock');
document.getElementById('paper').onclick = () => (uchoice = 'paper');
document.getElementById('scissors').onclick = () => (uchoice = 'scissors');

document.getElementById('start').onclick = () => {
  if (!uchoice) {
    winner.innerHTML = 'Pick your move! 🕹️';
    return;
  }

  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  computerDisplay.innerHTML = 'CPU PICKED: ' + compChoice.toUpperCase();

  if (compChoice === uchoice) {
    winner.innerHTML = "IT'S A TIE! 🤝";
  } else if (
    (compChoice === 'rock' && uchoice === 'scissors') ||
    (compChoice === 'scissors' && uchoice === 'paper') ||
    (compChoice === 'paper' && uchoice === 'rock')
  ) {
    winner.innerHTML = 'CPU WINS! 👾';
    cscore++;
  } else {
    winner.innerHTML = 'YOU WIN! 🔥';
    uscore++;
  }

  uscoreDisplay.innerHTML = 'YOU: ' + uscore;
  cscoreDisplay.innerHTML = 'CPU: ' + cscore;
};
