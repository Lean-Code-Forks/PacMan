

// Map Structures

class Maze { width = 400; height = 500; }
class Path { width = 20;  height = 20; }
class Wall { width = 20;  height = 20; }
class Spawn{ width = 40;  height = 40; }


// Need to generate maze with portals


const gridWidth = 400 / 10, gridHeight = 500 / 10;

const newRow = "\n", empty = " ", border = 0;

let str = ``;
for (let row = 0; row < gridHeight; row++){
    str += newRow;
    for (let col = 0; col < gridWidth; col++){
        (col === 0) || (row === 0) && str += border
        (col !== 0)                && str += empty;
    }
}

console.log(str);
