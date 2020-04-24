// let tile_0 = document.getElementById("tile_0");


let tiles = [];
let tilesText = [];
let grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const result = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

var MOVES = 0;

function updateMoves() {
    let movesNumber = document.getElementById("movesNumber");
    movesNumber.innerHTML = MOVES;
}

function captureTiles() {
    tiles = [];
    tilesText = [];
    for (var index = 0; index <= 8; index++) {
        const tileIdText = "tile_" + index;
        const textIdText = "text_" + index;
        let tileCapture = document.getElementById(tileIdText);
        let textCapture = document.getElementById(textIdText);
        tiles.push(tileCapture);
        tilesText.push(textCapture);
    }
}

function moveDown(index) {
    captureTiles();
    var tile_y = parseFloat(tiles[index].getAttributeNS(null, 'y'));
    tiles[index].setAttributeNS(null, 'y', tile_y + 160);

    var text_y = parseFloat(tilesText[index].getAttributeNS(null, 'y'));
    tilesText[index].setAttributeNS(null, 'y', text_y + 160);




    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == index) {

                //swapping the grid values
                var temp = grid[row][col];
                grid[row][col] = grid[row + 1][col];
                grid[row + 1][col] = temp;

                row = 2;
                col = 2;
            }

        }
    }
    // gameOver();
}

function moveUp(index) {
    captureTiles();
    var tile_y = parseFloat(tiles[index].getAttributeNS(null, 'y'));
    tiles[index].setAttributeNS(null, 'y', tile_y - 160);

    var text_y = parseFloat(tilesText[index].getAttributeNS(null, 'y'));
    tilesText[index].setAttributeNS(null, 'y', text_y - 160);

    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == index) {

                //swapping the grid values
                var temp = grid[row][col];
                grid[row][col] = grid[row - 1][col];
                grid[row - 1][col] = temp;

                row = 2;
                col = 2;
            }

        }
    }
    // gameOver();

}

function moveLeft(index) {
    captureTiles();
    var tile_x = parseFloat(tiles[index].getAttributeNS(null, 'x'));
    tiles[index].setAttributeNS(null, 'x', tile_x - 160);

    var text_x = parseFloat(tilesText[index].getAttributeNS(null, 'x'));
    tilesText[index].setAttributeNS(null, 'x', text_x - 160);

    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == index) {

                //swapping the grid values
                var temp = grid[row][col];
                grid[row][col] = grid[row][col - 1];
                grid[row][col - 1] = temp;

                row = 2;
                col = 2;
            }

        }
    }
    // gameOver();
}

function moveRight(index) {
    captureTiles();
    var tile_x = parseFloat(tiles[index].getAttributeNS(null, 'x'));
    tiles[index].setAttributeNS(null, 'x', tile_x + 160);

    var text_x = parseFloat(tilesText[index].getAttributeNS(null, 'x'));
    tilesText[index].setAttributeNS(null, 'x', text_x + 160);

    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == index) {

                //swapping the grid values
                var temp = grid[row][col];
                grid[row][col] = grid[row][col + 1];
                grid[row][col + 1] = temp;

                return;
            }

        }
    }
    // gameOver();
}


function determineMove(direction) {
    if (direction == 'N') {
        for (var row = 0; row <= 2; row++) {
            for (var col = 0; col <= 2; col++) {
                if (grid[row][col] == 8) {
                    if (row != 2) {
                        moveUp(grid[row + 1][col]);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
    } else if (direction == 'S') {
        for (var row = 0; row <= 2; row++) {
            for (var col = 0; col <= 2; col++) {
                if (grid[row][col] == 8) {
                    if (row != 0) {
                        moveDown(grid[row - 1][col]);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
    } else if (direction == 'E') {
        for (var row = 0; row <= 2; row++) {
            for (var col = 0; col <= 2; col++) {
                if (grid[row][col] == 8) {
                    if (col != 0) {
                        moveRight(grid[row][col - 1]);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
    } else if (direction == 'W') {
        for (var row = 0; row <= 2; row++) {
            for (var col = 0; col <= 2; col++) {
                if (grid[row][col] == 8) {
                    if (col != 2) {
                        moveLeft(grid[row][col + 1]);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
    }
}


function detectKeyPress() {
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                // alert('Left key pressed');
                determineMove('W');
                MOVES = MOVES + 1;
                updateMoves();
                gameOver();
                break;
            case 38:
                // alert('Up key pressed');
                determineMove('N');
                MOVES = MOVES + 1;
                updateMoves();
                gameOver();
                break;
            case 39:
                // alert('Right key pressed');
                determineMove('E');
                MOVES = MOVES + 1;
                updateMoves();
                gameOver();
                break;
            case 40:
                // alert('Down key pressed');
                determineMove('S');
                MOVES = MOVES + 1;
                updateMoves();
                gameOver();
                break;
        }
    };
    // gameOver();
}

function clickMove(index) {
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == index) {
                if (row != 2 && grid[row + 1][col] == 8) {
                    determineMove('S');
                    return;
                } else if (row != 0 && grid[row - 1][col] == 8) {
                    determineMove('N');
                    return;
                } else if (col != 0 && grid[row][col - 1] == 8) {
                    determineMove('W');
                    return;
                } else if (col != 2 && grid[row][col + 1] == 8) {
                    determineMove('E');
                    return;
                }
            }
        }
    }
}

function detectClicks() {
    captureTiles();
    for (var i = 0; i <= 7; i++) {
        tiles[i].addEventListener("click", (event) => {
            const index = parseInt(event.target.id[5]);
            clickMove(index);
            MOVES = MOVES + 1;
            updateMoves();
            gameOver();
        });
    }
    for (var i = 0; i <= 7; i++) {
        tilesText[i].addEventListener("click", (event) => {
            const index = parseInt(event.target.id[5]);
            clickMove(index);
            MOVES = MOVES + 1;
            updateMoves();
            gameOver();
        });
    }
    // gameOver();
}

function stopDetection() {
    document.onkeydown = function () { };
}

const SCRAMBLE_CNT = 200;

function scrambleTiles() {

    for (var i = 0; i < SCRAMBLE_CNT; i++) {
        var rnd = Math.floor(Math.random() * 4);
        if (rnd == 0) determineMove('N');
        else if (rnd == 1) determineMove('S');
        else if (rnd == 2) determineMove('W');
        else if (rnd == 3) determineMove('E');
    }
}

function gameOver() {
    var count = 0;
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (grid[row][col] == result[row][col]) count++;
        }
    }
    console.log(count);
    if (count >= 8) {

        var endScreen = document.getElementById("endScreen")
        endScreen.classList.remove('hidden');
        endScreen.style.zIndex = 2;
        stopDetection();
        var scramble = document.querySelector('button');
        scramble.disabled = false;
    }
}

function gameLoop() {
    scrambleTiles();
    MOVES = 0;
    updateMoves();
    var endScreen = document.getElementById("endScreen")
    endScreen.classList.add('hidden');
    var endScreen = document.getElementById("endScreen")
    endScreen.style.zIndex = -1;
    var scramble = document.querySelector('button');
    scramble.disabled = true;
    detectKeyPress();
    detectClicks();
}

var endScreen = document.getElementById("endScreen")
endScreen.classList.add('hidden');
var endScreen = document.getElementById("endScreen")
endScreen.style.zIndex = -1;


var scramble = document.getElementById("scramble-btn");
scramble.addEventListener('click', gameLoop);

