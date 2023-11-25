/* Variables definition */
const choices = ["✊", "🤚", "✌️"];
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const resultArea = document.querySelector("#result-area");
const playBtn = document.querySelector("#play-btn");

/* Functions */
function generateChoice() {
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function insertHTML(choice1, choice2, result) {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
}

function decideWinner(a, b) {
  if (a === b) {
    return "Draw";
  } else if ((a === "✊" && b === "✌️") || (a === "🤚" && b === "✊") || (a === "✌️" && b === "🤚")) {
    return "Player 1 win!!!";
  } else {
    return "Player 2 win!!!";
  }
}

function play() {
  let choice1 = generateChoice();
  let choice2 = generateChoice();
  let result = decideWinner(choice1, choice2);

  insertHTML(choice1, choice2, result);
}

/* Events */
playBtn.addEventListener("click", play);
