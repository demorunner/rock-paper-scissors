console.log("Testing");

//computer play random move from choices
function ComputerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    //console.log(getRandomValue);
    if (getRandomValue <= 0.33) {
        //console.log(rock);
        return rock;
    } else if (getRandomValue <= 0.66) {
        //console.log(paper);
        return paper;
    } else {
        //console.log(scissors);
        return scissors;
    }
}

function game() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    while (roundsPlayed < 5){
        roundsPlayed++;
        const computerSelection = ComputerPlay();
        playerSelection = prompt("Player, please type in your selection (Rock, Paper, Scissors)! ");
        console.log(playRound(capitalize(playerSelection), computerSelection));
        console.log("Player win totals " + playerWin);
        console.log("Computer win totals " + computerWin);

        function playRound(firstLetterCap, computerSelection) {

            let tie = "it's a Tie you selected " + firstLetterCap + computerSelection;
            let paperBeatRock = "You Win! You selected " + firstLetterCap + computerSelection;
            let scissorsBeatPaperLoss = "You lose! you selected " + firstLetterCap + computerSelection;
            let paperBeatRockLoss = "You lose! You selected " + firstLetterCap + computerSelection;
            let rockBeatScissors = "You Win! You selected " + firstLetterCap + computerSelection;
            let rockBeatScissorsLoss = "You lose! you selected " + firstLetterCap + computerSelection;
            let ScissorsBeatPaper = "You Win! You selected " +firstLetterCap + computerSelection;
        
            if (firstLetterCap === computerSelection) {
                return tie;
            } else if ((firstLetterCap === " Paper ") && (computerSelection === "Rock" )) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap === " Paper ") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            } else if ((firstLetterCap === " Rock ") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatRockLoss;
            } else if ((firstLetterCap == " Rock ") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            } else if ((firstLetterCap === " Scissors ") && (computerSelection === "Rock")) {
                computerWin++;
                return rockBeatScissorsLoss;
            } else {
                playerWin++;
                return ScissorsBeatPaper;
            }
                
        }
    }

    if (playerWin > computerWin) {
        gameWinner = "YOU WIN!";
    } else if (playerWin === computerWin) {
        gameWinner = "TIE!";
    } else {
        gameWinner = "COMPUTER WINS!";
    }

    //write out the winner on the screen
console.log("The five game winner is:  " + gameWinner);
    
}

// function to format/capitalize the input
function capitalize(playerSelection) {
    let allLowerCase = playerSelection.toLowerCase();
    let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase;
    //console.log(firstLetterCap);
    return firstLetterCap;
}


//function call game
game();