// NO

function Score() {
  this.turnScore = 0;
  this.totalScore = 0
}

Score.prototype.addTotal = function() {
  return this.totalScore + turnScore;
}

Score.prototype.addTurn = function(roll) {
  return this.turnScore + roll;
}
// User Interface
$(document).ready(function() {

  var player = 1;
  var player1 = new Score();
  var player2 = new Score();
  var roll = 0;

    $("#rollDice").click(function(event) {

      roll = Math.floor((Math.random() * 6) + 1)

      if (player === 1) {
        if (roll === 1) {
          player1.turnScore = 0;
          player = 2;
        } else {
          player1.turnScore = player1.addTurn(roll);
        }
      } else {
        if (roll === 1) {
          player2.turnScore = 0;
          player = 1;
        } else {
          player2.turnScore = player2.addTurn(roll);
        }
      }
      console.log(roll);
      console.log(player1.turnScore);
    })

})
