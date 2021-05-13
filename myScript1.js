//Script for Rock Paper Scissors Game

const RPS = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return Math.floor(Math.random() * 3);
}

function playerSelection(){
    var choice = prompt("What is your selection? (Rock, Paper, Scissors)");
    choice = capitalize(choice);
    console.log(choice);
    while (choice != "Rock" && choice != "Paper" && choice != "Scissors"){
        console.log("Invalid choice, try again...");
        choice = prompt("What is your selection? (Rock, Paper, Scissors)");
        choice = capitalize(choice);
        console.log(choice);
    }
    return choice;
}

function IWin(playerSel, computerSel){
    console.log("Congrats!! You Win!!");
    console.log(playerSel + " defeats " + computerSel);
}

function computerWin(playerSel, computerSel){
    console.log("Loser! The computer Wins!!!");
    console.log(computerSel + " defeats " + playerSel);
}

function draw(){
    console.log("The game is a draw");
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playARound(playerSel, computerSel) {
    //Rock beats scissors
    //Paper covers rock 
    //Scissors cuts paper

    var winner = 0;
    //default 0 == draw
    //computer 1
    //player 2

    console.log(playerSel + " " + computerSel);

    if (playerSel == "Rock"){
        if (computerSel == "Paper"){
            computerWin(playerSel, computerSel);
            winner = 1;
        }
        else if (computerSel == "Scissors"){
            IWin(playerSel, computerSel);
            winner = 2;
        }
        else {
            draw();
        }
    }
    else if (playerSel == "Paper"){
        if (computerSel == "Paper"){
            draw();
        }
        else if (computerSel == "Scissors"){
            IWin(playerSel, computerSel);
            winner = 2;
        }
        else {
            computerWin(playerSel, computerSel);
            winner = 1;
        } 
    }
    else { // player selects scissors
        if (computerSel == "Paper"){
            IWin(playerSel, computerSel);
            winner = 2;
        }
        else if (computerSel == "Scissors"){
            draw();
        }
        else {
            computerWin(playerSel, computerSel);
            winner = 1;
        }

    }
    return winner;
}

function game(){
    var computerScore = 0;
    var playerScore = 0;

    var roundWinner = 0;
    for(var i = 0; i < 5; i++){
        roundWinner = playARound(playerSelection(), RPS[computerPlay()]);
        if (roundWinner == 1){
            computerScore++;
        }
        else if (roundWinner == 2){
            playerScore++;
        }
        else {
            //Round is a draw, no points, replay round
            i--;
        }
        console.log("Games remaining: " + (5 - i));
    }

    console.log("Final Scores:");
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);



}

game();



