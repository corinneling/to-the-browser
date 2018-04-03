var board = document.getElementById("main");
var tbl = document.createElement("table");
var tbdy = document.createElement('tbody');


let turn = 'X',
    score = {
        X: 0,
        O: 0
    },
    play = [];

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

const addIDs = function() {
    let tr = document.querySelectorAll('tr');
    for(var j = 0; j < tr.length; j++) {
        tr[j].setAttribute('id', `${j}`); 
    } 
}

const addGame = function () {
    let tr = document.querySelectorAll('tr'); 
}

loadBoard();
Game();
addIDs()
