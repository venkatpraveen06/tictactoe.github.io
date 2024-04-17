let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const resultDiv = document.getElementById('result');

function handleMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        render();
        if (checkWinner()) {
            resultDiv.textContent = currentPlayer + " wins!";
            disableCells();
        } else if (checkDraw()) {
            resultDiv.textContent = "It's a draw!";
            disableCells();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let combo of winningCombos) {
        if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    resultDiv.textContent = "";
    enableCells();
    render();
}

function disableCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}

function enableCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.pointerEvents = 'auto';
    });
}

render();
