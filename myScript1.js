//Script for Rock Paper Scissors Game

const RPS = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return Math.floor(Math.random() * 3);
}

console.log(computerPlay());
console.log(computerPlay());

