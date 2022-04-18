// computer chooses between rock, paper, and scissors randomly
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * choices.length);
  let choice = choices[random];
  return choice;
}

let playerWins = 0;
let computerWins = 0;

// plays a round and decides who wins
// adds to the winners count
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie! You both chose ' + playerChoice;

  } else if(playerChoice === 'rock' && computerChoice === 'paper') {
      computerWins++;
      return 'You Lose! Paper beats Rock';

  } else if(playerChoice === 'rock' && computerChoice === 'scissors') {
      playerWins++;
      return 'You win! Rock beats Scissors';

  } else if(playerChoice === 'paper' && computerChoice === 'rock') {
      playerWins++;
      return 'You win! Paper beats Rock';

  } else if(playerChoice === 'paper' && computerChoice === 'scissors') {
      computerWins++;
      return 'You lose! Scissors beats Paper';

  } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
      computerWins++;
      return 'You lose! Rock beats Scissors';

  } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
      playerWins++;
      return 'You win! Scissors beats Paper';
  }
}

// decide who wins the game
// if player wins 5, player wins
// if computer wins 5, computer wins
// note: game stops after 5 wins by either one
function winner(playerWins, computerWins) {
  if(playerWins === 5) {
    return 'You won the game!';
  
  } else if(computerWins === 5){
    return 'You lost the game!';
  }
}

// play a game, first to 5 wins
// count number of rounds
// display output of each round
// if player is first to 5, player wins
// else player loses
// display who wins the game
function game() {
  playerWins;
  computerWins;

  for(let i = 0; (playerWins < 5 && computerWins < 5); i++) {
    let round = i + 1;
    const playerChoice = 'rock';
    const computerChoice = computerPlay();
    console.log('round: ' + round);
    console.log(playRound(playerChoice, computerChoice));
    console.log('player wins: ' + playerWins, 'computer wins: ' + computerWins);
  }
  return winner(playerWins, computerWins);
}

console.log(game());