// начинает игрок ✕
let currentPlayer = '✕';
// Устанавливает начальное значение переменной, которая показывает, завершена ли игра
let gameEnded = false;
// Создаем пустое поле для игры
let board = ["", "", "", "", "", "", "", "", ""];
// Определяем выигрышные комбинации для игры
let winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// функция вызываема при клике  на ячеку
function cellClicked(cellIndex) {
    // проверяее что игра не завершена и выбранная ячейка пуста
    if (!gameEnded && board[cellIndex] === "") {
        // получаем элемент ячейки по его индексу
        const cell = document.getElementById(`cell${cellIndex}`);
        // Устанавливаем текст ячеки в значение текущего игрока
        cell.textContent = currentPlayer;
        // устанавливаем атрибут data-value в значение текущего игрока
        cell.setAttribute('data-value', currentPlayer);
        // записывает значение текущего игрока в массив игрового поля
        board[cellIndex] = currentPlayer;

        // проверяемб выйграл ли текущий игрок
        if (checkWinner(currentPlayer)) {
            // выводит сообщение в пободе текущего игрока
            document.getElementById('message').textContent = `Игрок ${currentPlayer} победил!`;
            // устанавливает, что игра завершена
            gameEnded = true;
        } else if (isBoardFull()) {
            // вВыводит сообщение о ничьейб если игровое поле полностью заполнено
            document.getElementById('message').textContent = 'Ничья!';
            // устанавливает, что игра завершена
            gameEnded = true;
        } else {
            // переключает текущего игрока на другого игрока
            currentPlayer = currentPlayer === '✕' ? '◯' : '✕';
        }
    }
}

// Функция бота
function botMove() {
}

// Функцияб которая проверяетб выйграл ли игрок
function checkWinner(player) {
    // Перебирает все выйгрышные комбинации
    for (const pattern of winPatterns) {
        // получаем индексы ячеек из текущей выигрышной комбинации
        const [a, b, c] = pattern;
        //  проверяемб что все три ячейки имеют значение текущего тгрока
        if (board[a] === player && board[b] === player && board[c] === player) {
            // Возращает trueб если текущий игрок выиграл
            return true;
        }
    }
    // возвращает false,  если текущий игрок не выиграл
    return false
}

// функцияб которая проверяет, заполнено ли игровое поле
function isBoardFull() {
    //  возвращает true, если все ячейки заполнены
    return board.every(cell => cell !== "");
    // Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
}