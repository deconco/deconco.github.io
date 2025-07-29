
const bt2 = document.querySelector("#button2");
bt2.addEventListener('click', colorBtn);

function colorBtn() {
    bt2.setAttribute("style", "background-color: purple;")
}

const bt3 = document.querySelector("#size");
bt3.addEventListener('click', bigBtn);

function bigBtn() {
    bt3.setAttribute("style", "font-size: 45px; height: auto;")
}
