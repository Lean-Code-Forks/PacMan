

window.onkeydown = function(evt){
    // probably need to insert a rate limiter because the character only moves so fast    
    if      (evt.keyCode === 37) pacman.move("left");
    else if (evt.keyCode === 38) pacman.move("up");
    else if (evt.keyCode === 39) pacman.move("right");
    else if (evt.keyCode === 40) pacman.move("down");
}


class Character {
    speed = {now: 1, eat: .8, empty: 1};
    positon = {x: 0, y: 0};
    img;
    constructor(position){
        if (position) this.position = position;
    }
    move(){
      switch (direction) {
        case "left":  this.position.x--; case "up":   this.position.y--;
        case "right": this.position.x++; case "down": this.position.y++;
        default throw new Error();
      }
    }
}
class PACMAN extends Character {
    img = ["yellow"]; constructor() {
        super(this);
    }
}
class GHOST extends Character { // ghosts speeds constant // all ghosts must be different colors
    img = ["red","blue","pink","yellow","orange","green"]
    constructor(){
        super(this);
        this.speed = {now:1, eat: 1, empty:1}
        this.AI();
    }
    AI(){
        this.plotRouteToPacman();
        this.take4PacesToPacman();
    }
    plotRouteToPacman(){
            // shortest path to pacman
        
            if (element !== border) plottable
            
        
    }
}

new PACMAN({x: 30, y: 30});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
