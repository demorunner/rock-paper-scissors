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
    let compDiv = document.getElementById('comp').textContent = ("COMP CHOOSE : " + computerChoice);
    
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

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
  
//play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {

        let playerScr = document.getElementById('player-score').textContent = ("YOUR SCORE : " + playerScore);
        let compScr = document.getElementById('comp-score').textContent = ("COMPUTER SCORE : " + computerScore);

        //game win report
        if (playerScore === maxScore || computerScore === maxScore) {
            // determine the winner
            let winner = playerScore > computerScore ? "YOU" : "COMPUTER";
            let message = winner + " WIN THE GAME!";
        
            // reset the scores
            playerScore = 0;
            computerScore = 0;
        
            // display the winner message
            alert(message + " Do you want to play again?")
            document.getElementById('game-win').textContent = message;
            document.getElementById('player').textContent = "";
            document.getElementById('comp').textContent = "";
            document.getElementById('result').textContent = "";
            document.getElementById('player-score').textContent = "YOUR SCORE : 0";
            document.getElementById('comp-score').textContent = "COMPUTER SCORE : 0";
            document.getElementById('game-win').textContent = "";
            
          }
    }

//event listener for ROCK button
const rockBtn = document.getElementById("rock-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("PLAYER CHOOSE : " + "ROCK"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("ROCK"));
    game()
});

//event listener for PAPER button
const paperBtn = document.getElementById("paper-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("PAPER"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("PAPER"));
    game()
});

//event listener for SCISSORS button
const scissorsBtn = document.getElementById("scissors-btn").addEventListener("click", () => {
    let playerDiv = document.getElementById('player').textContent = ("SCISSORS"); 
    let resultDiv = document.getElementById('result').textContent = (playRound("SCISSORS"));
    game()
});




