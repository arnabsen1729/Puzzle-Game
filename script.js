// let tile_0 = document.getElementById("tile_0");


let tiles = [];
let tilesText = [];
let grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

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
                break;
            case 38:
                // alert('Up key pressed');
                determineMove('N');
                break;
            case 39:
                // alert('Right key pressed');
                determineMove('E');
                break;
            case 40:
                // alert('Down key pressed');
                determineMove('S');
                break;
        }
    };
}

detectKeyPress();