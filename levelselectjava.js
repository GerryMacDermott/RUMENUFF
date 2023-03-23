//set variables
var level = 0;  //I need this vairable to be read in my DCQ.js -- the variable is changed on line 24, when a level button is clicked. 
var number = 1;

//onload cause it avoids startup bugs (so I am told)
window.onload = function () {
    initilise();
}

//create level select buttons space
function initilise() {
for (let r = 0; r < 10; r++) {
    let attemptsrow = document.createElement("div");
    attemptsrow.setAttribute("id","row"+r);
    attemptsrow.classList.add("guessrow");
    document.getElementById("level-select-container").appendChild(attemptsrow);
//create level select buttons
    for (let c = 0; c < 10; c++) {
        let tile = document.createElement("button");
        tile.id = number;
        tile.classList.add("tile");
        tile.innerText = number;
        document.getElementById("row"+r).appendChild(tile);
//button click choose 'level' --> !!!!!! need this to tell DCQ.js which level !!!!
        tile.onclick = function(ChooseLevel){
            alert("level "+tile.id);
            level = tile.id;
            levelnum = tile.id;
            window.location = "Game.html";
            return false;
          };
        number++;
    }
}
}