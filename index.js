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
    `player ${this.turn.name}s turn, enter the number of the square you wish to`
  ];

  console.log(this.board)

  this.playTurn = function() {
    return `player ${this.turn.name}, enter a number and hist enter`
  }
}

var game = new Game()

game.playTurn();