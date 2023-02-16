var number = 1;

var squidward = 5;


window.onload = function () {

    initilise();
}

//create level select buttons
function initilise() {
for (let r = 0; r < 10; r++) {
    let attemptsrow = document.createElement("div");
    attemptsrow.setAttribute("id","row"+r);
    attemptsrow.classList.add("guessrow");
    document.getElementById("level-select-container").appendChild(attemptsrow);
    for (let c = 0; c < 10; c++) {
        let tile = document.createElement("button");
        tile.id = number;
        tile.classList.add("tile");
        tile.innerText = number;
        document.getElementById("row"+r).appendChild(tile);

        number++;
    }
}
}

test = document.getElementById(3)
test.addEventListener('click',selectlevel());


function selectlevel() {
alert=number;
squidward++;
}