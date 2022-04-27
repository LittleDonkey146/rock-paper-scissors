function ComputerPlay() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerChoice, computerChoice) {
    let player = prompt('What do you want to play?');
    playerChoice = player.toLowerCase();

    computerChoice = ComputerPlay().toLowerCase(); // = the value of return from ComputerPlay() 

    if(playerChoice == 'paper' && computerChoice == 'scissors')
    {
        computerCounter++;
        return alert('You lose. Paper loses to Scissors');

    } else if(playerChoice == 'scissors' && computerChoice == 'rock') {

        computerCounter++;
        return alert('You lose. Scissors lose to Rock');

    } else if (playerChoice == 'rock' && computerChoice == 'paper') {

        computerCounter++;
        return alert('You lose. Rock loses to Paper');

    } else if(playerChoice == computerChoice) {

        return alert('It\'s a tie!');

    } else {
        playerCounter++;
        return alert(`You win! ${playerChoice} wins ${computerChoice}`);
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
        scoreCounter();
    }
}

let computerCounter = 0;
let playerCounter = 0;

function scoreCounter() {
    return alert(`The current score is: ${playerCounter} - ${computerCounter}`);
}

game();