const computerPick = document.getElementById('computerPlay');
const userPick = document.getElementById('userPlay');
const result = document.getElementById('result');
let choiceArr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playGame = true;
let round = 0;

function computerPlay() {
    let randNum = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[randNum].toLowerCase();
}

function playRound(playerchoice) {
    round += 1;
    let playerSelection = playerchoice;
    let computerSelection = computerPlay();
    computerPick.textContent = `Computer Play:> ${computerSelection}`;
    userPick.textContent = `User Play:> ${playerSelection}`

    if (computerSelection === playerSelection) {
        result.textContent = "Tie Game!";
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        result.textContent = `You Lose! ${computerSelection} beat ${playerSelection}`;
    } else {
        playerScore += 1;
        result.textContent = `You Win! ${playerSelection} beat ${computerSelection}`;
    }
    if (computerScore == 5 || playerScore == 5) {
        computerPick.textContent = `Computer Score: ${computerScore}`;
        userPick.textContent = `Player Score: ${playerScore}`;
        if (computerScore > playerScore) {
            result.textContent = "Computer is the Winner";
        } else if (playerScore > computerScore) {
            result.textContent = "Congratulation! You'r the Winner";
        }
        computerScore = 0;
        playerScore = 0;
    }

}

// function game(userChoice) {

//     while (round > 0) {
//         playRound(userChoice);
//         round--;
//     }
//     console.log(`Computer Score: ${computerScore}`);
//     console.log(`Player Score: ${playerScore}`);

//     if (computerScore > playerScore) {
//         console.log("Computer is the Winner");
//     } else if (playerScore > computerScore) {
//         console.log("Congratulation! You'r the Winner");
//     } else {
//         console.log("Total Tie Game! Play again.");
//     }
// }

// game();
