function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let computerPlay = randomIntFromInterval(1, 3); // 1 = rock, 2 = paper, 3 = scissors

  let userPlay = prompt("Rock, paper or scissors?");

  let match = computerPlay.toString()+userPlay.toLowerCase();
  
  switch(match) {
    case "1rock":
        console.log("Rock vs rock, tie");
        break;
    case "2rock":
        console.log("You lose, paper beats rock");
        break;
    case "3rock":
        console.log("You win! rock beats scissors");
        break;
    case "1scissors":
        console.log("You lose, rock beats scissors");
        break;
    case "2scissors":
        console.log("You win! Scissors beat paper");
        break;
    case "3scissors":
        console.log("Scissors vs scissors, tie");
        break;
    case "1paper":
        console.log("You win, paper beats rock!");
        break;
    case "2paper":
        console.log("paper vs paper, tie");
        break;
    case "3paper":
        console.log("You lose, scissors beat paper");
        break;
    default:
        console.log("invalid input")
  }