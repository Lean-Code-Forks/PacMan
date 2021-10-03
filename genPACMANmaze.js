// Map Structures

class Maze { width = 400; height = 500; }
class Path { width = 20;  height = 20; }
class Wall { width = 20;  height = 20; }
class Spawn{ width = 40;  height = 40; }


// Need to generate maze with portals


const gridWidth = 400 / 10, gridHeight = 500 / 10;

const empty = " ", border = "0", ghostSpawnLoc = "1", ghostDoor = "2", dot = "3";

let pacmap = [];

// InsertPerimeterBordersIntoGrid:
    for (let row = 0; row < gridHeight; row++){
        for (let col = 0; col < gridWidth; col++){
            /*border*/ if ( (col === 0) || (row === 0) ) pacmap.push(border);
            /*border*/ else if ( (col === gridWidth-1) || (row === gridHeight-1) ) pacmap.push(border);
            /*empty*/  else if ( (col !== 0) ) pacmap.push(empty);
        }
    }

// InsertGhostBase:
    let ghostBase = [
        0,0," ",0,0,
        0,1,1,1,0,
        0,1,1,1,0,
        0,0,0,0,0
    ];
    for (let row = (gridHeight / 2 - 2); row < (gridHeight / 2 + 2); row++){
        for (let col = (gridWidth / 2 - 2); col < (gridWidth / 2 + 2 + 1); col++){
            idx = (row * gridWidth + col);
            pacmap[idx] = ghostBase.shift();
        }
    }

// InsertInnerBorders:
    const total_grid_space = gridWidth * gridHeight;
    
    const gridPerimeter = 2 * (gridWidth + gridHeight);

    const remaining_space = total_grid_space - gridPerimeter;
    
    let border_max_space  = remaining_space / 3; // this is flawed, will fail on small dimensional grid
        
    randomInnerBorders:        
        pacmap.forEach((element,index)=>{
            if ((element === empty) && (Math.random() > 0.7)) {
                pacmap[index] = border  
            }
        });
// InsertFruit:
        
        pacmap.forEach((element,index)=>{ if (element === empty) pacmap[index] = dot;});
