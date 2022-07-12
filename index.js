function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  function playRound(computerSelection, userSelection) {

    switch(computerSelection.toString()+userSelection.toLowerCase()) {
        case "1rock":
          return "Rock vs rock, tie";
         case "2rock":
          return "You lose, paper beats rock";

        case "3rock":
             return "You win! rock beats scissors";
    case "1scissors":
        return "You lose, rock beats scissors";
    case "2scissors":
        return"You win! Scissors beat paper";
    case "3scissors":
        return "Scissors vs scissors, tie";
    case "1paper":
        return "You win, paper beats rock!";
    case "2paper":
        return "paper vs paper, tie";
    case "3paper":
        return "You lose, scissors beat paper";
    default:
        return "invalid input"
  }
}

function game(){
    let roundsTotal = prompt("How many rounds do you want to play?")
    for (i=0; i > roundsTotal; i++) {
    let userPlay = prompt("Rock, paper or scissors?");
    let computerPlay = randomIntFromInterval(1, 3); // 1 = rock, 2 = paper, 3 = scissors
    console.log(playRound(computerPlay, userPlay))
    }
}