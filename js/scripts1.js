// NO

function Score() {
  this.turnScore = 0;
  this.totalScore = 0
}

Score.prototype.addTotal = function(turnScore) {
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
      console.log("your roll:", roll);
      console.log("player1 turn score:", player1.turnScore);
      console.log("player2 turn score:", player2.turnScore);
    });

    $("#hold").click(function(event) {
      if (player === 1) {
        player1.totalScore = player1.addTotal(player1.turnScore);
        player1.turnScore = 0;
        player = 2;
        if (player1.totalScore >= 100) {
          alert("Player One Wins!!");
        }
      } else {
        player2.totalScore = player2.addTotal(player2.turnScore)
        player = 1;
        player2.turnScore = 0;
        if (player2.totalScore >= 100) {
          alert("Player Two Wins :/ ");
        }
      }
      console.log("player 1 total score:", player1.totalScore);
      console.log("player 2 total score:", player2.totalScore);
    });

    $("#newGame").click(function(event) {
      event.preventDefault;
      var response = confirm("Start a new game? You will lose all progress!");
      if (response) {
        location.reload();
      }
    });



});
