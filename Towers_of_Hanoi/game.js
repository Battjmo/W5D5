// Game.prototype.run = function() {
//   // until disk stack has been moved
//     // prompt player to pick start tower
//     // prompt player to pick end tower
//     // move top disk from start to end if valid    
// };

// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

class Game {
  
  constructor() {
    this.towers = [[3,2,1], [], []];
  }
  
  promptMove(callback) {
    reader.question("Enter start tower: ", function(startTower) {
      reader.question("Enter end tower: ", function(endTower) {
        if (this.isValidMove(startTower, endTower) === true) {
          callback(startTower, endTower);
        }
        else {
          this.promptMove(callback);
        }
        reader.close();
      });
    });  
  }
  
  isValidMove(startTower, endTower) {
    let lastIndexStart = this.towers[startTower].length - 1;
    let lastIndexEnd = this.towers[endTower].length - 1;
    const a = this.towers[startTower].length === 0;
    const b = this.towers[endTower].length === 0;
    if (a === true) {
      return false;
    }
    else if (a === false && b === true) {
      return true;
    }
    const c = this.towers[startTower][lastIndexStart] < this.towers[endTower][lastIndexEnd];
    return c;
  }
  
  move(startTower, endTower) {
    if (this.isValidMove(startTower, endTower)) {
      let disc = this.towers[startTower].pop;
      this.towers[endTower].push(disc);
      return true;
    }
    else {
      return false;
    }
    this.print();
  }
  
  print() {
    console.log(this.towers);
  }
  
  isWon() {
    if ((this.towers[1].length === 3) || this.towers[2].length === 3) {
      return true;
    }
    else {
      return false;
    }
  }
  
  run(completionCallback) {
    while (this.isWon === false) {
      this.promptMove(this.move);
      this.print();
    }
    completionCallback();
  }
}


const game = new Game();

// game.promptMove( (startTower, endTower) => console.log(startTower, endTower));
game.run(() => 'Congratualation');