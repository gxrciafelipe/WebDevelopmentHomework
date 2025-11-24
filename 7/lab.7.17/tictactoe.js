let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
   MORE_MOVES_LEFT: 1,
   HUMAN_WINS: 2,
   COMPUTER_WINS: 3,
   DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Setup the click event for the "New game" button
   const newBtn = document.getElementById("newGameButton");
   newBtn.addEventListener("click", newGame);

   // Create click-event handlers for each game board button
   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.addEventListener("click", function () { boardButtonClicked(button); });
   }

   // Start a new game
   newGame();
}

function getGameBoardButtons() {
   return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
   const buttons = getGameBoardButtons();
   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
   ];

   for (let indices of possibilities) {
      if (buttons[indices[0]].innerHTML !== "" &&
         buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
         buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {

         return buttons[indices[0]].innerHTML === "X" ? gameStatus.HUMAN_WINS : gameStatus.COMPUTER_WINS;
      }
   }

   for (let button of buttons) {
      if (button.innerHTML !== "X" && button.innerHTML !== "O") {
         return gameStatus.MORE_MOVES_LEFT;
      }
   }

   return gameStatus.DRAW_GAME;
}

function newGame() {
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.textContent = "";
      button.className = "";
      button.disabled = false;
   }

   playerTurn = true;
   document.getElementById("turnInfo").textContent = "Your turn";
}

function boardButtonClicked(button) {
   if (!playerTurn) return;

   button.textContent = "X";
   button.classList.add("x");
   button.disabled = true;

   switchTurn();
}

function switchTurn() {
   const status = checkForWinner();
   const turnInfo = document.getElementById("turnInfo");

   if (status === gameStatus.MORE_MOVES_LEFT) {
      playerTurn = !playerTurn;

      if (!playerTurn) {
         // Computer turn after 1 second
         computerMoveTimeout = setTimeout(makeComputerMove, 1000);
         turnInfo.textContent = "Computer's turn";
      } else {
         turnInfo.textContent = "Your turn";
      }
   } else {
      playerTurn = false;
      if (status === gameStatus.HUMAN_WINS) turnInfo.textContent = "You win!";
      else if (status === gameStatus.COMPUTER_WINS) turnInfo.textContent = "Computer wins!";
      else turnInfo.textContent = "Draw game";
   }
}

function makeComputerMove() {
   const buttons = Array.from(getGameBoardButtons()).filter(btn => btn.textContent === "");
   if (buttons.length === 0) return;

   const randomIndex = Math.floor(Math.random() * buttons.length);
   const button = buttons[randomIndex];
   button.textContent = "O";
   button.classList.add("o");
   button.disabled = true;

   switchTurn();
}
