let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win (userChoice, computerChoice) {
  const smallUserWord = "player 1".fontsize(6);
  const smallComputerWord = "computer".fontsize(6);
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord} - ${convertToWord(userChoice)} 
                        <p></p>
                        <br>
                        <p></p>
                        beats
                        <p></p>
                        <br>
                        ${smallComputerWord} - ${convertToWord(computerChoice)}
                        <p></p>
                        <br>
                        <p></p>
                        YOU WON!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 800);
}



function lose (userChoice, computerChoice) {
  const smallUserWord = "player 1".fontsize(6);
  const smallComputerWord = "computer".fontsize(6);
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${smallUserWord} - ${convertToWord(userChoice)} 
                        <p></p>
                        <br>
                        <p></p>
                        loses to
                        <p></p>
                        <br>
                        ${smallComputerWord} - ${convertToWord(computerChoice)}
                        <p></p>
                        <br>
                        <p></p>
                        YOU LOST!
                        `;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 800);
}

function draw (userChoice, computerChoice) {
  const smallUserWord = "player 1".fontsize(6);
  const smallComputerWord = "computer".fontsize(6);
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${smallUserWord} - ${convertToWord(userChoice)} 
                        <p></p>
                        <br>
                        <p></p>
                        draws with
                        <p></p>
                        <br>
                        ${smallComputerWord} - ${convertToWord(computerChoice)}
                        <p></p>
                        <br>
                        <p></p>
                        TIE GAME!`;
  userChoice_div.classList.add('amber-glow');
  setTimeout(() => userChoice_div.classList.remove('amber-glow'), 800);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
