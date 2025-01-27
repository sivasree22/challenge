const cells = document.querySelectorAll('.cell');
const statusDiv = document.querySelector('.status');
const resetBtn = document.getElementById('resetBtn');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let isGameOver = false;

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

function handleClick(event) {
    const index = event.target.dataset.index;
    if (!board[index] && !isGameOver) {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWinner()) {
            statusDiv.textContent = `Player ${currentPlayer} wins!`;
            isGameOver = true;
        } else if (board.every(cell => cell)) {
            statusDiv.textContent = 'It\'s a draw!';
            isGameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    isGameOver = false;
    statusDiv.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetBtn.addEventListener('click', resetGame);
