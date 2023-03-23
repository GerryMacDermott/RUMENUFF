//RUMENUFF
// define variables
var word = "SNOWIE"; // answers must be in all capitals due to key reading --> will be array of all answers
// 'word' would be selected from array based on 'level' variable from levelselectjava.js
var height = 1;
var width = word.length; //length of the word
var GuessTile = word.length + 1; //allows the creation of the 'guessing tile'
var col = word.length;
var colFINAL = 0;
var row = 0;
var done = 0;
var failcount = 1;
var attempts = word.length + 1;
var guessed = [];
var letterwasguessedtrue = [];
var doneFINAL = 0;
guessed.length = GuessTile;
const FG = document.querySelectorAll(".finalguess1 button");
const tileDisplay = document.querySelectorAll(".example-area");
var GameOver = false;


function game() {
    //Load question --> will be pulled from array eventually
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

    //On-screen keyboard letter recognition
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const keypressed = target.getAttribute("data-key");

            //check if letter has already been used, otherwise submit guessed letter
            Enter: if (keypressed == "enter" && col == GuessTile) {
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                for (let cycle = 0; cycle <= GuessTile; cycle++) {
                    if (CurrentTile.innerText == guessed[0, cycle]) {
                        document.getElementById("answer").innerText = "You have already tried this letter!";
                        col -= 1;
                        let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                        CurrentTile.innerText = "";
                        break Enter;
                    }
                }
                guessed[0, attempts] = CurrentTile.innerText;
                update();
            };

            //allow for backspace
            if (keypressed == "del" && col == GuessTile) {
                col -= 1;
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                CurrentTile.innerText = "";
                return;
            };
            //recognise letter has been selected
            if (col == GuessTile - 1 && keypressed != "del" && keypressed != "enter") {
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                CurrentTile.innerText = keypressed;
                col += 1;
            }
        };
    };


    let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
    //final guess attempt
    var FG = document.getElementById("FGbutton");
    FG.onclick = function () { FINALATTEMPT() };


}

//This function is triggered when 'enter' is pressed and criteria is met. 
function update() {
    //need a 'if attempts = 0' --> text on screen final guess!!
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString()); //may be redundant
        let lettercheck = CurrentTile.innerText

        //check letter is in word
        if (word[d] == lettercheck) {
            //if let is present display it
            let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
            CurrentTile.innerText = lettercheck;
            done += 1;
        }
    }
    //check word is completed
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

function FINALATTEMPT() {
    var FG = document.getElementById("FGbutton");
    FG.classList.toggle("zone");
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
        if (CurrentTile.innerText != "") {
            CurrentTile.classList.add("tilecorrect");
            letterwasguessedtrue[0, d] = 1;
            colFINAL += 1;
        }
        else
            letterwasguessedtrue[0, d] = 0;
    }

    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const keypressed = target.getAttribute("data-key");


            Enter: if (keypressed == "enter" && colFINAL == width) {
                for (let d = 0; d < width; d++) {
                    let CurrentTile = document.getElementById(row.toString + '-' + d.toString()); //may be redundant
                    let lettercheck = CurrentTile.innerText
                    if (word[d] == lettercheck) {
                        doneFINAL += 1;
                    }
                }
                if (doneFINAL == width) {
                    document.getElementById("answer").innerText = "You Win\n" + failcount + " attempts";
                    FG.classList.toggle("win");
                    GameOver = true;
                }
                else if (doneFINAL != width) {
                    document.getElementById("answer").innerText = "You Lose dumb dumb\n The correct answer was\n" + word;
                    FG.classList.toggle("lose");
                }
            };

            Delete: if (keypressed == "del" && colFINAL < GuessTile) {
                colFINAL -= 1;
                for (let d = width; d >= 0; d--) {
                    let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
                    if (letterwasguessedtrue[0, d] == 2 && CurrentTile.innerText != "") {
                        CurrentTile.innerText = "";
                        letterwasguessedtrue[0, d] = 0;
                        break Delete;
                    };
                }
            };

            Onekey: if (colFINAL < width && keypressed != "del" && keypressed != "enter") {
                for (let d = 0; d < width; d++) {
                    if (letterwasguessedtrue[0, d] == 0) {
                        let CurrentTile = document.getElementById(row.toString + '-' + d.toString());
                        CurrentTile.innerText = keypressed;
                        colFINAL += 1;
                        letterwasguessedtrue[0, d] = 2;
                        break Onekey;
                    }
                }
            }
        };
    };
};


