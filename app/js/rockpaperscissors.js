  ////////////////////////////////////////////////
  /*   Provided Code - Please Don't Edit   */
  ////////////////////////////////////////////////
  'use strict';

  function getInput() {
      console.log("Please choose either 'rock', 'paper', or 'scissors'.");
      return prompt();
  }
  function randomPlay() {
      var randomNumber = Math.random();
      if (randomNumber < 0.33) {
          return "rock";
      } else if (randomNumber < 0.66) {
          return "paper";
      } else {
          return "scissors";
      }
  }
  ////////////////////////////////////////////////
  /*           Write Your Code Below            */
  ////////////////////////////////////////////////
  function getPlayerMove(move) {
      if (move === null) {
          move = getInput();
      } else {
        move = move;
      }
    return move;
  }

  function getComputerMove(move) {
      if (move === null) {
          move = randomPlay();
      } else {
        move = move;
      }
    return move;
  }

  function getWinner(playerMove,computerMove) {
      var winner;
      playerMove = getPlayerMove();
      computerMove = getComputerMove();
      if (playerMove == "rock") {
          switch (computerMove) {
              case "rock":
                  winner = 'tie';
              break;
              case "paper":
                  winner = 'computer';
              break;
              case "scissors":
                  winner = 'player';
              break;}
      } else if (playerMove == "paper") {
          switch (computerMove) {
              case "rock":
                  winner = 'player';
              break;
              case "paper":
                  winner = 'tie';
              break;
              case "scissors":
                  winner = 'computer';
              break;}
      } else if (playerMove == "scissors") {
          switch (computerMove) {
              case "rock":
                  winner = 'computer';
              break;
              case "paper":
                  winner = 'player';
              break;
              case "scissors":
                  winner = 'tie';
              break;}
      }
      return winner
  }

  function playToFive() {
      console.log("Let's play Rock, Paper, Scissors");
      var playerWins = 0;
      var computerWins = 0;
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      while (playerWins < 5 && computerWins < 5) {
        var winner = getWinner();
        if (winner === 'player') {
            playerWins++;
            if (playerWins === 5) {
                console.log("Congratulations, you won the series!  The final score was " + playerWins + " to " + computerWins);
                } else {
                  console.log('You chose ' + playerMove + ' while the computer chose ' + computerMove);
                  console.log("You won the round!  You've won " + playerWins + " rounds, and the computer has won " + computerWins + " rounds");
            }
        }
        if (winner === 'computer') {
            computerWins++;
            if (computerWins === 5) {
                console.log("You have lost the series :(  The final score was " + playerWins + " to " + computerWins);
                } else {
                  console.log('You chose ' + playerMove + ' while the computer chose ' + computerMove);
                  console.log("You lost the round.  You've won " + playerWins + " rounds, and the computer has won " + computerWins + " rounds");
            }
        if (winner === 'tie') {
            console.log("You tied this round")
        }
      }
    }
    return [playerWins, computerWins];
  }

  playToFive();
