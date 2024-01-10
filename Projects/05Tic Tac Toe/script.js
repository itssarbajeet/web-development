let user1 = window.prompt("Enter the first user name: ");
let user2 = window.prompt("Enter the Second user name: ");
user1 = user1.toUpperCase();
user2 = user2.toUpperCase();
document.getElementById("name1").innerHTML = "User 1 : " + user1;
document.getElementById("name2").innerHTML = "User 2 : " + user2;

let currentPlayer = "X";
let gameOver = false;

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.querySelector(".turn").textContent = `It is ${currentPlayer === "X" ? user1 : user2}'s turn`;
}

function addImageToButton(btnId) {
  const button = document.getElementById(btnId);

  if (button.value === "" && !gameOver) {
    button.value = currentPlayer;
    button.style.color = "black";

    if (currentPlayer === "O") {
    } else {
      button.style.background = "none";
    }
    button.disabled = true;

    if (checkWin()) {
      const winnerName = currentPlayer === "X" ? user1 : user2;
      document.querySelector(".turn").textContent = `${winnerName} wins!`;
      gameOver = true;
      alert(`${winnerName} wins!`);
    } else if (isBoardFull()) {
      document.querySelector(".turn").textContent = "It's a draw!";
      gameOver = true;
      alert("It's a draw!");
    } else {
      togglePlayer();
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    const btnA = document.getElementById(`btn${a + 1}`);
    const btnB = document.getElementById(`btn${b + 1}`);
    const btnC = document.getElementById(`btn${c + 1}`);

    if (
      btnA.value === currentPlayer &&
      btnB.value === currentPlayer &&
      btnC.value === currentPlayer
    ) {
      btnA.style.background = "green";
      btnB.style.background = "green";
      btnC.style.background = "green";

      return true;
    }
  }

  return false;
}

function isBoardFull() {
  const buttons = document.querySelectorAll(".btn");
  for (const button of buttons) {
    if (button.value === "") {
      return false;
    }
  }
  return true;
}

function resetGame() {
  location.reload();
}
