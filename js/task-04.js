let counterValue = 0;
const btnDecrement = document.querySelector('[data-action=decrement]');
const btnIncrement = document.querySelector('[data-action=increment]');
const valueSpan = document.querySelector('#value');

btnDecrement.addEventListener('click', onDecrementClicked);
btnIncrement.addEventListener('click', onIncrementClicked);

function onDecrementClicked() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};

function onIncrementClicked() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};