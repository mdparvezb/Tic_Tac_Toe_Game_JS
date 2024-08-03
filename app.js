let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnx = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Event lisner
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnx) {
      box.innerHTML = "X";
      box.disabled = true;
      turnx = false;
    } else {
      box.innerHTML = "O";
      box.disabled = true;
      turnx = true;
    }

    winner();
  });
});

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");

  for (box of boxes) {
    box.disabled = true;
  }
};

const winner = () => {
  for (let pattern of winPatterns) {
    val1 = boxes[pattern[0]].innerText;
    val2 = boxes[pattern[1]].innerText;
    val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

const resetBtn = () => {
  for (box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }

  msgContainer.classList.add("hide");
};

reset.addEventListener("click", resetBtn);
newBtn.addEventListener("click", resetBtn);
