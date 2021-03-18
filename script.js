const choiceArr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randNum = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[randNum].toLowerCase();
}

function playRound() {
    let playerSelection = prompt("Enter: 'Rock' or 'Paper' or 'Scissors' to Play").toLowerCase();
    let computerSelection = computerPlay();
    console.log(`Computer: ${computerSelection}`);
    console.log(`Player: ${playerSelection}`);

    if (computerSelection === playerSelection) {
        console.log("Tie Game!");
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beat ${playerSelection}`);
    } else {
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beat ${computerSelection}`);
    }
}

function game() {
    let round = 5;
    while (round > 0) {
        playRound();
        round--;
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${playerScore}`);

    if (computerScore > playerScore) {
        console.log("Computer is the Winner");
    } else if (playerScore > computerScore) {
        console.log("Congratulation! You'r the Winner");
    } else {
        console.log("Total Tie Game! Play again.");
    }
}

game();
