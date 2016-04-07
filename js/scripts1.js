// NO

function Score() {
  this.turnScore = 0;
  this.totalScore = 0
}

Score.prototype.addTotal = function(turnScore) {
  return this.totalScore + turnScore;
}

Score.prototype.addTurn = function(roll1, roll2) {
  return this.turnScore + roll1 + roll2;
}
// User Interface
$(document).ready(function() {

  var player = 1;
  var player1 = new Score();
  var player2 = new Score();
  var roll1 = 0;
  var roll2 = 0;

    $("#rollDice").click(function(event) {

      roll1 = Math.floor((Math.random() * 6) + 1)
      roll2 = Math.floor((Math.random() * 6) + 1)

      if (player === 1) {
        if (roll1 === 1 && roll2 === 1) {
          player1.totalScore = 0;
          player = 2;
        } else if (roll1 === 1 || roll2 === 1) {
          player1.turnScore = 0;
          player = 2;
        } else {
          player1.turnScore = player1.addTurn(roll1, roll2);
        }
      } else {
        if (roll1 === 1 && roll2 === 1)  {
          player2.totalScore = 0;
          player = 1;
        } else if (roll1 === 1 || roll2 === 1) {
          player2.turnScore = 0;
          player = 1;
        } else {
          player2.turnScore = player2.addTurn(roll1, roll2);
        }
      }
      console.log("your roll:", roll1, roll2);
      console.log("player1 turn score:", player1.turnScore);
      console.log("player2 turn score:", player2.turnScore);
      console.log("player 1 total score:", player1.totalScore);
      console.log("player 2 total score:", player2.totalScore);
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
