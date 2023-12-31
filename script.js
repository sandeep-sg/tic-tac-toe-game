let allButtons = document.querySelectorAll(".button");
let restart = document.querySelector("#restart");
let win = document.querySelector("#winner");
let showTurn = document.querySelector("#turn");
let container = document.querySelector(".container");
let count = 0;
// winner box  array .....
const winnerArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// turn logic.........
let winner = "";
let turn = winner;

function playerTurn(btn) {
  if (turn == "X") {
    btn.innerText = "X";
    turn = "O";
    btn.style.color = "red";
    btn.disabled = true;
  } else {
    btn.innerText = "O";
    turn = "X";
    btn.style.color = "aqua";
    btn.disabled = true;
  }
}
let index = "";
showTurn.innerText = `Turn of O`;
allButtons.forEach((button) => {
  // restart logic......
  restart.addEventListener("click", () => {
    button.innerText = "";
    button.disabled = false;
    win.innerText = "";
    count = 0;
    turn = winner;
    showTurn.innerText = `Turn of O`;
    showTurn.innerText = `Turn of ${turn}`;
    showTurn.style.display = "block";
    container.classList.remove(index);
  });

  button.addEventListener("click", () => {
    playerTurn(button);
    checkWinner();
    showTurn.innerText = `Turn of ${turn}`;
  });
});

// check winner .......
const obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
};
function checkWinner() {
  // match draw logic .....
  count += 1;
  if (count > 8) {
    win.innerText = "Match is draw";
    showTurn.style.display = "none";
  }

  winnerArray.forEach((arr) => {
    let pos1 = allButtons[arr[0]].innerText;
    let pos2 = allButtons[arr[1]].innerText;
    let pos3 = allButtons[arr[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        winner = pos1;
        showTurn.style.display = "none";
        win.innerText = `Winner is ${pos1} `;
        index = obj[winnerArray.indexOf(arr) + 1];
        console.log(index);
        container.classList.add(index);

        // if()
        allButtons.forEach((button) => {
          button.disabled = true;
        });
      }
    }
  });
}
