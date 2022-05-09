let computerCounter = 0;
let playerCounter = 0;

const bod = document.querySelector('body');

const welcome = document.createElement('div');
welcome.classList.add('welcomeMsg');
welcome.textContent = 'Hello there! You in for playing a little, silly game? The first to 5 wins.'
bod.appendChild(welcome);

const content = document.createElement('div');
content.classList.add('content');
bod.appendChild(content);

const description = document.createElement('div');
description.classList.add('description');
bod.appendChild(description);

const results = document.createElement('div');
results.classList.add('results');
bod.appendChild(results);

const resetbtn = document.createElement('button');
resetbtn.classList.add('resetbtn');
//resetbtn.textContent = 'Play Again';
resetbtn.style.visibility = 'hidden';
resetbtn.addEventListener('click', () => reset())
bod.appendChild(resetbtn);

const image = document.createElement('img');
image.src = 'images/replaybutton.png';
resetbtn.appendChild(image);

function reset() {
    window.location.reload();
}

const computerChoice = ['Rock', 'Paper', 'Scissors'];

for(let i = 0; i < computerChoice.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('button');
    // the player and AI will have the same choices. so take the same choices as the AI
    btn.textContent = `${computerChoice[i]}`;
    btn.addEventListener('click', () => decide(btn.textContent, computerChoice));
    content.append(btn);
}

function decide(player, computer) {
    welcome.textContent = ' ';
    if(playerCounter < 5 && computerCounter < 5) {
        return playRound(player, computer);
    }
}

function ComputerPlay() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerChoice, computerChoice) {
        
        playerChoice.charAt(0).toUpperCase();
        computerChoice = ComputerPlay(); // = the value of return from ComputerPlay() 
        if(playerChoice == 'Paper' && computerChoice == 'Scissors')
        {
            computerCounter++;
            description.textContent = 'You lose. Paper loses to Scissors';

        } else if(playerChoice == 'Scissors' && computerChoice == 'Rock') {

            computerCounter++;
            description.textContent = 'You lose. Scissors lose to Rock';

        } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {

            computerCounter++;
            description.textContent = 'You lose. Rock loses to Paper';

        } else if(playerChoice == computerChoice) {

            description.textContent = 'It\'s a tie!';
        
        } else {

            playerCounter++;  
            description.textContent = `You win! ${playerChoice} wins ${computerChoice}`; 
        }
        if(playerCounter < 5 && computerCounter < 5) {
            results.textContent = scoreCounter();
        } else if(playerCounter === 5) {
            results.textContent = `Game Over! You won the game!`;
            resetbtn.style.visibility = 'visible';
        } else if(computerCounter === 5) {
            results.textContent = `Game Over! You lost the game!`;
            resetbtn.style.visibility = 'visible';
        }
}

function scoreCounter() {
    return `The current score is: ${playerCounter} - ${computerCounter}`;
}