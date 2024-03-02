const btnClick = document.querySelector(".button-click");
const btnClear = document.querySelector(".button-clear");
const btnInput = document.querySelector(".input");

let counter = 0;

function render() {
    btnInput.innerText = counter
}

btnClick.addEventListener('click', () => {
    counter += 1
    render()
})

btnClear.addEventListener('click', () => {
    counter = 0
    render()
})