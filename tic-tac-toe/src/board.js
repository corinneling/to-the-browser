var board = document.getElementById("main");
var tbl = document.createElement("table");
var tbdy = document.createElement('tbody');

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

module.exports = loadBoard;