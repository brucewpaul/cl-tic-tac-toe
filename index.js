const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function(player1, player2) {

  this.players = [
    {
      name:'one',
      marker: 'X'
    },
    {
      name: 'two',
      marker: 'O'
    }
  ]

  this.turn = this.players[0];

  this.board = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    `player ${this.turn.name}s turn, enter the number of the square you wish to (you are ${this.turn.marker})`
  ];

  console.log(this.board)

  this.playTurn = function() {
    rl.question('Please select a number that is still available; ', (answer) => {
      answer = parseInt(answer)
      if ( answer < 1 || answer > 9 ) {
        this.playTurn();
      }

      rl.close();
    });
  }
}

var game = new Game()

game.playTurn();