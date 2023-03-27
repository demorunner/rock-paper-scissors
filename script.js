//declares player selection and computer selection
let playerSelection;
let computerChoice;

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ for computer choice
function computerSelection() {
    const choice = ["ROCK", "PAPER", "SCISSORS"]
    computerChoice = choice[Math.floor(Math.random() * choice.length)]
    return computerChoice;
    }


//plays a single round of Rock Paper Scissors    
function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice;
    computerChoice = computerSelection();
    let compDiv = document.getElementById('comp').textContent = ("COMPUTER CHOOSE : " + computerChoice);
    let compImg = document.querySelector("#comp-choice");
    if (computerChoice === "ROCK") {
        compImg.src = "imgs/rock.png"; // Replace with the path to your rock image
      } else if (computerChoice === "PAPER") {
        compImg.src = "imgs/paper.png"; // Replace with the path to your paper image
      } else if (computerChoice === "SCISSORS") {
        compImg.src = "imgs/scissors.png"; // Replace with the path to your scissors image
      }
    
    let Tie = "ITS A DRAW";
    let rockWins = "ROCK BEATS SCISSORS | YOU WIN!";
    let scissorWins = "SCISSORS BEATS PAPER | YOU WIN!";
    let paperWins = "PAPER BEATS ROCK | YOU WIN!";
    let rockLose = "PAPER BEATS ROCK | YOU LOSE!";
    let scissorLose = "ROCK BEATS SCISSORS | YOU LOSE!";
    let paperLose = "SCISSORS BEATS PAPER | YOU LOSE!";

    // game Tie
    if (playerChoice === computerChoice) {
        return Tie;
    // player wins
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        playerScore++;
        return rockWins;
    }
    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        playerScore++;
        return scissorWins;
    }
    else if (playerChoice === "PAPER" && computerChoice === "ROCK"){
        playerScore++;
        return paperWins;
    }

    //player loose
    else if (playerChoice === "ROCK" && computerChoice === "PAPER"){
      computerScore++;
      return rockLose;
    }
    else if (playerChoice === "SCISSORS" && computerChoice === "ROCK"){
      computerScore++;
      return scissorLose;
    }
    else if (playerChoice === "PAPER" && computerChoice === "SCISSORS"){
      computerScore++;
      return paperLose;
    }
    }

function disableBtn() {
        document.getElementById("rock-btn").disabled = true;
        document.getElementById("paper-btn").disabled = true;
        document.getElementById("scissors-btn").disabled = true;
    }

function reset() {
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;

    document.getElementById('player').textContent = "PLAYER CHOOSE : ?";
    document.getElementById('comp').textContent = "COMPUTER CHOOSE : ?";
    document.getElementById('result').textContent = "|";
    document.getElementById('player-score').textContent = "YOUR SCORE : ?";
    document.getElementById('comp-score').textContent = "? : COMPUTER SCORE";
    document.getElementById('game-win').textContent = "";

    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
  
//play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {

        let playerScr = document.getElementById('player-score').textContent = ("YOUR SCORE : " + playerScore);
        let compScr = document.getElementById('comp-score').textContent = (computerScore + " : COMPUTER SCORE");

        //game win report
        if (playerScore === maxScore || computerScore === maxScore) {
            // determine the winner
            let winner = playerScore > computerScore ? "YOU" : "COMPUTER";
            let message = winner + " WIN THE GAME!";
        
            document.getElementById('game-win').textContent = message;
            disableBtn()
          }
    }

//event listener for ROCK button
const rockBtn = document.getElementById("rock-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("PLAYER CHOOSE : " + "ROCK"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("ROCK"));

    let img = document.querySelector("#pl-choice");
    img.src = "imgs/rock.png";

    game()
});

//event listener for PAPER button
const paperBtn = document.getElementById("paper-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("PLAYER CHOOSE : " + "PAPER"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("PAPER"));

    let img = document.querySelector("#pl-choice");
    img.src = "imgs/paper.png";

    game()
});

//event listener for SCISSORS button
const scissorsBtn = document.getElementById("scissors-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("PLAYER CHOOSE : " + "SCISSORS"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("SCISSORS"));

    let img = document.querySelector("#pl-choice");
    img.src = "imgs/scissors.png";

    game()
});

const resetBtn = document.getElementById("reset-btn").addEventListener("click", () => {
    let img = document.querySelector("#pl-choice");
    let compImg = document.querySelector("#comp-choice");
    img.src = "";
    compImg.src = "";
    reset()
});




