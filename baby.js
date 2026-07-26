//RUMENUFF


//updated 29.12.25




//word and question array are in rows of 10.
// answers must be in all capitals due to key reading
var wordarray = ["BILLY", "NOLA"];
var questionarray = ["Here's The Kid! And He Shoots From The Hip", "Do,Re,Mi,Fa,So, ,Ti,Do"];

///variables
var day = 1;
var word = wordarray[day];
var question = questionarray[day];
var height = 1;
var width = word.length; //length of the word
var GuessTile = word.length + 1; //allows the creation of the 'guessing tile'
var col = word.length;
var colFINAL = 0;
var row = 0;
var done = 0;
var failcount = 0;
var attempts = 6; //incorrect letters in a set number
var guessed = [];
var letterwasguessedtrue = [];
var doneFINAL = 0;
var wrongguess = 0;
guessed.length = GuessTile;
//const FG = document.querySelectorAll(".finalguess1 button");
var FGlock = 0;
const tileDisplay = document.querySelectorAll(".example-area");
var GameOver = false;
const todaysdate = new Date();
const year = todaysdate.getFullYear;
const month = todaysdate.getMonth;


//onload
window.onload = function () {
    game();
}



// game setup and listen for keys
function game() {
    //Load question --> will be pulled from array eventually
    document.getElementById("question").innerText = "Today's Mindboggler - Baby Edition:\n" + question;

    //Create word squares
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r + "-" + c;
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("guess").appendChild(tile);
        }
    }

    //Create Guessing square
    let Gtile = document.createElement("span");
    Gtile.id = row + "-" + GuessTile.toString();
    Gtile.classList.add("tile");
    Gtile.innerText = "";
    document.getElementById("letter").appendChild(Gtile);
    document.getElementById("answer").innerText = "You Have " + attempts + " Incorrect Guesses Remaining";


    //On-screen keyboard letter recognition
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const keypressed = target.getAttribute("data-key");

            if (attempts == 0) {
                lose();
            }

            //check if letter has already been used, otherwise submit guessed letter
            Enter: if (keypressed == "enter" && col == GuessTile) {
                for (let cycle = 0; cycle <= GuessTile; cycle++) {
                    if (Gtile.innerText == guessed[0, cycle]) {
                        document.getElementById("answer").innerText = "You have already tried this letter!";
                        Gtile.innerText = "";
                        col -= 1;
                        break Enter;
                    }
                }
                guessed[0, attempts] = Gtile.innerText;
                wrongguess = 0;
                update();
            };

            //allow for backspace
            if (keypressed == "del" && col == GuessTile) {
                Gtile.innerText = "";
                col -= 1;
                return;
            };
            //recognise letter has been selected
            if (col == GuessTile - 1 && keypressed != "del" && keypressed != "enter") {
                Gtile.innerText = keypressed;
                col += 1;
            }
        };
    };

    if (FGlock == 0) {
        //final guess attempt
        var FG = document.getElementById("FGbutton");
        FG.onclick = function () { FINALATTEMPT() };
    }
}







//check guess letter
//This function is triggered when 'enter' is pressed and criteria is met. 
function update() {
    //need a 'if attempts = 0' --> text on screen final guess!!
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row + "-" + GuessTile.toString()); //may be redundant
        CurrentTile.classList.remove("tileshake");
        let lettercheck = CurrentTile.innerText;
        let tilechange = document.getElementById(lettercheck);


        //check letter is in word
        if (word[d] == lettercheck) {
            //if let is present display it
            let CurrentTile = document.getElementById(row + "-" + d.toString());
            done += 1;
            CurrentTile.innerText = lettercheck;
            CurrentTile.classList.add("tileflip")
            CurrentTile.classList.add("tilecorrect")
            tilechange.classList.add("correct");
            wrongguess += 1;
        }
    }

    //check word is completed
    if (done == width) {
        correct();
    }

    if (wrongguess == 0) {
        attempts -= 1;
        if (attempts == 1) {
            document.getElementById("answer").innerText = "You Have " + attempts + " Incorrect Guess Remaining";
        } else {
            document.getElementById("answer").innerText = "You Have " + attempts + " Incorrect Guesses Remaining";
        }
        failcount += 1;
        let CurrentTile = document.getElementById(row + "-" + GuessTile.toString());
        CurrentTile.classList.add("tileshake");
        let lettercheck = CurrentTile.innerText;
        let tilechange = document.getElementById(lettercheck);
        tilechange.classList.add("absent");
        CurrentTile.innerText = "";
        if (attempts == 0) {
            lose();
        }
    }

    if (done != width) {
        let emptyguesssquare = document.getElementById(row + "-" + GuessTile.toString());
        emptyguesssquare.innerText = "";
        col -= 1;
    }
}










//final attempt
function FINALATTEMPT() {
    FGlock = 1;
    var FG = document.getElementById("FGbutton");
    FG.classList.add("zone");
    FG.onclick = null;
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row + "-" + d.toString());
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
                    let CurrentTile = document.getElementById(row + "-" + d.toString()); //may be redundant
                    let lettercheck = CurrentTile.innerText
                    if (word[d] == lettercheck) {
                        doneFINAL += 1;
                    }
                }
                if (doneFINAL == width) {
                    correct();
                }
                else if (doneFINAL != width) {
                    lose();
                }
            };

            Delete: if (keypressed == "del" && colFINAL < GuessTile) {
                colFINAL -= 1;
                for (let d = width; d >= 0; d--) {
                    let CurrentTile = document.getElementById(row + "-" + d.toString());
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
                        let CurrentTile = document.getElementById(row + "-" + d.toString());
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


//if final guess is wrong or run out of guesses
function delaylose(d) {
    let tilechange = document.getElementById(0 + "-" + d.toString());
    setTimeout(() => {
        tilechange.innerText = word[d];
        tilechange.classList.add("tileflip");
        tilechange.classList.add("tilewrong");
    }, 400 * d)
}

function lose() {
    document.getElementById("answer").innerText = "You didn't get it... but at least you've still got a grip on reality!";
    for (let d = 0; d < width; d++) {
        let tilechange = document.getElementById(0 + "-" + d.toString());
        tilechange.classList.remove("tileflip");
        delaylose(d);
    }

    let buttoncreate = document.createElement('button');
    buttoncreate.id = "sharebutton";
    buttoncreate.innerText = "Share Score";
    buttoncreate.classList.add("scoreshare");
    buttoncreate.onclick = function () {
        var copyText = "RUMENUFF #" + day + ": ❌ I'm Not MAD!\nhttps://rumenuff.com/"
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    };
    document.getElementById("score").appendChild(buttoncreate)
};


//if answer is correct
function delaycorrect(d) {
    let tilechange = document.getElementById(0 + "-" + d.toString());
    setTimeout(() => {
        //tilechange.classList.remove("tileflip");
        tilechange.classList.add("tileflip");
        tilechange.classList.add("tilecorrect");
    }, 400 * d)
}

function correct() {
    // flip all letters at end
    for (let d = 0; d < width; d++) {
        let tilechange = document.getElementById(0 + "-" + d.toString());
        tilechange.classList.remove("tileflip");
        delaycorrect(d);
    }

 document.getElementById("answer").innerText = "Marvellous! \n Completed with " + failcount + " mistakes \n WELCOME BABY "+word+ " MACDERMOTT";
            var copyText = "RUMENUFF #" + day + ": ✅ I'm Mad Enuff!\nhttps://rumenuff.com/"
        }
  
    Let buttoncreate = document.createElement('button');
    buttoncreate.id = "sharebutton";
    buttoncreate.innerText = "Share Score";
    buttoncreate.classList.add("scoreshare");
    buttoncreate.onclick = function () {
        // copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText);
        navigator.share({ text: copyText });
        // alert("Your Results were Copied to Clipboard");
    };
    document.getElementById("score").appendChild(buttoncreate)
}