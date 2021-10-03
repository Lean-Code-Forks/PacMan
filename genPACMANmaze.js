// Map Structures

class Maze { width = 400; height = 500; }
class Path { width = 20;  height = 20; }
class Wall { width = 20;  height = 20; }
class Spawn{ width = 40;  height = 40; }


// Need to generate maze with portals


const gridWidth = 400 / 10, gridHeight = 500 / 10;

const empty = " ", border = "0", ghostSpawnLoc = "1", dot = "2";

let pacmap = [];

// InsertPerimeterBordersIntoGrid:
    for (let row = 0; row < gridHeight; row++){
        for (let col = 0; col < gridWidth; col++){
            /*border*/ if ( (col === 0) || (row === 0) ) pacmap.push(border);
            /*border*/ else if ( (col === gridWidth-1) || (row === gridHeight-1) ) pacmap.push(border);
            /*empty*/  else if ( (col !== 0) ) pacmap.push(empty);
        }
    }
    console.log(pacmap);

// InsertGhostBase:
    const row = Math.random(), col = Math.random();
    const rowT = Math.round(row * (gridHeight - 3));
    const colL = Math.round(col * (gridWidth  - 3));
    
    for (let row = rowT; row < (rowT + 3); row++) {
        for (let col = colL; col < colL; col++) {
            
            idx = gridWidth * row + col 
                       
            /*border*/ if ( (col === 0) || (row === 0)) pacmap[idx] = border;
            /*border*/ else if ( (col === gridWidth-1) || (row === gridHeight-1) ) pacmap[idx] = border;
            /*ghostSpawn*/  else if ( (col !== 0) ) pacmap[idx] = ghostSpawnLoc;
                
                
        }
    }

// // InsertInnerBorders:
    
//     const total_grid_space = gridWidth * gridHeight;
    
//     const gridPerimeter = 2 * (gridWidth + gridHeight);

//     const remaining_space = total_grid_space - gridPerimeter;
    
//     let border_max_space  = remaining_space / 3; // this is flawed, will fail on small dimensional grid
        
// //     randomInnerBorders:

//         pacmap.forEach(element=>{ (element === empty) && (Math.random() > 0.5) && (element = border) && (border_max_space--)});

// // InsertFruit:
        
//         pacmap.forEach(element=>{ if (element === empty) element = dot;});
