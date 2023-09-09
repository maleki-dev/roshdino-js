const modalEl = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');

const buttons = document.querySelectorAll('.show-modal');
// const buttons = document.getElementsByClassName('show-modal');

const toggleHidden = () => {
    modalEl.classList.toggle('hidden');
    overlayEl.classList.toggle('hidden');
}
console.log(buttons)
// Array.from(buttons).forEach(button => button.addEventListener('click', toggleHidden))
buttons.forEach(button => button.addEventListener('click', toggleHidden));
closeBtn.addEventListener('click', toggleHidden)
overlayEl.addEventListener('click', toggleHidden)
