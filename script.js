const box1= document.querySelector('.boxone');
const box2= document.querySelector('.boxtwo');
const dotOne= document.getElementById('dot1');
const dotTwo= document.getElementById('dot2');


box1.addEventListener("click", addbordertoOne);
box2.addEventListener("click", addbordertoTwo);

function addbordertoOne() {
    box1.classList.add("box-border");
    dotOne.classList.add("full-dot");
    box2.classList.remove("box-border");
    dotTwo.classList.remove("full-dot");
}

function addbordertoTwo() {
    box1.classList.remove("box-border");
    dotOne.classList.remove("full-dot");
    box2.classList.add("box-border");
    dotTwo.classList.add("full-dot");
}
