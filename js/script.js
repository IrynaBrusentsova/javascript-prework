"use strict"
function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
    }
    printMessage('Moj ruch to: ' + computerMove + '.');

    let playerMove = getMoveName(Number(playerInput));
    printMessage('Twój ruch to: ' + playerMove);

    let argComputerMove = computerMove;
    let argPlayerMove = playerMove;

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrałem!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Wygrałem!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Wygrałem!');
        } else if (argPlayerMove !== '1' || '2' || '3') {
            printMessage('nieznany ruch');
        }
        else { printMessage('Bye!'); }
    }
    displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
