const sizeControl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

sizeControl.addEventListener('input', evt => {
    span.style.fontSize = `${evt.target.value}px`;
});