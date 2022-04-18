// computer chooses between rock, paper, and scissors randomly
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * choices.length);
  let choice = choices[random];
  return choice;
}
// plays a round and decides who wins
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie! You both chose ' + playerChoice;

  } else if(playerChoice === 'rock' && computerChoice === 'paper') {
      return 'You Lose! Paper beats Rock';

  } else if(playerChoice === 'rock' && computerChoice === 'scissors') {
      return 'You win! Rock beats Scissors';

  } else if(playerChoice === 'paper' && computerChoice === 'rock') {
      return 'You win! Paper beats Rock';

  } else if(playerChoice === 'paper' && computerChoice === 'scissors') {
      return 'You lose! Scissors beats Paper';

  } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
      return 'You lose! Rock beats Scissors';

  } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
      return 'You win! Scissors beats Paper';
  }
}

const playerChoice = 'rock';
const computerChoice = computerPlay();
console.log(playRound(playerChoice, computerChoice));
console.log(playRound('paper', computerChoice));
console.log(playRound('scissors', computerChoice));