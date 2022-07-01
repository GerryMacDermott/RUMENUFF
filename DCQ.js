
//RUMENUFF

// define variables
var word = "SNOWIE";
// answers must be in all capitals due to key reading
var height = 1; //number of guesses
var width = word.length; //length of the word
var GuessTile = word.length + 1;
var col = word.length;
var colFINAL = 0;
var row = 0;
var done = 0;
String: sentence = "Hello";
var failcount = 1;
letterinput = 0;
var attempts = word.length + 1;
var errorcount = 0;
var guessed = [];
var letterwasguessedtrue = [];
var doneFINAL = 0;
var GOGOFINALGUESS = 1;
guessed.length = GuessTile;
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

    //On-screen keyboard letter recognition
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const keypressed = target.getAttribute("data-key");


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

            if (keypressed == "del" && col == GuessTile) {
                col -= 1;
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                CurrentTile.innerText = "";
                return;
            };

            if (col == GuessTile - 1 && keypressed != "del" && keypressed != "enter") {
                let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());
                CurrentTile.innerText = keypressed;
                col += 1;
            }
        };
    };
    let CurrentTile = document.getElementById(row.toString + '-' + GuessTile.toString());


    //document.getElementsByName("FGbutton").onclick = function() {test()};
    var FG = document.getElementById("FGbutton");
    FG.onclick = function () { FINALATTEMPT() };


}
//Check letter is present
function update() {
    //need a if attempts = 0 --> text on screen final guess!!
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

FINALATTEMPT: function FINALATTEMPT() {
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


