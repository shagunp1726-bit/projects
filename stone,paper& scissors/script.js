let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  // console.log(choice);
  const genCompChoice = () => {
    // rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
  const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw!";
  };
  const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
      console.log("You win!");
      msg.innerText = "You win!";
      msg.style.backgroundColor = "green"
    } else {
        compScore ++;
        compScorepara.innerText = compScore;
      console.log("You lose!");
      msg.innerText = "You lose!";
      msg.style.backgroundColor = "red"

    }
  };
  const playGame = (userChoice) => {
    console.log("userchoice ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice ", compChoice);

    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin);
    }
  };
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
