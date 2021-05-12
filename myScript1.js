//Script for Rock Paper Scissors Game

const RPS = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return Math.floor(Math.random() * 3);
}

function playerSelection(){
    var choice = prompt("What is your selection? (Rock, Paper, Scissors)");
    //Need error checking here
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

function playARound(playerSel, computerSel) {
    //Rock beats scissors
    //Paper covers rock 
    //Scissors cuts paper

    console.log(playerSel + " " + computerSel);

    if (playerSel == "Rock"){
        if (computerSel == "Paper"){
            computerWin(playerSel, computerSel);
        }
        else if (computerSel == "Scissors"){
            IWin(playerSel, computerSel);
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
        }
        else {
            computerWin(playerSel, computerSel);
        } 
    }
    else { // player selects scissors
        if (computerSel == "Paper"){
            IWin(playerSel, computerSel);
        }
        else if (computerSel == "Scissors"){
            draw();
        }
        else {
            computerWin(playerSel, computerSel);
        }

    }

}

playARound(playerSelection(), RPS[computerPlay()]);

