let computerCounter = 0;
let playerCounter = 0;

const bod = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
bod.appendChild(content);

const description = document.createElement('div');
description.classList.add('description');
bod.appendChild(description);

const results = document.createElement('div');
results.classList.add('results');
bod.appendChild(results);

const computerChoice = ['Rock', 'Paper', 'Scissors'];

for(let i = 0; i < computerChoice.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('button');
    // the player and AI will have the same choices. so take the same choices as the AI
    btn.textContent = `${computerChoice[i]}`;
    btn.addEventListener('click', () => playRound(btn.textContent, computerChoice));
    content.append(btn);
}

function playerSelection(choice) {
    console.log(choice.toLowerCase());
    return choice.toLowerCase();
}

function ComputerPlay() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = ComputerPlay().toLowerCase(); // = the value of return from ComputerPlay() 
    if(playerChoice == 'paper' && computerChoice == 'scissors')
    {
        computerCounter++;
        description.textContent = 'You lose. Paper loses to Scissors';

    } else if(playerChoice == 'scissors' && computerChoice == 'rock') {

        computerCounter++;
        description.textContent = 'You lose. Scissors lose to Rock';

    } else if (playerChoice == 'rock' && computerChoice == 'paper') {

        computerCounter++;
        description.textContent = 'You lose. Rock loses to Paper';

    } else if(playerChoice == computerChoice) {

        description.textContent = 'It\'s a tie!';
    
    } else {

        playerCounter++;  
        description.textContent = `You win! ${playerChoice} wins ${computerChoice}`; 
    }
    results.textContent = scoreCounter();
}

function scoreCounter() {
    return `The current score is: ${playerCounter} - ${computerCounter}`;
}