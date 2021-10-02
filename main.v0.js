

// Map Structures

class Scenes {
    menu
    game
    gameover
}

class Menu {
    players = [1,2];
}

class Clock      {  }
class ScoreBoard {  }
class Health {}

class Maze { width = 400; height = 500; }
class Path { width = 20;  height = 20; }
class Wall { width = 20;  height = 20; }
class Spawn{ width = 40;  height = 40; }

class Character {}
  class PACMAN extends Character {}
  class GHOST extends Character {}

class Edible {}
  class Dot extends Edible {}
  class DOT extends Edible {}
  class Apple extends Edible {}
  class Banana extends Edible {}
  class Orange extends Edible {}
  class Watermelon extends Edible {}

ghostSpeed: 0.95,
ghostTunnelSpeed: 0.5,
playerSpeed: 1,
dotEatingSpeed: 0.87,
ghostFrightSpeed: 0.6,
playerFrightSpeed: 1,
dotEatingFrightSpeed: 0.87,
elroyDotsLeftPart1: 80,
elroySpeedPart1: 1,
elroyDotsLeftPart2: 40,
elroySpeedPart2: 1.05,
frightTime: 3,
frightBlinkCount: 5,
fruit: 8,
fruitScore: 5E3,
ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
penForceTime: 3,
penLeavingLimits: [0, 0, 0, 0]
