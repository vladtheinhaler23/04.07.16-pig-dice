//LOGIC

function roll() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player(name, turn) {
  this.name = name;
  this.turn = turn;
}

Player.prototype.grandTotal = function(turnTotal) {
  this.grandTotal += turnTotal;
}
//USERINTERFACE

$(document).ready(function() {

  var turnTotal = 0;
  var anthony = new Player("#", turnTotal);

  $("#rollDice").click(function(event) {
    event.preventDefault();

    var diceRoll = roll();



    if (diceRoll != 1) {
      var count = turnTotal += diceRoll;
      turnTotal = count;
    } else {
      turnTotal = 0;
    };

    console.log(diceRoll);
    console.log(turnTotal);

  })

  $("#hold").click(function(event) {
      event.preventDefault();

      if (turnTotal === 0) {
        alert("Please roll the dice.");
      } else {
        anthony.grandTotal(turnTotal);
      }

    console.log(anthony.grandTotal);


    })




})
