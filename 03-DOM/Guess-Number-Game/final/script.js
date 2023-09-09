const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');

let score = 20;
let highScore = 0;

function setScore(value) {
    score = value;
    scoreEl.textContent = value;
}

function setHighScore(value) {
    highScore = value;
    highScoreEl.textContent = value;
}

const secretNumber = Math.ceil(Math.random()*20)

function displayMessage(message) {
    messageEl.textContent = message
}

console.log(secretNumber);

scoreEl.textContent = score;

const resetGame = () => {
    displayMessage('شروع حدس زدن ...');
    document.body.style.backgroundColor = '#222';
    numberEl.style.width = '15rem';
    setScore(20);
    guessInput.value = '';
    numberEl.textContent = '?'
}

const checkHandler = function() {
    const guess = Number(guessInput.value);

    if(score > 1) {
        if(guess === secretNumber) {
            document.body.style.backgroundColor = 'rgb(96, 179, 71)';
            numberEl.style.width = '30rem';
            numberEl.textContent = secretNumber;
            displayMessage('شما برنده شدید!')
            if(score > highScore) {
                setHighScore(score);
            }
        } else {
            const message = guess > secretNumber ? 'بیا پایین تر' : 'برو بالاتر';
            displayMessage(message);
            setScore(score - 1)
        }
    } else {
        displayMessage('شما باختید!')
    }

}

checkButton.addEventListener('click', checkHandler);
againButton.addEventListener('click', resetGame);


