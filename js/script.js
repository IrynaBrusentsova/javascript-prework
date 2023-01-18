"use strict"
let myBills = 1;
let compBills = 1;
function playGame(playerInput) {
    clearMessages();
    
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'rock';
        } else if (argMoveId == 2) {
            return 'paper';
        } else if (argMoveId == 3) {
            return 'scissors';
        }
    }
    printMessage('My move: ' + computerMove + '.');

    const playerMove = getMoveName(+(playerInput));
    printMessage('Your turn: ' + playerMove + '.');

    const argComputerMove = computerMove;
    const argPlayerMove = playerMove;

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'rock' && argPlayerMove == 'paper') {
            printMessage('You win!Your bills:' + myBills++);
        }
        else if (argComputerMove == 'rock' && argPlayerMove == 'scissors') {
            printMessage('Computer won!Computer bills:'+ compBills++);
        } else if (argComputerMove == 'rock' && argPlayerMove == 'rock') {
            printMessage('Dead heat!');
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'paper') {
            printMessage('Computer won!Computer bills:'+ compBills++);
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'scissors') {
            printMessage('Dead heat!');
        } else if (argComputerMove == 'scissors' && argPlayerMove == 'rock') {
            printMessage('You win!Your bills:' + myBills++);
        } else if (argComputerMove == 'paper' && argPlayerMove == 'paper') {
            printMessage('Dead heat!');
        } else if (argComputerMove == 'paper' && argPlayerMove == 'scissors') {
            printMessage('You win! Your bills:' + myBills++);
        } else if (argComputerMove == 'paper' && argPlayerMove == 'rock') {
            printMessage('Computer won!Computer bills:'+ compBills++);
        } else if (argPlayerMove !== '1' || '2' || '3') {
            printMessage('nieznany ruch');
        }
        else { printMessage('Bye!'); }
    }
    displayResult(argComputerMove, argPlayerMove);
}

const playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function () {
    playGame(1);
});
const playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function () {
    playGame(2);
});
const playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function () {
    playGame(3);
});

