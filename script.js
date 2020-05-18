function computerPlay() {
  // Randomly returns rock, paper, or scissors
  var answer;
  var num = Math.random();
  num *= 3;
  if ( num <= 1 ) {
    answer = "rock";
  } else if ( num > 1 && num <= 2 ) {
    answer = "paper";
  } else {
    answer = "scissors";
  };
  return answer;
}

function playRound(playerSelection, computerSelection) {
  var result;
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result = "tie";
    } else if (computerSelection == "paper") {
      result = "computer";
    } else {
      result = "player";
    };
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "player";
    } else if (computerSelection == "paper") {
      result = "tie";
    } else {
      result = "computer";
    };
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      result = "computer";
    } else if (computerSelection = "paper") {
      result = "player";
    } else {
      result = "tie";
    };
  };
  return result;
  // if (result == "player") {
  //   return "You win! "+ playerSelection + " beats " + computerSelection + ".";
  // } else if (result == "computer") {
  //   return "You lose! " + computerSelection + " beats " + playerSelection + ".";
  // } else {
  //   return "It's a tie! You both chose " + computerSelection + ".";
  // };
};

function game() {
  var i;
  var computerWinCount = 0;
  var playerWinCount = 0;
  for (i=1; i <= 5; i++) {
    var playerInput = window.prompt("Choose rock, paper, or scissors.");
    var computerInput = computerPlay();
    var result = playRound(playerInput, computerInput);
    if (result == "player") {
      playerWinCount++;
      console.log("You win this round! You currently have " + playerWinCount + " points, and the computer has " + computerWinCount + " points.");
    } else if (result == "computer") {
      computerWinCount++;
      console.log("The computer wins this round! You currently have " + playerWinCount + " points, and the computer has " + computerWinCount + " points.");
    } else {
      console.log("It's a tie! You currently have " + playerWinCount + " points, and the computer has " + computerWinCount + " points.");
    };
  };
  if (playerWinCount > computerWinCount) {
    console.log("You win!");
  } else if (computerWinCount) {
    console.log("The computer wins!");
  } else {
    console.log("It's a tie!");
  }
};

game();
