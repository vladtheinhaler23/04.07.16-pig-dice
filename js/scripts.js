//LOGIC

function roll() {
  return Math.floor((Math.random() * 6) + 1);
}

var turnTotal = 0;



//USERINTERFACE

$(document).ready(function() {
  $("#rollDice").click(function(event) {
    event.preventDefault();

    var diceRoll = roll();


    if (diceRoll != 1) {
      var count = turnTotal += diceRoll;
      turnTotal = count;
    } else {
      alert("Sorry, you rolled a 1");
      turnTotal = 0;
    };

    console.log(diceRoll);
    console.log(turnTotal);


  })


})
