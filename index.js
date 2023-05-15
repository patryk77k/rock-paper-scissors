const displayComputerChoice = document.querySelector(".computerChoice");
const displayUserChoice = document.querySelector(".userChoice");
const result = document.querySelector(".result");
const userChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;

userChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    displayUserChoice.innerHTML = userChoice;
    generateRandomNumber();
    getResult();
  })
);

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "rock";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  displayComputerChoice.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
    console.log("It's a draw!");
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("user won");
  }
};
