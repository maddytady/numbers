const random = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let attempt = document.querySelector('.attempt');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessesCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessesCount === 1) {
        guesses.textContent = 'Предыдущий ответ: ';
    }
    if(userGuess != 0 && userGuess <= 100 && userGuess >= 0){
    guesses.textContent += userGuess + ', ';
    }
    if (userGuess === random) {
        lastResult.textContent = `Поздравляю! Ты угадал с ${guessesCount} раза!`;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessesCount === 10) {
        lastResult.textContent = 'Конец игры!';
        attempt.textContent = 'Всё!'
        setGameOver();
    }else {
        lastResult.textContent = 'Неправильно!';
        lastResult.style.backgroundColor = 'red';
        attempt.textContent = `Осталось ${10 - guessesCount} попыток`;
        if(userGuess === 0){
            guessesCount--;
            attempt.textContent = `Осталось ${10 - guessesCount} попыток`;
            lastResult.textContent = 'Ошибка!';
            lowOrHi.textContent = 'Введите число от 1 до 100';
        }
        else if(userGuess > 100){
            guessesCount--;
            attempt.textContent = `Осталось ${10 - guessesCount} попыток`;
            lastResult.textContent = 'Ошибка!';
            lowOrHi.textContent = 'Введите число от 1 до 100';
        }
        else if(userGuess <= 0){
            guessesCount--;
            attempt.textContent = `Осталось ${10 - guessesCount} попыток`;
            lastResult.textContent = 'Ошибка!';
            lowOrHi.textContent = 'Введите число от 1 до 100';
        }
        else if(userGuess < random) {
            lowOrHi.textContent = 'Больше';
        } else if(userGuess > random) {
            lowOrHi.textContent = 'Меньше';
        } 
    }

    
    guessesCount++;
    guessField.value = '';
    guessField.focus();
}
guessField.addEventListener('keydown', event => {
    if(event.keyCode === 13){
        checkGuess();
    }
});
guessSubmit.addEventListener ('click', () => {
    checkGuess();
});



function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.classList.add('btn');
    resetButton.textContent = 'Начать новую игру';
    res.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessesCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    random = Math.floor(Math.random() * 100) + 1;
}

