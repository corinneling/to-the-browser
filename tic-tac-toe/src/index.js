const loadBoard = require('./board.js');
loadBoard();

let turn = "X";

const Game = function () {
    let tr = document.querySelectorAll('tr');
    for (j = 0; j < tr.length; j++) {
        tr[j].setAttribute('id', `${j}`);
        tr[j].addEventListener('click', startGame);
    }
}

const startGame = function (e) {
    if (e.target && e.target.nodeName == "TR") {
        let targetElement = document.getElementById(e.target.id);
        if ((targetElement.className).indexOf("disabled") == -1) {
            targetElement.innerHTML = turn;
            targetElement.classList.add('disabled');
            turn = turn === "X" ? "O" : "X";
        }
    }
}

Game();