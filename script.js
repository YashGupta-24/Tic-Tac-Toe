let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");
let heading=document.querySelector(".heading");
let count = 0;

let turnO = true;
let winningPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetGame = () => {
    count = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
    heading.classList.remove("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            box.classList.remove("turnX");
            box.classList.add("turnO");
            turnO = false;
        }
        else {
            box.innerText = 'X';
            box.classList.remove("turnO");
            box.classList.add("turnX");
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count==9)
        drawGame();
    });
});

const dissableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    count = 0;
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    heading.classList.add("hide");
    dissableBoxes();
}

const drawGame = () => {
    count = 0;
    msg.innerText = `Match Draw! Try again...`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    heading.classList.add("hide");
}

const checkWinner = () => {
    for (pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }

};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);