

// Map Structures

class Maze { width = 400; height = 500; }
class Path { width = 20;  height = 20; }
class Wall { width = 20;  height = 20; }
class Spawn{ width = 40;  height = 40; }


// Need to generate maze with portals


const gridWidth = 400 / 10, gridHeight = 500 / 10;

const newRow = "\n", empty = " ", border = "0";

InsertBordersIntoGrid:
let str = ``;
for (let row = 0; row < gridHeight; row++){
    for (let col = 0; col < gridWidth; col++){
        if ( ((col === 0) || (row === 0)) && (str += border) ) {}
        else if ( ((col === gridWidth-1) || (row === gridHeight-1)) && (str += border) ) {}
        else if ( (col !== 0)                && (str += empty) ) {}
    }
    str += newRow;
}

console.log(str);
