var board = document.getElementById("main");
var tbl = document.createElement("table");
var tbdy = document.createElement('tbody');


let turn = 'X',
    score = {
        X: 0,
        O: 0
    }

const loadBoard = function () {

    tbl.style.width = "500px";
    tbl.appendChild(tbdy);
    for (i = 0; i < 3; i++) {
        for (x = 0; x < 3; x++) {
            let tr = document.createElement('tr');
            tr.setAttribute('class', 'square');
            tbdy.appendChild(tr);
        }
    }
    board.appendChild(tbl);
}

const Game = function () {
    document.querySelectorAll('tr').forEach(function (e) {
        e.addEventListener('click', addGame);
    });
}

const addGame = function () {
    const square = document.querySelectorAll('tr');
    for (var i = 0; i < square.length; i++) {
        square[i].innerHTML = 'X'
    }
}

loadBoard();
Game();