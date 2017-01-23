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
    ['tic-tac-toe']
  ];

  this.playTurn = function(sameTurn) {
    if ( sameTurn === undefined ) {
      console.log(this.board);
    }
    console.log(`player ${this.turn.name}s turn, enter the number of the square you wish to select (you are ${this.turn.marker})`);

    rl.question('Please select a number that is still available: ', (answer) => {

      answer = Number(answer);

      if ( answer < 1 || answer > 9 || !Number.isInteger(answer) ) {

        console.log(' ');
        console.log('WARNING: you must enter a number that is on the board');
        console.log(' ');

        this.playTurn(true);

      } else {

        if ( answer <= 3 ) {
          row = this.board[0];
        } else if ( answer <= 6 ) {
          row = this.board[1];
          answer -= 3;
        } else if ( answer <= 9 ) {
          row = this.board[2];
          answer -= 6;
        }

        if ( row[answer - 1] === 'O' || row[answer - 1] === 'X') {
          console.log(' ');
          console.log('WARNING: you must enter a square that has not been taken');
          console.log(' ');
          return this.playTurn(true);
        } else {
          if ( answer % 3 === 0 ) {
            row[answer - 1] = this.turn.marker;
          } else {
            row[(answer % 3) - 1] = this.turn.marker;
          }

        }

        // check to see if there is a winner
        // if ( ) {

        // }

        if ( this.turn.marker === 'O' ) {
          this.turn = this.players[0];
        } else {
          this.turn = this.players[1];
        }

        this.playTurn();
      }

    });
  }
}

var game = new Game()

game.playTurn();