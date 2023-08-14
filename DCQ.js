//RUMENUFF


//whats next? *finish inputting questions, *improve presentation, *about author, *stop at 0 attempts
// left it at getting flip to work at completion




//word and question array are in rows of 10.
// answers must be in all capitals due to key reading
var wordarray = ["SNOWIE", "EMBOSS", "PASTEURISED", "CANOODLE", "UNBIASSED", "CASTAWAY", "CHASTE", "RUMINANT", "DISCUS", "PESTICIDE",
    "LEMONADE", "PLATONIC", "ACUPUNCTURE", "MILKSHAKE", "HYPERBOLE", "RASHER", "TOURNIQUET", "PUNT", "STAGECOACH", "LEGENDS",
    "POPCORN", "MALADY", "VANGUARD", "ICICLE", "NEVERTHELESS", "COLLAGE", "EASEL", "KIMONO", "LAMB", "FANFARE",
    "UMPIRE", "REPERCUSSION", "DIVERSE", "CAHOOT", "DELAY", "CONTRABAND", "AISLE", "HOOPLA", "LETTUCE", "EXTINCT",
];
var questionarray = ["A mad old man is a skiers' delight", "To Make Employer Look Good", "A Purely Fleeting Glimpse", "Small Love-Boat for Quiet Waterways", "Lacking In Lawn-Bowl Skills (Judgmental?)", "Theatre Understudies' Dream Come True (No More Isolation)", "Pursued In A Purely Innocent Manner", "High Spirited Termite (Feeling Bullet Proof)", "Selection Committee For Olympic Field Events", "Constant Nuisance - Always Close By (Deserves A Real Spray)",
    "Manual For Shonky Car Dealers", "Refreshing Drink Created In Ancient Greece, Said To Reduce Libido", "Bicycle Repair Kit; Made In China", "Greeting Between Dairy Farmers", "Large, Often Overpriced Flowerpot (Visual Poetry)", "Risk Taker (Perhaps To Bring Home The Bacon)", "Word For A Group Of Paramedics (Might Feel The Pressure On This One)", "Small River-Boat For Modest Gamblers (Pole Position - Best Bet)", "Drama Instructor For Group Of Travelling Players", "Feet (Of The Famous Perhaps)",
    "“Dad” Jokes (Lame But Kinda Sweet)", "Piece Of Music Sung Off- Key", "Security Escort In Money-Carrying Vehicle", "Pedal-Powered Vehicle; Used Only In Polar Regions", "Greedy (Always More!)", "Art School", "Happy Go Lucky Artist", "Japanese Game Of Strategy, The Aim Being To Cover All Moving Pieces", "A Mild Complaint (What's Your Beef About This?)", "The Cost Of Being A Groupie?",
    "Nation Governed By Former Sports' Judges", "Drum Encore (A Pleasing Result)", "Anthology Of Different Forms Of Poetry", "A Gang Of Owls", "A Hold Up In Egg Production", "Alternate Rock Group", "Announced Intention To Act (Marry, Perhaps)", "End Of Season Netball Party", "Proposal For Group Action (Gardening)", "Deodorised",
];




///variables
var now = new Date();
var start = new Date(now.getFullYear(), 6, 27);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.ceil(diff / oneDay);
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
    document.getElementById("question").innerText = "Today's Mindboggler:\n" + question;
    
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

if (FGlock == 0){
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
        if (attempts == 1){
            document.getElementById("answer").innerText = "You Have " + attempts + " Incorrect Guess Remaining";
        } else{
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
    document.getElementById("FGbutton").removeAttribute("onlcick");
    var FG = document.getElementById("FGbutton");
    FG.classList.add("zone");
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
        delaylose(d);
    }
    let buttoncreate = document.createElement('button');
    buttoncreate.id = "sharebutton";
    buttoncreate.innerText = "Share Score";
    buttoncreate.classList.add("scoreshare");
    buttoncreate.onclick = function(){
        var copyText = "RUMENUFF: ❌ I'm Not MAD!\nhttps://rumenuff.com/"
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    }; 
    document.getElementById("score").appendChild(buttoncreate)
};

function delaycorrect(d) {
    let tilechange = document.getElementById(0 + "-" + d.toString());
    setTimeout(() => {
        tilechange.classList.add("tileflip");
        tilechange.classList.add("tilecorrect");
    }, 400 * d)
}



function correct() {
    // flip all letters at end
    for (let d = 0; d < width; d++) {
        delaycorrect(d);
        //let CurrentTile = document.getElementById(0 + "-" + d.toString());
        //CurrentTile.classList.add("tileflip")
        //CurrentTile.classList.add("tilecorrect")
    }
    // print specific message per amount of mistakes
    for (let e = 0; e < width; e++) {
        if (failcount == 0) {
            document.getElementById("answer").innerText = "Marvellous! \n Completed with " + failcount + " mistakes \n You are indeed MAD ENUFF";
            var copyText = "RUMENUFF: ✅ I'm Mad Enuff!\nhttps://rumenuff.com/"
        }
        if (failcount == 1) {
            document.getElementById("answer").innerText = "Magnificent! \n Completed with only " + failcount + " mistake";
            var copyText = "RUMENUFF: ❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 2) {
            document.getElementById("answer").innerText = "Brilliant! \n Completed with only " + failcount + " mistakes";
            var copyText = "RUMENUFF: ❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 3) {
            document.getElementById("answer").innerText = "Congratulations! \n Completed with only " + failcount + " mistakes";
            var copyText = "RUMENUFF: ❌❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 4) {
            document.getElementById("answer").innerText = "Top Job! \n Completed with " + failcount + " mistakes";
            var copyText = "RUMENUFF: ❌❌❌❌✅\nhttps://rumenuff.com/"
        }
        if (failcount == 5) {
            document.getElementById("answer").innerText = "Scraped it Home! \n Completed with " + failcount + " mistakes";
            var copyText = "RUMENUFF: ❌❌❌❌❌✅\nhttps://rumenuff.com/"
        }
    }
    let buttoncreate = document.createElement('button');
    buttoncreate.id = "sharebutton";
    buttoncreate.innerText = "Share Score";
    buttoncreate.classList.add("scoreshare");
    buttoncreate.onclick = function(){
       // copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText);
        navigator.share({text: copyText});
       // alert("Your Results were Copied to Clipboard");
    }; 
    document.getElementById("score").appendChild(buttoncreate)
}



/*function delaycorrect(d) {
    let CurrentTile = document.getElementById(row + "-" + GuessTile.toString()); //may be redundant
    let lettercheck = CurrentTile.innerText;
    let Current2Tile = document.getElementById(row + "-" + d.toString());
    let tilechange = document.getElementById(lettercheck);
    done += 1;
    setTimeout(() => {
        CurrentTile.innerText = lettercheck;
        Current2Tile.classList.add("tileflip")
        Current2Tile.classList.add("tilecorrect")
        tilechange.classList.add("correct");
    }, 400 * d)
}*/

