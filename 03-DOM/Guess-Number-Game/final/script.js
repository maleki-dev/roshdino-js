const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number')

let score = 20;
let highScore = 0;
const secretNumber = Math.ceil(Math.random()*20)

function displayMessage(message) {
    messageEl.textContent = message
}

console.log(secretNumber);

scoreEl.textContent = score;

const checkHandler = function() {
    const guess = Number(guessInput.value);

    if(score > 1) {
        if(guess === secretNumber) {
            document.body.style.backgroundColor = 'rgb(96, 179, 71)';
            numberEl.style.width = '30rem';
            numberEl.textContent = secretNumber;
            displayMessage('شما برنده شدید!')
        } else {
            const message = guess > secretNumber ? 'بیا پایین تر' : 'برو بالاتر';
            displayMessage(message);
            score -= 1;
            scoreEl.textContent = score;
        }
    } else {
        displayMessage('شما باختید!')
    }

}

checkButton.addEventListener('click', checkHandler);

