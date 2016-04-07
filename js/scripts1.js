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
  $(".buttons1").show();
  $(".buttons2").show();

    $(".rollDice").click(function(event) {

      roll1 = Math.floor((Math.random() * 6) + 1);
        $("#displayDie1").text(roll1);
      roll2 = Math.floor((Math.random() * 6) + 1);
        $("#displayDie2").text(roll2);

        $("#displayTotal1").text(player1.totalScore);
        $("#displayTotal2").text(player2.totalScore);
        $("#displayTurn1").text(player1.turnScore);
        $("#displayTurn2").text(player2.turnScore); // Solves layout issue
                                                // when there is no value yet

      if (player === 1) {
        $(".buttons2").hide();
        if (roll1 === 1 && roll2 === 1) {
          player1.totalScore = 0;
          player = 2;
          $("#displayTotal1").text(player1.totalScore);
          $(".buttons1").hide();
          $(".buttons2").show();
        } else if (roll1 === 1 || roll2 === 1) {
          player1.turnScore = 0;
          player = 2;
          $("#displayTurn1").text(player1.turnScore);
          $(".buttons1").hide();
          $(".buttons2").show();
        } else {
          player1.turnScore = player1.addTurn(roll1, roll2);
          $("#displayTurn1").text(player1.turnScore);
        }
      } else {

        if (roll1 === 1 && roll2 === 1)  {
          player2.totalScore = 0;
          player = 1;
          $("#displayTotal2").text(player2.totalScore);
          $(".buttons2").hide();
          $(".buttons1").show();
        } else if (roll1 === 1 || roll2 === 1) {
          player2.turnScore = 0;
          player = 1;
          $("#displayTurn2").text(player2.turnScore);
          $(".buttons2").hide();
          $(".buttons1").show();
        } else {
          player2.turnScore = player2.addTurn(roll1, roll2);
          $("#displayTurn2").text(player2.turnScore);
        }
      }
      console.log("your roll:", roll1, roll2);
      console.log("player1 turn score:", player1.turnScore);
      console.log("player2 turn score:", player2.turnScore);
      console.log("player 1 total score:", player1.totalScore);
      console.log("player 2 total score:", player2.totalScore);
    });

    $(".hold").click(function(event) {
      if (player === 1) {
        player1.totalScore = player1.addTotal(player1.turnScore);
        player1.turnScore = 0;
        player = 2;
        $(".buttons1").hide();
        $(".buttons2").show();
        $("#displayTotal1").text(player1.totalScore);
        if (player1.totalScore >= 100) {
          $("#win-condition1").show();
          $(".gameBoard").hide();

        }
      } else {
        player2.totalScore = player2.addTotal(player2.turnScore)
        player = 1;
        player2.turnScore = 0;
        $("#displayTotal2").text(player2.totalScore);
        $(".buttons2").hide();
        $(".buttons1").show();
        if (player2.totalScore >= 100) {
          $("#win-condition2").show();
          $(".gameBoard").hide();
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
    $("#play").click(function(event) {
      event.preventDefault;
      $(".game").show();
      $(".gameBoard").show();
      $("#intro").hide()
    });



});
