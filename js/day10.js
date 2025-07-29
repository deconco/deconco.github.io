const btn = document.querySelector("button");  // picks the first instance of this thing
btn.addEventListener('click', updateName);

function updateName() {
    const name = prompt("What should this button be called?");
    btn.textContent = `${name}`; // use back ticks to concatenate
}

//const picture = document.querySelector("img");
//picture.addEventListener('click', updateImage);

/*function updateImage() {
    const pic = prompt("Should this image change to flowers?");
    if(pic == 'yes')
    {
        
    }

    const btn = document.querySelector("button");  // picks the first instance of this thing
    btn.addEventListener('click', moveBtn);

    function randInt() {
        let z = Math.floor((Math.random() * 500)); // Math.floor rounds down
        return(z);
    }

    function moveBtn() {
        let top = randInt();
        let left = randInt();

        btn.setAttribute("style", `position : relative; top:${top}; left ${left};`)
    }
*/
const bt2 = document.querySelector("p");
bt2.addEventListener('click', colorBtn);

function colorBtn() {
    bt2.setAttribute("style", "background-color: red;")
}
