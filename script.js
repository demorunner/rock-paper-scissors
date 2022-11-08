    //gets input from the user
function playerSelection() {
        player = window.prompt("ROCK ? PAPER? or SCISSORS?");
        let playerChoice = player.toUpperCase();
        console.log(playerChoice);
        return playerChoice;
    }

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’    
function computerSelection() {
    let choice = ["ROCK", "PAPER", "SCISSORS"]
    computerChoice = choice[Math.floor(Math.random() * choice.length)]
    console.log(computerChoice);
    return computerChoice;
    }

//responds to wrong selection
function wrongSelection(playerSelection) {
    if ((playerSelection != "ROCK", "PAPER", "SCISSORS")) return "wrong input try again";
    }


let playerScore = 0;
let computerScore = 0;


//plays a single round of Rock Paper Scissors    
function playRound() {

    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
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
    else {
        return console.log(wrongSelection());
    }
    
    }

    
    //play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {

        
    for (let i = 0; i < 5; i++) {

        console.log (playRound(playerSelection, computerSelection));
        console.log ("Your Score " + playerScore);
        console.log("Computer Score " + computerScore);

        //game win report
        while (i >= 4) {

        if (playerScore > computerScore) {

            console.log("You won the game!");
            break;

        }

        else if (computerScore > playerScore) {
            console.log("Computer won the game!");
            break;
        }
            
        }
    }

    }
    
    
game()