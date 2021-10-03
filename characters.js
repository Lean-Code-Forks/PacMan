

window.


class Character {
    speed = {now: 1, eat: .8, empty: 1};
    positon = {x: 0, y: 0};
    img;
    constructor(position){
        if (position) this.position = position;
    }
    move(){
      switch (direction) {
        case "left":  this.position.x--;
        case "right": this.position.x++;
        case "up":    this.position.y--;
        case "down":  this.position.y++;
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
    }
}

new PACMAN({x: 30, y: 30});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
new GHOST({x: 20, y: 20});
