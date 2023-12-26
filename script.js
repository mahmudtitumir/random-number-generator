function rollDice() {
  var numDice = document.getElementById("numDice").value;
  var typeDice = document.getElementById("typeDice").value;

  var result = {
    numDice: numDice,
    typeDice: "d" + typeDice,
    total: 0,
    rolls: [],
  };
  var i = 0;
  while (i < numDice) {
    var roll = Math.floor(Math.random() * typeDice) + 1;
    result.total += roll;
    result.rolls.push(roll);
    i++;
  }
  outputResult(result);
}
function outputResult(result) {
  var output = document.getElementById("output");

  output.innerHTML = "<p>Number of Dice: " + result.numDice + "</p>";
  output.innerHTML += "<p>Type of Dice: " + result.typeDice + "</p>";
  output.innerHTML += "<p>Total: " + result.total + "</p>";
  output.innerHTML +=
    "<p>Individual Rolls: " + result.rolls.join(", ") + "</p>";
}
