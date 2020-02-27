// Actual game

const game = {
    myHand: '',
    computerHand: ''
}

// Game result 
const gameResult = {
    numberOfGame: 0,
    draws: 0,
    wins: 0,
    loses: 0
}
// Hands and button
const hands = [...document.body.querySelectorAll('.hand')];
const startButton = document.querySelector('.start');


// Hand Select 
function handSelect() {
    game.myHand = this.dataset.option;
}
// Computer choice
function computerChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}
// Check who will win
function checkResult(player, computer) {
    if (player === computer) {
        return 'draw'
    } else if ((player === 'paper' && computer === 'rock') || (player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper')) {
        return 'win'
    } else {
        return 'lose'
    }
}
// Elements needed to show results
// Choices
const playerChoice = document.querySelector('[data-summary="your-choice"]');
const aiChoice = document.querySelector('[data-summary="computer-choice"]');
const whoWin = document.querySelector('[data-summary="who-win"]')

// Number of wins loses, draws and numberOfGames played
const spanNumberGames = document.querySelector('.countGames')
const spanDraws = document.querySelector('.draw');
const spanWins = document.querySelector('.win');
const spanLoses = document.querySelector('.lose');

// Show results 
function showResults(player, computer, result) {
    playerChoice.textContent = ` ${player}`;
    aiChoice.textContent = ` ${computer}`;
    if (result === 'win') {
        spanNumberGames.textContent = ` ${++gameResult.numberOfGame}`;
        spanWins.textContent = ` ${++gameResult.wins}`;
        whoWin.textContent = ' You won!!';
        whoWin.style.color = 'green';
    } else if (result === 'draw') {
        spanNumberGames.textContent = ` ${++gameResult.numberOfGame}`;
        spanDraws.textContent = ` ${++gameResult.draws}`;
        whoWin.textContent = ' Draw!!!!';
        whoWin.style.color = 'gray';
    } else {
        spanNumberGames.textContent = ` ${++gameResult.numberOfGame}`
        spanLoses.textContent = ` ${++gameResult.loses}`;
        whoWin.textContent = ' You lost';
        whoWin.style.color = 'red';
    }

}
// Game end
function gameEnd() {
    myHand.textContent = '';
    computerHand.textContent = '';
}
// Start game
function gameStart() {
    if (!game.myHand) {
        return alert('You have to choose one of the hands');
    } else {
        hands.forEach(hand => hand.style.boxShadow = '');
        game.computerHand = computerChoice();
        const result = checkResult(game.myHand, game.computerHand);
        showResults(game.myHand, game.computerHand, result);
        game.myHand = '';

    }
}



hands.forEach(hand => hand.addEventListener('click', handSelect));
document.querySelector('.start').addEventListener('click', gameStart);