
//RUMENUFF

// define variables
var word = "SNOWIE";
// answers must be in all capitals due to key reading
var height = 1; //number of guesses
var width = word.length; //length of the word
var GuessTile = word.length + 1;
var col = word.length;
var row = 0;
var done = 0;
String: sentence = "Hello";
var failcount = 1;
letterinput = 0;
var attempts = word.length + 1;
var errorcount = 0;
var guessed = [word.length];
const FG = document.querySelectorAll(".finalguess1 button");

var GameOver = false;

window.onload = function () {
    initilise();
}

function initilise() {
    //Present Question --> need API or way to pull questions?
    document.getElementById("question").innerText = "Today's Mindboggler\n A mad old man is a skiers' delight";

    //Create word squares
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("guess").appendChild(tile);
        }
    }
    //Create Guessing square
    let Gtile = document.createElement("span");
    Gtile.id = letterinput.toString + "-" + GuessTile.toString();
    Gtile.classList.add("tile");
    Gtile.innerText = "";
    document.getElementById("letter").appendChild(Gtile);

    //Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (GameOver) return;
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < GuessTile) {
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                if (CurrentTile.innerText == "") { //this may be redundant if statement
                    CurrentTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }

        else if (e.code == "Backspace" && col == GuessTile) {
            col -= 1;
            let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
            CurrentTile.innerText = "";
        }

        Enter: if (e.code == "Enter" && col == GuessTile) {
            let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
            for (let cycle = 0; cycle <= GuessTile; cycle++) {
                if (CurrentTile.innerText == guessed[cycle]) {
                    document.getElementById("answer").innerText = "You have already tried this letter!";
                    col -= 1;
                    let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                    CurrentTile.innerText = "";
                    break Enter;
                }
            }

            guessed[0, attempts] = CurrentTile.innerText;
            update();

        }
        else if (e.code == "Enter") { //maybe redundant
            document.getElementById("answer").innerText = "bing bong " + errorcount;
            errorcount += 1;
        }

    })
    //document.getElementsByName("FGbutton").onclick = function() {test()};
    var FG = document.getElementById("FGbutton");
    FG.onclick = function () { FINALATTEMPT() };
}

function FINALATTEMPT() {
    //check for button click
    var FG = document.getElementById("FGbutton");
                let finalword = document.getElementById("guessword").value;
                console.log(finalword);
                finalwordcheck = finalword.toUpperCase();
                if (finalwordcheck == word){
                    GameOver = true;
                    document.getElementById("answer").innerText = "You Win\n" + failcount + " attempts";
                    FG.classList.toggle("win");
                    for (let d = 0; d < width; d++) {
                        let CurrentTile = document.getElementById(row.toString + '-' + d.toString()); //may be redundant
                        CurrentTile.innerText = word[d];
                    }
                }
                if (finalwordcheck != word){
                    GameOver = true;
                    document.getElementById("answer").innerText = "You Lose dumb dumb\n The correct answer was\n" + word;
                    FG.classList.toggle("lose");
                    for (let d = 0; d < width; d++) {
                        let CurrentTile = document.getElementById(row.toString + '-' + d.toString()); //may be redundant
                        CurrentTile.innerText = word[d];
                    }
                }
}


//Check letter is present
function update() {
    //need a if attempts = 0 --> text on screen final guess!!
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString()); //may be redundant
        let letter = CurrentTile.innerText

        if (word[d] == letter) {
            let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
            CurrentTile.innerText = letter; //maybe make 'letter'?
            done += 1;
        }
    }


    if (done == width) {
        GameOver = true;
        document.getElementById("answer").innerText = "You Win\n" + failcount + " attempts";
    }
    else if (done != width) {
        attempts -= 1;
        document.getElementById("answer").innerText = "You have " + attempts + " attempts left!";
        failcount += 1;
        col -= 1;
        let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
        CurrentTile.innerText = "";
    }
}


/*   //Final Guess
  document.addEventListener("keyup", (e) =>{
    if (GameOver) return;


    if ("KeyA" <= e.code && e.code <= "KeyZ"){
        if (col < width) {
            let CurrentTile = document.getElementById(row.toString + '-' + col.toString());
            if (CurrentTile.innerText == "") {
                CurrentTile.innerText = e.code[3];
                col += 1;
            }
        }
    }

    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        let CurrentTile = document.getElementById(row.toString + '-' + col.toString());
        CurrentTile.innerText = "";
    }

    else if (e.code == "Enter" && col == width) {
        update();
        col = 0;
    }
    else if (e.code == "Enter"){
        document.getElementById("answer").innerText = "Must be a " + width + " letter word!";
    }

})


//Check guess is correct
function update() {

    for (let d =0; d < width; d++){
        let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
        let letter = CurrentTile.innerText

        if (word[d] == letter) {
            let CurrentTile = document.getElementById(row.toString + '-' + d.toString()); 
            CurrentTile.innerText = e.code[3];
            done += 1;
        }
    }

    
    if (done == width){
        GameOver = true;
        document.getElementById("answer").innerText = "You Win\n" + failcount + " attempts";
    }
    else if (done != width) {
        done = 0;
        document.getElementById("answer").innerText = "You have" + attempts + "left!";
        failcount +=1;
        for (let d =0; d < width; d++){
            let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
            CurrentTile.innerText = "";
        }
    }
} */