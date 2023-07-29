//RUMENUFF


//whats next? *finish inputting questions, *fix keyboard centering or find solution to long words, *improve presentation, *about author




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
var now = new Date();
var start = new Date(now.getFullYear(), 6, 27);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.round(diff / oneDay);
var word = wordarray[day];
var question = questionarray[day];
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
var FGlock = 0;
const tileDisplay = document.querySelectorAll(".example-area");
var GameOver = false;
const todaysdate = new Date();
const year = todaysdate.getFullYear;
const month = todaysdate.getMonth;

window.onload = function () {
    game();
}

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

    //On-screen keyboard letter recognition
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const keypressed = target.getAttribute("data-key");

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

    //final guess attempt
    var FG = document.getElementById("FGbutton");
    FG.onclick = function() {FINALATTEMPT()};
}

//This function is triggered when 'enter' is pressed and criteria is met. 
function update() {
    //need a 'if attempts = 0' --> text on screen final guess!!
    for (let d = 0; d < width; d++) {
        let CurrentTile = document.getElementById(row + "-" + GuessTile.toString()); //may be redundant
        let lettercheck = CurrentTile.innerText;
        let tilechange = document.getElementById(lettercheck);

        //check letter is in word
        if (word[d] == lettercheck) {
            //if let is present display it
            let CurrentTile = document.getElementById(row + "-" + d.toString());
            CurrentTile.innerText = lettercheck;
            done += 1;
            tilechange.classList.add("correct");
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
        let CurrentTile = document.getElementById(row + "-" + GuessTile.toString());
        let lettercheck = CurrentTile.innerText;
        let tilechange = document.getElementById(lettercheck);
        tilechange.classList.add("absent");
        CurrentTile.innerText = "";
    }
}

function FINALATTEMPT() {
    var FG = document.getElementById("FGbutton");
    FG.classList.toggle("zone");
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
                    document.getElementById("answer").innerText = "You got it! You should be concerned...\n It took you " + failcount + " attempts";
                    FG.classList.toggle("win");
                    for (let d = 0; d < width; d++) {
                        let tilechange = document.getElementById(0 + "-" + d.toString());
                        tilechange.classList.add("tilecorrect");
                    }
                    GameOver = true;
                }
                else if (doneFINAL != width) {
                    document.getElementById("answer").innerText = "You didn't get it... trust me that a good thing!\n The correct answer was\n" + word;
                    FG.classList.toggle("lose");
                    for (let d = 0; d < width; d++) {
                        let tilechange = document.getElementById(0 + "-" + d.toString());
                        tilechange.classList.add("tilewrong");
                    }
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


