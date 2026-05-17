//RUMENUFF
//Fab 50


//updated 29.12.25
var word = "blank";
var question = "blank question";
/*
async function readCSVCell(rowIndex, colIndex) {
    const response = await fetch("table.csv");
    const text = await response.text();

    // Split into rows
    const rows = text.trim().split("\n").map(row => row.split(","));

    // Access the cell
    const cell = rows[rowIndex][colIndex];
    console.log("Cell value:", cell);
    return cell;
}
*/
var now = new Date();
var start = new Date(2023, 6, 27);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = 0;
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

//onload
window.onload = function () {
    chooselevel();
}
/*
async function run() {
    placement = await readCSVCell(day,4)
    word = await readCSVCell(placement, 0);
    question = await readCSVCell(placement,1);
    }
*/

function chooselevel() {
    //create levelselect dropdown
    document.getElementById("question").innerText = "Select a puzzle from the drop down list"
    var levelselect = document.getElementById("levelselect");
    levelselect.innerText = "Here Lies the Best 50 RUMENUFF Conundrums as Identified\nby the Curator Himself, Jack MacDermott.\nThere is no Order to this List, Only Madness!\n\n Enter a Puzzle Nummber Between 1 - 50 ";
    var dropdown = document.createElement("input");
    const items = ["Apple", "Banana", "Cherry"];

 items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    dropdown.appendChild(option);
});
    input.classList.add("levelselect");// need to set CSS style
    levelselect.appendChild(input);
    var levelbutton = document.createElement("button");
    levelbutton.innerText = "Choose!"
    levelbutton.classList.add("levelbutton");
    levelbutton.addEventListener("click", function () 
    {
        day = document.getElementById("levelinput").value;
        //alert("In event listner");
        console.log(day);
     //find question and answer in table csv
        run();
           ///variables
        width = word.length; //length of the word
        GuessTile = word.length + 1; //allows the creation of the 'guessing tile'
        col = word.length;
        guessed.length = GuessTile;
        done = 0;
        failcount = 0;
        attempts = 6; //incorrect letters in a set number
        guessed = [];
        letterwasguessedtrue = [];
        doneFINAL = 0;
        wrongguess = 0;
        FGlock = 0;
        colFINAL = 0;
        var FG = document.getElementById("FGbutton");
        FG.classList.remove("zone");

        const keys = document.querySelectorAll(".keyboard-row button");
        for(let i = 0; i < keys.length; i++) {
            keys[i].classList.remove("absent");
            keys[i].classList.remove("correct");}
        game();
    });
    levelselect.appendChild(levelbutton);


}



// game setup and listen for keys
function game() {
    //Load question --> will be pulled from array eventually
    document.getElementById("question").innerText = "Today's Mindboggler - Question " + day + ":\n" + question;
    document.getElementById("guess").innerHTML = "";
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
    document.getElementById("letter").innerHTML = "";
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
    // print specific message per amount of mistakes
    for (let e = 0; e < width; e++) {
        if (failcount == 0) {
            document.getElementById("answer").innerText = "Marvellous! \n Completed with " + failcount + " mistakes \n You are indeed MAD ENUFF";
            var copyText = "RUMENUFF #" + day + ": ✅ I'm Mad Enuff!\nhttps://rumenuff.com/"
        }
        if (failcount == 1) {
            document.getElementById("answer").innerText = "Magnificent! \n Completed with only " + failcount + " mistake";
            var copyText = "RUMENUFF #" + day + ": ❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 2) {
            document.getElementById("answer").innerText = "Brilliant! \n Completed with only " + failcount + " mistakes";
            var copyText = "RUMENUFF #" + day + ": ❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 3) {
            document.getElementById("answer").innerText = "Congratulations! \n Completed with only " + failcount + " mistakes";
            var copyText = "RUMENUFF #" + day + ": ❌❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 4) {
            document.getElementById("answer").innerText = "Top Job! \n Completed with " + failcount + " mistakes";
            var copyText = "RUMENUFF #" + day + ": ❌❌❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 5) {
            document.getElementById("answer").innerText = "Scraped it Home! \n Completed with " + failcount + " mistakes";
            var copyText = "RUMENUFF #" + day + ": ❌❌❌❌❌✅\nhttps://rumenuff.com/"
        }
    }
    let buttoncreate = document.createElement('button');
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


