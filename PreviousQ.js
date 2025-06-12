//RUMENUFF


//whats next? *finish inputting questions, *improve presentation, *about author, *stop at 0 attempts
// left it at getting flip to work at completion




//word and question array are in rows of 10.
// answers must be in all capitals due to key reading
var wordarray = ["SNOWIE", "EMBOSS", "PASTEURISED", "CANOODLE", "UNBIASSED", "CASTAWAY", "CHASTE", "RUMINANT", "DISCUS", "PESTICIDE",
    "LEMONADE", "PLATONIC", "ACUPUNCTURE", "MILKSHAKE", "HYPERBOLE", "RASHER", "TOURNIQUET", "PUNT", "STAGECOACH", "LEGENDS",
    "POPCORN", "MALADY", "VANGUARD", "ICICLE", "NEVERTHELESS", "COLLAGE", "EASEL", "KIMONO", "LAMB", "FANFARE",
    "UMPIRE", "REPERCUSSION", "DIVERSE", "CAHOOT", "DELAY", "CONTRABAND", "AISLE", "HOOPLA", "LETTUCE", "EXTINCT",
    "SOMBRERO", "BELITTLE", "STOREY", "TOTEM", "CHAMPIGNON", "FURNACE", "RACKETEER", "JOURNEYMAN", "DEADPAN", "WINSOME",
    "BLOUSE", "PALAVER", "QUOTA", "FLUMMOXED", "CASHEW", "ACCENTUATE", "MANDARIN", "FUTILITY", "UNABASHED", "LENS",
    "CANTALOUPE", "DICTIONARY", "OXYMORON", "ABOMINABLE", "SERENDIPITY", "CAROUSEL", "SEAR", "BITTEN", "BOUNDLESS", "SECRETE",
    "DIATRIBE", "SOURDOUGH", "PASSPORT", "LOCOMOTIVE", "REVELATIONS", "TIMPANI", "STATUTE", "PASSIONFRUIT", "CHAGRIN", "ZENITH",
    "ABSOLUTE", "NEIGHBOURS", "DOGMATIC", "ENDOSCOPE", "QUARTERMASTER", "CLAPTRAP", "PIANOLA", "BALCONY", "BLITHE", "SUBTLE",
    "GNUS", "SAGACITY", "BOUGH", "MACHINATIONS", "FORBID", "CUFFLINKS", "SAPLING", "DANDELION", "TANNERY", "MASCARPONE",
    "IRONY", "OVERHEADS", "DEPORT", "PORTENT", "EXHALE", "CELERY", "MOHAIR", "DERISION", "EFFLUENT", "PETULANCE",
    "CONSERVATION", "CANASTA", "ALCOVE", "BARGAINS", "BILLET", "LAYABOUTS", "REVENUE", "ULTRAMARINE", "HAMLET", "SCOWL",
    "AUDITORIUM", "MINESWEEPER", "ETHER", "PAWNBROKER", "PUNGENT", "PALLID", "LIVERWURST", "PLATFORMS", "ROOKIE", "HANDSOME",
    "DEBONAIR", "DIPLOMAT", "INSOFAR", "OPTICIAN", "REGALIA", "STAGNATION", "BARISTA", "RELATIONSHIP", "PUPPET", "BATON",
    "STAIRWELL", "DIGIT", "FLAGON", "ALLOWED", "LIQUORICE", "MASSIVE", "PESSIMIST", "BANDICOOT", "AKIMBO", "MICROWAVE",
    "FOUNDRY", "EQUIPPED", "COMMODORE", "LIEU", "DISILLUSION", "TORQUE", "PAUNCH", "IDLER", "HYDROFOIL", "BOVINE",
    "MUNCHKIN", "MEANTIME", "PEERAGE", "PREAMBLE", "INSECT", "HANDMEDOWNS", "HOVERCRAFT", "ABJECT", "DOGGEREL", "JETTISON",
    "KETCH", "CONCERTINA", "PALINDROME", "MASK", "DEARTH", "ECLIPSE", "UNICORN", "MAUDLIN", "FOOTLOOSE", "LIKEWISE",
    "PARALLELS", "INDENTURED", "MIGHTIEST", "ARTLESS", "THRONGS", "RAMIFICATIONS", "ATOLL", "EDIFICE", "CARP", "ARTEFACTS",
    "HUMDRUM", "PERUSE", "ABUNDANCE", "RETROGRADE",
    "MEATLOAF", "BARTENDER", "CASTOFFS", "RHUBARB", "ARBORIST", "GRASSHOPPER", "FEARSOME", "BRANDISH", "CARBONCOPY", "GATE",
    "ANTIDOTE", "MUSTY", "PAJAMAS", "TIMEPIECE", "SPOKESPERSON", "FERRETS", "AMENITIES", "PENULTIMATE", "RESTITUTION", "NIGHTINGALE",
    "RATIFY", "PASSE", "PIECEMEAL", "WELLWISHER", "BALLISTIC", "EXTRACTIONS", "RATTLED", "FATHOM", "FORBID", "SAMPAN",
    "INHIBITION", "DOUGHNUTS", "BACKSLIDER", "AVERSION", "ASSET", "MICROCHIPS", "HARRY", "FOOTNOTES", "OPTIMIST", "ESTIMATE",
    "IRIS", "WRISTWATCH", "COWARDICE", "PRIVATIONS", "WISHBONE", "PULSATING", "PLUSFOURS", "CARNIVORE", "COMPOSITE", "BAROQUE",
    "ADVICE", "LISTLESS", "LEMMINGS", "LICHEN", "HEARSAY", "CARTON", "SPEAKEASY", "CARDIOLOGIST", "FOOLPROOF", "CALIBRATE",
    "GRIZZLED", "MOTIONLESS", "RADIOACTIVE", "VAMOOSE", "CLOCKWISE", "COLLUSION", "EYEFUL", "INSTRUMENTS", "AFTERMATH", "GUSHER",
    "HAPHAZARD", "BIRTHRIGHT", "HEARTBURN", "IMMATERIAL", "SHUCKS", "JOINERY", "COPOUT", "ROTUNDA", "FREEFORALL", "DUNGAREES",
    "CONDESCENDING", "DEBUNK", "CURSOR", "CARNATION", "FOLLY", "FALSETTO", "FLEETING", "AFTERTHOUGHT", "RUNAROUND", "TREADMILL",
    "BARCODE", "ESCARGOT", "DISSEMBLE", "EARTHBOUND", "DECIDUOUS", "GARBAGE", "SWANSONG", "KINSHIP",
    "ONLOOKERS", "ROLLINGSTONE", "SUPERVISION", "SANDALWOOD", "AMENDMENTS", "PHIAL", "TINKERS", "UNBECOMING", "LIFECYCLE", "DOWNRIGHT", "OVERTURE", "ESCAPOLOGIST", "WELLBEING", "WATERCOLOUR", "WOEBEGONE", "INSET", "REPARTEE", "FROMAGE", "MENULOG", "SKULLDUGGERY", "RYE", "MUDFLATS", "PANACHE", "POUND", "FLUNG", "HEADSTRONG", "CARDBOARD", "SEESAW", "JUGGERNAUT", "AIRWAVES", "RATIONAL", "DERANGED", "PAUCITY", "CLOCKWORK", "WILLOTHEWISP", "SCRUMHALF", "CAMERADERIE", "RULERS", "WHIMSICAL", "LANCERS", "WOOLSHED", "SKYLARKING", "CANAPE", "STEERAGE", "CANCAN", "HOPSCOTCH", "FANCYFREE", "MOUTHPIECE", "KAYAK", "BROOMSTRUCK", "WISHYWASHY", "GLOSSARY", "COMMONPLACE", "WORDY", "SHOGUN", "CRUSTACEAN", "MADCAP", "FLAGRANT", "BEATLES", "CROCKPOT", "SANDBLAST", "BLOODHOUNDS", "FORMIDABLE", "POMPOMS", "CELLPHONE", "WARHEADS", "SEDIMENTARY", "CROCHETY", "NEGATIVITY", "TRILLIONS", "TASTEBUDS", "OVERLOOKING", "BROGUES", "SUBPLOTS", "COWHIDE", "ASTERISK", "LOOKALIKE", "SPELLBINDING", "DIMWIT", "DRONE", "BARNDANCE", "SHINDIG", "THUNDERCLAP", "CURDLE", "PIEEYED", "FACTOTUM", "BOOKSHELVER", "QUEENSLANDER", "EMULATE", "EXTENSION", "WHIRLIGIG", "DIAGNOSE", "UMTEENTH", "COMEUPPANCE", "NUMBSKULL", "THINGAMAJIG", "MOSCATO", "MINUSCULE", "MELANCHOLY", "CORGIANDBESS",
"ANTELOPE", 	"MERCENARIES", 	"BOOBOOS", 	"ATTORNEY", 	"BODYGUARD", 	"COWSLIP", 	"SCREENPLAY", 	"SUBDIVISION", 	"WHOLEHEARTED", 	"FOOTRACE", 	"SUITABILITY", 	"TRAILBLAZER", 	"GUMPTION", 	"DAMNATION", 	"BOOMTOWN", 	"OMBUDSMAN", 	"HISTRIONICS", 	"KERNEL", 	"SUPPOSITION", 	"CONVERTIBLE", 	"LAUGHINGSTOCK", 	"SANDBLAST", 	"MASTHEAD", 	"WISTERIA", 	"FOURFLUSHER", 	"OPOSSUM", 	"DEMOUNTABLE", 	"CHAINMAIL", 	"LAMBASTED", 	"BUFFETING", 	"POLARISED", 	"FORCEFUL", 	"DEADBEAT", 	"DOWNCAST", 	"LOUDHAILER", 	"FAHRENHEIT", 	"FLOPPY", 	"MICROMANAGER", 	"UPHOLSTERY", 	"PLAYFULNESS", 	"UNABIDING", 	"ERASURE", 	"PENINSULAR", 	"BUBBLING", 	"BOILOVER", 	"FATIGUED", 	"CARPORT", 	"VENTURESOME", 	"LOGGERHEADS", 	"BOOKENDS", 	"SEXTET", 	"GREENGROCER", 	"GROOVY", 	"PRESENTABLE", 	"ADDLED", 	"CRITERIA", 	"GROUNDHOG", 	"UNCONVENTIONAL", 	"PONDER", 	"ROLLERCOASTER", 	"DISCOUNTS", 	"LAIR", 	"MOTORMOUTH", 	"INDISPUTABLE", 	"GIMME", 	"HILLBILLY", 	"EYEBALL", 	"SHOCKJOCKS", 	"HINDSIGHT", 	"LOOKALIKE", 	"STAMPDUTIES", 	"TANGO", 	"RIDDANCE", 	"ELABORATE", 	"STOPWATCH", 	"STUPENDOUS", 	"SCAR", 	"PENNYPINCHER", 	"COUP", 	"CROWDPLEASER", 	"TAPDANCERS", 	"RUBBISHED", 	"TROTTERS", 	"PANDEMONIUM", 	"FATHEADED", 	"DAPPLED", 	"PERPETUAL", 	"TUBERS", 	"UNTHINKABLE", 	"ROUSEABOUT", 	"SPACECADET", 	"DIAGNOSIS", 	"FLATTERY", 	"FRITTER", 	"WITHER", 	"INFRADIG", 	"PERCOLATOR", 	"SUPERCILIOUS", 	"ACCUMULATION", 	"PARENTHESIS", 
"TUNNELBALL", 	"CAPERBERRIES", 	"MEADOWLARK", 	"GLADHANDER", 	"CHITCHAT", 	"UNASSAILABLE", 	"COPIOUS", 	"INVOICE", 	"INFORM", 	"OVERACTING", 	"BOOHOOING", 	"SMIDGIN", 	"CHATTERBOX", 	"GAINSAY", 	"JADED", 	"BACKCHAT", 	"DACHSHUND", 	"INSTALLED", 	"ILLUMINATING", 	"RAUNCH", 	"CHLOROFORM", 	"FUNFAIR", 	"CASESTUDY", 	"PUGNACIOUS", 	"WILDERNESS", 	"ILLUSIONARY", 	"BAMBOOZLE", 	"HEIRLOOM", 	"MAJESTIES", 	"RATTATAT", 	"GOALKEEPERS", 	"FANFORCED", 	"ARCHIVES", 	"DUMMYRUN", 	"RUMBALL", 	"BREATHTAKING", 	"DETERGENT", 	"HORSEDRAWN", 	"CURSIVE", 	"NOTABLE", 	"KNAPSACK", 	"AIRHEAD", 	"AUTOBAHNS", 	"USELESS", 	"FUNDAMENTALS", 	"ADMISSION", 	"BACTERIA", 	"BROUHAHA", 	"ORDEAL", 	"POSTDATED", 	"CONTOURS", 	"FLIPFLOPS", 	"DISCOURSES", 	"FREEWHEELER", 	"ENTRAILS", 	"MASTICATION", 	"OPAL", 	"OFFGUARD", 	"DELVES", 	"TENTATIVE", 	"WHOLESOME", 	"PIEBALD", 	"OUTGOING", 	"MUTATIONS", 	"PACIFIST", 	"PRINCIPALITY", 	"KEYRINGS", 	"SHARECROPPERS", 	"BEDROCKS", 	"HOOT", 	"DENIGRATE", 	"INVERTEBRATE", 	"SHORTBREAD", 	"FLEETFOOTED", 	"WRONGFOOTED", 	"MUMMIFIED", 	"TOPNOTCHER", 	"IDEALISTIC", 	"FASTFOOD", 	"FARFETCHED", 	"COUPE", 	"ANTIQUATED", 	"GRANARY", 	"DOUBLEBUNGER", 	"OBJECTIVE", 	"SUMMIT", 	"NIGHTMARE", 	"THOROUGHFARE", 	"SLIPSTREAM", 	"MINDSET", 	"TOTTERING", 	"EMBARGO", 	"LEMONCELLO", 	"GRAVITAS", 	"CATAPULT", 	"CARGOES", 	"QUADRANT", 	"SHOTGUN", 	"BLOCKBUSTER", 	"ADDENDUM", 
"FREEZEFRAME", 	"BIOLOGICAL", 	"STOCKEXCHANGE", 	"ACCENTS", 	"SUSPENDERS", 	"ECHOCHAMBER", 	"TEMPLATES", 	"CHEAPSKATE", 	"SUNBEAMS", 	"TOASTMASTER", 	"WISECRACKERS", 	"SIGNWRITER", 	"PUMPKIN", 	"HAIRRAISING", 	"BROADBAND", 	"FACEBOOK", 	"STILTON", 	"JUDGES", 	"SHARPSHOOTER", 	"LAWSUIT", 	"SUPREMIST", 	"COWPAT", 	"MUMBOJUMBO", 	"REPOSSESSING", 	"GULLIBLE", 	"HASHTAG", 	"CANDELABRA", 	"OPPORTUNIST", 	"PROPAGANDA", 	"CLIPBOARD", 	"NIGHTCAP", 	"LAURELS", 	"DESSICATED", 	"OFFKEY", 	"LIGHTYEAR", 	"ALIENATE", 	"AMPHIBIAN", 	"DISINCLINED", 	"SHAMROCK", 	"SWEEPSTAKES", 	"TIMETABLE", 	"ITINERANT", 	"PREMIERSHIP", 	"MOCKORANGE", 	"GUNSHY", 	"SINGLEMINDED", 	"DRIFTWOOD", 	"FRETWORK", 	"TERMINUS", 	"PARAMOUNT", 	"ASSAILANTS", 	"ROADWORTHY", 	"MUSHROOM", 	"LOWBROW", 	"DRAFTDODGER", 	"PORTERHOUSE", 	"GNATS", 	"DASHBOARD", 	"NONPLUSSED", 	"CUSTODIAN", 	"INTUITION", 	"ANGLEGRINDER", 	"TENNANTS", 	"WEBSITE", 	"FIGUREHEAD", 	"HEDGEHOGS", 	"CLOGDANCING", 	"RACECALLERS", 	"HANDICRAFT", 	"DRESSMAKING", 	"ILLADVISED", 	"MONUMENTAL", 	"CANTEEN", 	"IRREVERSIBLE", 	"WINDCHEATER", 	"BUNGALOW", 	"INNOCENTS", 	"PESTLE", 	"HOGWASH", 	"HABITAT", 	"DREADLOCKS", 	"BULLHEADED", 	"ELASTICITY", 	"CENTIGRADE", 	"SWEATBAND", 	"POPSICLE", 	"STEREOTYPE", 	"STUDYING", 	"PLAID", 	"FLAGPOLE", 	"WARRANTED", 	"WINEPRESS", 	"SHORTHANDED", 	"PUFFIN", 	"BINGO", 	"HINTERLAND", 	"DEBRIEF", 	"COUNTERTENOR", 	"METRONOME", 	"EMULSION", 
"EIDERDOWN", 	"COUNTERFEIT", 	"ABASEMENT", 	"ALASKA", 	"AIRFRYER", 	"MANAGED", 	"FORTIFIED", 	"FETED", 	"NEGATIVITY", 	"DENSITY", 	"COOPERATIVE", 	"HORSEPLAY", 	"PARTICIPANTS", 	"IMMOBILITY", 	"CATNAP", 	"WEDDINGRING", 	"DEPTHCHARGE", 	"BLINDFOLD", 	"OUTSTANDING", 	"BANNERS", 	"PITTERPATTER", 	"LIKEWISE", 	"JUST", 	"NEIGHBOURS", 	"MANGROVE", 	"PORT", 	"GAPTEETH", 	"QUAIL", 	"DROMEDARIES", 	"BEESTING", 	"DAYBREAK", 	"NOSEJOB", 	"BOOKMAKERS", 	"AFFIRMATIONS", 	"MADHATTER", 	"REARVISION", 	"DUMBFOUNDED", 	"BULLFIGHTER", 	"RAFTERS", 	"MINESHAFT", 	"EXCLAIM", 	"DEFECTIVE", 	"BELOVED", 	"MALLEABLE", 	"EXACT", 	"WARDROBE", 	"LONESOME", 	"FRAMEWORK", 	"FOOTFAULTS", 	"BILINGUAL", 
];

var questionarray = ["A mad old man is a skiers' delight", "To Make Employer Look Good", "A Purely Fleeting Glimpse", "Small Love-Boat for Quiet Waterways", "Lacking In Lawn-Bowl Skills (Judgmental?)", "Theatre Understudies' Dream Come True (No More Isolation)", "Pursued In A Purely Innocent Manner", "High Spirited Termite (Feeling Bullet Proof)", "Selection Committee For Olympic Field Events", "Constant Nuisance - Always Close By (Deserves A Real Spray)",
    "Manual For Shonky Car Dealers", "Refreshing Drink Created In Ancient Greece, Said To Reduce Libido", "Bicycle Repair Kit; Made In China", "Greeting Between Dairy Farmers", "Large, Often Overpriced Flowerpot (Visual Poetry)", "Risk Taker (Perhaps To Bring Home The Bacon)", "Word For A Group Of Paramedics (Might Feel The Pressure On This One)", "Small River-Boat For Modest Gamblers (Pole Position - Best Bet)", "Drama Instructor For Group Of Travelling Players", "Feet (Of The Famous Perhaps)",
    "“Dad” Jokes (Lame But Kinda Sweet)", "Piece Of Music Sung Off- Key", "Security Escort In Money-Carrying Vehicle", "Pedal-Powered Vehicle; Used Only In Polar Regions", "Greedy (Always More!)", "Art School", "Happy Go Lucky Artist", "Japanese Game Of Strategy, The Aim Being To Cover All Moving Pieces", "A Mild Complaint (What's Your Beef About This?)", "The Cost Of Being A Groupie?",
    "Nation Governed By Former Sports' Judges", "Drum Encore (A Pleasing Result)", "Anthology Of Different Forms Of Poetry", "A Gang Of Owls", "A Hold Up In Egg Production", "Alternate Rock Group", "Announced Intention To Act (Marry, Perhaps)", "End Of Season Netball Party", "Proposal For Group Action (Gardening)", "Deodorised",
    "A Serious Mexican (If The Cap Fits …)", "Proud Mantra Of Vertically Challenged People", "Official History Of High Rise Construction", "Specially Designed Vehicle For The Transport Of Sacred Objects", "Winner Of The Mushroom Growers' Award", "Gamblers' Lucky Streak (Hot!)", "Tennis Player On The Take", "Competent Tour Guide (Not Showy)", "Burnt-Out Cooking Utensil", "Stylish And Fairly Successful Sports Team",
    "A Shirty-Tempered Despicable Fellow", "Vulcanologists' Conference (Letting Off Steam)", "Collection Of Memorable Sayings", "Baffled Bovine", "Nuts About Making Money", "To Interpret A Foreign Language", "Wise Overseer Of Fruit Orchard", "A Small Truck, Beyond Repair", "A Highly Skilled Confident Boxer", "A Specific Loan For The Purchase Of Spectacles",
    "The Gait Of A Melon Picker At Work", "College For Art Of Speech Students", "Someone Who Forgets To Breathe", "Practice Of Using Weaponised Cows In Terrorist Attacks", "Calming Medication, Immersed In Warm Beverage Before Taking", "Travelling Showfolks' End Of Circuit Celebration (A Merry Round Or Two)", "Expert On BBQ Cooking", "Extremely Shy (Doubly So)", "No Spring In The Step", "Indiscreet Private Secretary",
    "A Large Verbally Abusive Family", "Tainted Money", "After-Dinner Game Of The Upper Set (The Ladies' Escape)", "Unsound Reason For Action (A Bit Off The Rails)", "Wild Celebrations, Often Making The Gossip Columns", "Symphony For Percussion Section", "Monument Honouring Law Makers", "A Baby", "Forced Smile Concealing Anger Or Disappointment?", "Top Buddhist (Not Counting The Dalai Lama)",
    "A Total Master Of Ancient Stringed Instrument", "Citizens Against Horse Stables In The 'Burbs", "Without Question A Police Dog's Preferred Weapon", "Ceremonial Telescope Worn By Rear-Admiral", "Teacher With Just A Fraction Of Discipline Left In Store", "The Snare Of Fame", "Musical Toilet (“A Tune With Every Flush”)", "Italian Dish Always Served Al Fresco", "A Graceful Supple Bee", "Silent Stealthy Clever Bee",
    "A Zoo's Information Periodical", "Large Town Proud Of Its Heroic Past", "Rather Wooden Gesture Of Respect", "Federation Of Scottish Clans (Still Plotting Amongst Themselves)", "Ready To Be Auctioned (Prohibitive Price?)", "An Exclusive Seaside Golf Course", "Young Foolish Person (Capable Of Further Growth)", "A Foppish Jungle King", "Solarium (Takes Some Hide To Start With This)", "To Illegally Alter Racehorse's Appearance (Stewards Get Cheesed Off By This, You Might Get A Little Hoarse Discussing It)",
    "Steel-Works (Sarcasm Unintended)", "Hats (Their Price Can Add Up)", "Unpack", "Travelling Fortune-Teller'S Abode (No Need To Canvas Others)", "Formerly Healthy (Smoking Could Be Cause)", "Market-Gardener'S Stipend", "Moustache Particle", "Maths Process: Reduction Of One To Lowest Form", "Filthy Rich (Keeping Money Flowing)", "Ambulance For Domestic Animals (Originally It Was A Sulky)",
    "Jam Factory (Well Preserved)", "Hand-Held Spanish Musical Instrument Often Bedecked With Images Of Royalty", "Australian Slang: A Bloke Who'S Found His Niche In Life", "Publican'S Profits", "Tradional Military Dance Performed At Close Quarters", "Free Range Hens (Lazy?)", "To Change The Location Of An Event (Usually Profit-Motivated)", "Chief Of Staff Of Elite Usa Land And Sea Force", "Retirement Village For Shakespearian Actors (A Nice Place To Be)", "Unhappy Looking Night Bird",
    "A Room Full Of Accountants (Checkmate)", "Your Very Own House-Cleaner (Can Be Explosive By Nature)", "Choice Of Anaesthetics", "Dealer In Chess Sets", "Bloke Strongly Into Word-Play", "User-Friendly Container Screw-Top (Rivals Pale By Comparison)", "Very Badly Behaved German Sausage Dog", "Recommended Footwear For Train Commuters", "Novice Chess Player (Piece By Piece Learning)", "To Distribute A Few (Gesture Looks Good)",
    "Charming Tune", "Floor Covering With Neutral Patterns (Common In Canberra)", "Selected But No Guarantee Of Permanency", "Adviser About Clear Eyed Choices", "Tales Of Royalty (Clothed In Glamour)", "After The Buck'S Party (Something Smells Off)", "Legal Expert Looking Forward To The Daily Grind", "Vessel Steeped In Blood (Pirate'S, Sonny?)", "Favourite Young Dog (Has Everyone On A String)", "Decision To Continue Innings (Field Marshalling May Be Needed)",
    "In-House Water Tank (A Good Step)", "Tiny But Handy Excavator", "Displaying Patriotism (After A Few Drinks)", "Fully In Debt (With Bank Permission)", "To Serve All Sorts Of Alcohol Chilled", "Large Scale Liturgical Practice Of The Catholic Church", "Heavy Fog Likely To Linger (Gloomy Outlook)", "Aussie Bush Slang: Bowlegged Bloke", "Form Of Sumo Wrestling - Hands Must Remain On Hips", "Very Tiny (Yet Warm) Greeting",
    "Lost Property Office", "Fitted For The Bon Mot", "Main Entrance To Yacht Club (Sounds The Way To Skip In)", "Makeshift Toilet", "Expel Member From Magician'S Union (Reality Strikes)", "Conversation Among Petrol-Heads", "Sharp Blow To The Mid-Riff", "Unemployed Auto Mechanic (Ready To Work)", "Implement Used In Fencing Off Pools, Dams, Etc (Touche!)", "Plant Based Beef Substitute",
    "Relatively Light Meal", "Just Your Average Experience", "Era Of Equality (Ranked The Same)", "Set Of Exercises Preparatory To Leisurely Stroll (Wise Introduction)", "Cult Member", "Top-Shelf Clothing (Getting Them Is A Process)", "That Hobby You'Re Always About To Start", "To Protest Without Hope", "Canine Chorus (From Bad To Verse)", "To Disinherit Male Heir (Like So Much Excess Baggage)",
    "19th Century Customs Patrol Ship (No Release Here)", "Brief Musical Soiree", "Friendly Airport Employee, Farewelling And Greeting Alike", "Question In Disguise", "Soil Lacking In Nutrients", "Master Barber (Blots Out Rivals)", "Undergraduate Humour (Sharp; One Dimensional)", "Violin For Sentimental Songs", "Requiring Ankle Surgery (Tightening Needed)", "Clever At Choosing",
    "Shy People, Impossible To Meet At Any Given Point (Except When Travelling On The Same Plane)", "Fitted With False Teeth (Apprentice-Made I'Ll Be Bound)", "Extremely Indecisive", "Painter Who Has Simply Sold Out", "Casual Footwear With Mass Appeal", "Protective Holding Pen For Stud Merino Sheep", "Levy On Visitors To Great Barrier Reef", "Complex About Entering Tall Buildings", "Constantly Complainging Fisherperson", "Gossip Column About Pretentious Theatre-Set",
    "Percussion Instrument To Accompany The Bagpipes (Fairly Mundane)", "Library Levy Imposed On Each Visit (So Browse For Hours)", "Baker'S Traditional Jig/Reel (A Rich Tradition)", "Has Class In The Old Fashioned Way",
    "Smoko At The Abattoirs (Just Taking It Easy)", "Kind Hearted Beerpuller ", "Knitters Made Redundant", "A Tart Jibe (May Plant A Wound)", "Branch Manager (Leaves Nothing Undone)", "Nickname Of Lawn Bowls Skipper (Can Plague Opponents)", "Not Entirely Brave", "Breakfast Bowl For Regular Guys And Gals", "Fake Diamond (Duplicated)", "Open And Shut Case",
    "Opposed To People-Adoration (Especially Of Babies)", "Driven By Sense Of Obligation (Sometimes Feels A Little Stale)", "Replacements For The Night-Shift", "A Quarter Of An Hour; Or A Half; Or A …", "Publicity Officer For Bicycle Club", "Very Poor Cricket Batter; Even Goes In After The Rabbits", "Way-Side Chapels", "Best Ever Writing Implement (Maybe Second Best)", "Make Up Department", "Nocturnal Cyclonic Experience (My Heart Leapt)",
    "To Sign Off With Pest Controller", "Outmoded Football Move (Acute Thinking Needed)", "Progressive Dinner", "Water Diviner", "Out Of Control Football-Club Supporter", "Excerpts From Dentist'S Memoirs", "Disturbed By Baby'S Playing", "Aquatic Work-Out Designed For Six-Footers", "Up For Auction (Reserve Somewhat Prohibitive)", "Vessel Full Of Chinese Junk-Food",
    "Art Showing In Private Gallery (A Reserve On Each Work)", "Wholly Obsessed With Money Making", "Inept Ice-Skater (Shouldn'T Have Dodged Practice)", "One Person'S Account (Reluctantly Given)", "Small But Valuable Beast Of Burden", "Very Tiny Hot Crisps (Easily Reheated)", "To Pester In A Right Royal Manner", "Chiropodist'S Diary", "Light Fog Likely To Lift Soon", "Perceived As A Friend",
    "The Girl In Everyone'S Eyes", "Off Hand Observation", "Extreme Fear Of The Cold", "Hardships Of The Lowest Ranked Soldier", "A Fancy Joint", "Gobbling Up The Legumes (Done In A Heart Beat)", "Expert Golfers Playing In Traditional Garb", "Always Goes Against The Grain (Food For Thought)", "Where Workers' Accident Benefits Are Paid (With Mixed Results)", "Bankrupt Through Over-Spending On Flamboyant Artworks",
    "An Addition To Your Bad Habits (You'Re In Their Grip)", "Without A Written Schedule (Result Of Apathy?)", "Citrus Trees Whose Whole Crop Falls Almost Simultaneously", "To Befriend A Botanist", "Talking Parrot (So It'S Said)", "Three Panel Comic Strip Reduced To Two", "Speech Therapist'S Office (Often In Secluded Location)", "Specialist Bridge Player (Favours Hearts As Trumps)", "Evidence Of Stupidity", "To Celebrate In A Measured Tone",
    "Encountered A North American Bear (Still Complaining)", "Non Eventful Agm (Everything Just Lapsed)", "Very Busy On The Air-Waves (To Glowing Reviews)", "Rapidly Disappearing Large-Antlered North American Deer", "Sage Time-Manager", "Conspiracy To Scam Auto-Accident Insurers", "A Summation Of The Paris Skyline", "Band Aids (Essentials)", "Recess Following Algebra (Or Arithmetic, ….) Lesson", "Flatterer Of Oil Tycoon",
    "Natural Random Obstructions On Golf Course", "Successful Baby Delivery (As It Should Be)", "Internal Combustion (It'S Personal)", "Wastage On Dressmaker'S Floor (Relevance?)", "Nickname Of Shy Oyster Opener", "A Club For Clubbers (They Fit In Easily)", "Police Industrial Strike (Excuse For Extra Holiday?)", "Tighter In The Girth (But Still Room To Go Round)", "Event With No Admission Charges (Could Cause Stampede)", "Suitable Trousers When Mucking Out Stables",
    "On The Way Down But Still Patronising", "To Ridicule Two-Tiered Beds", "Electric Mouse-Indicator", "Country With Blooming Automobile Industry", "Rash Unsuccessful Tennis Shot At The Net", "A Singer Wearing Dentures", "Shipboard Romance (Here Today)", "A Break Following Mental Exertion", "Circuit Training (Often Put Off)", "Pedal-Powered Tyre Factory",
    "Etiquette For Hotel Drinkers (Modified For Digital Age)", "Snail-Paced French Barge Carrying Food Produce", "To Disperse After False Fire Alarm", "Returning From Outer Space", "A Falling Down In Decision Making Process (Leaves People Worried)", "Been Put Out", "Tchaikovsky'S Finale", "Blood Vessel", "Peer Group", "A Piece Of Ancient Mossless Rock Formation", "Better Than 20/20 Eyesight", "Aromatic Raw Material For Making Open-Toed Clogs", "Alterations To The Common Book Of Prayer", "Records Cabinet In Science Laboratory", "Irish Philosophers (With Some Gypsy In Their Souls)", "Not Intending To Attend (Appropriate Behaviour?)", "Exercise Bike (For All Seasons)", "Successful Parachute Landing", "Cricket Bowlers Warm Up Session (A Bit Of Fine Tuning)", "Bound For Fame And Fortune (Like Houdini)", "Healthy Creature", "No Oil Painting", "Dismal Cry For Happiness", "Little Darlings Of Society (Arrived Late In The Season)", "Golf Course Banter (Especially When Hitting Off)", "Consequence Of Time'S Passing (Can Cheese You Off)", "Lazy Cook", "Illicit Brain Surgery", "Smile Of A Bourbon Drinker ", "Apartments Built On Mangrove Shores", "Pain From Kitchen Cleaning (Putting Up With It With French Flair)", "Cake Reflecting Old Fashioned Values", "Final Movement In Famous Traditional Highland Dance", "Impervious To Browbeating ", "Rule-Setting Body For Bridge, Canasta, Etc (Not A Solid Group)", "Brief Inspection Of Playground Equipment ", "Very Large Empty Beer Stein (They Often Pile Up At Munich)", "Applause At Air-Guitar Concert", "Recognizing Logic Of Wartime Restrictions", "Unemployed Cowboy (Pretty Mad About It)", "Town Lacking In Public Amenities", "Employment Paid By The Hour", "That Will Of Grandpa'S You Can Never Locate", "Rugby Back Worth Four Forwards", "Photographers' Knees Up", "Leaders Who Inched Their Way To The Top", "A Quaint Musical Comedy", "Traditional Opening Dance At Surgeons' Ball", "A Measure Of Shearer'S Worth", "Jet Pilots Just Mucking About", "Has Ability To Mimic", "Passenger Class On Cattle Boat", "Doubly Able (With French Flair)", "Blend Of Whisky And Ale (May Cause Dancing On Footpath)", "Possessing No Imagination", "Spokesperson For Dental Association", "Conversation About Arctic Canoeists", "Obsessed With Scottish Sport Of Curling (Like Cher)", "A Needy Germophobic", "List Of Paints With Sheen", "Mall With Dubious Reputation", "Dictionary", "Pistol Of Commander In Feudal Japan", "Ciabatta Loaf With Crab Filling", "Title Of Barmy Army'S Leader", "Extremist Patriotic Speech", "Yesterdays'S Men", "A Failed Crazy Scheme", "Great Time At The Beach", "Dogs Easily Led By The Nose", "Has Ability For Self Growth", "Twin Pair Of Cheerleaders", "Where Superman Gets Changed In Digital Age", "Military Commanders Leading From The Front", "Training College For Geologists", "Irritable Music Composer", "Disapproval Of Old Fashioned Photographic Methods", "Sounds Of Countless Bird Calls", "Close Dining Out Companions", "Appearance Of Jaded Tourist", "Footwear Designed With Accentuated Tongues", "Underwater Adventure Narratives", "Observation Post For Herd Twitchers", "A Gamble For Stardom", "To Have A Similar Viewpoint", "Repairing Magic Incantations (Mesmerising Work)", "Feeble, Unclear Humour", "Lazy Bagpiper", "Farm Animals' Foot Tapping Celebrations", "Exploratory Lower Leg Surgery", "Storm Of Applause", "Friendly Embrace Turned Sour", "Intoxicated Look Of Pastries Lover", "Mobile Reference Library", "Job For Those With Literary Bent", "Midwinter Cry Of The Northern Canetoad", "A Tardy Ostrich-Like Australian Bird (Fears Habit Might Be Catching)", "Prolonged State Of Relaxation", "Job On The Merrygoround", "Slanted Probiscus", "Forever Adolescent", "Top Platform Of Escalator", "Anaesthetised Head", "The Old Folkdance Whose Name You Can't Recall", "Wine-Swilling Mosquito", "Just Lacking The Last Tiny Disguised Clue", "Very Mournful Sheepdog", "Gershwin-Like Folk Opera Honouring Late Queen And Her Favourite Dog",
"Ants That Run Away To Marry", 	"Market Forces", 	"Repetitive Negative Barracking (Always A Mistake)", 	"Has A Lot Of Will Power", 	"Pest Controller", 	"Dangerous Plant For A Dairy Farm", 	"Film Actors Mucking Around On Set", 	"A Squadron Of Submarines", 	"Healthy - Cardiac Wise", 	"Mini Sprint (Victory Is A Matter Of Inches)", 	"Has Tailoring Skills", 	"Bushwalker'S Club Coat", 	"Bravery During Dental Surgery", 	"Country Committed To Hydro Electricity", 	"Very Noisy City", 	"Judge At The Flower Show", 	"People A Little Mad About History", 	"A Hard Nut Of A Commanding Officer (Soft Inside)", 	"Allocated Place At The Dining Table", 	"Missionary'S Vehicle Of Choice", 	"Share Investments Making You Happy", 	"A Great Time At The Beach", 	"Skipper Of Sailing Boat", 	"Poignant Regret Over Missed Gardening Opportunities", 	"Person Overly Concerned With Toilet Hygiene", 	"Nocturnal Marsupial With Irish Forebears", 	"Portable Aid For Getting Off Horse", 	"Medieval Body Guard", 	"Criticised For Roast Mutton", 	"Working The Smorgasboard Floor", 	"Accustomed To Freezing Conditions", 	"Army At Total Enlistment Strength", 	"Soulless Music", 	"Appearance Of Disappointed Fisherman", 	"Dangerous Looking Thunderous Storm", 	"Degrees Of Tallness", 	"Affectionate Name For Unsuccessful Stand-Up Comedian", 	"Controls Sound Systems", 	"Western Saloon Where Guns Must Be Surrendered", 	"Mood Of Successful Theatre Owner", 	"Attitude Of The Footloose", 	"A Time Of Certainty (Completely Disappeared)", 	"Narrow-Minded Kind Of Writing", 	"Tiny-Tot Bedecked In Showy Jewelry", 	"Dramatic Result Of Lancing Carbuncle, Cyst, Etc", 	"Worn Out From Dieting", 	"Driver'S Travel Bag", 	"Prudent In Investing", 	"Fractious Presidents Of Timberworkers' Unions", 	"Literary Conclusions", 	"Music Combo With Risque Repertoire", 	"Novice General Store Operator", 	"Stuck In A Rut (But Cool About It)", 	"Okay As A Gift", 	"Can'T Do Addition", 	"Benchmarks For Unhappiness", 	"Territorial Pig", 	"Won'T Attend Meetings", 	"A Swimmer In Waterholes, Small Lakes, Etc (Can Go Deep)", 	"Nomadic Surfboard Rider", 	"Members Of Nobility Who Have Cheapened Themselves", 	"Ostentacious Dwelling", 	"Represents Automobile Association", 	"Table Of Arguable Ownership", 	"Nickname Of Demanding Golfer", 	"Teapot For Mountain Dwellers", 	"Optometrists'  Favourite Sport", 	"Lurid Male Underwear", 	"Rear Vision Mirror", 	"To See Things From A Similar Viewpoint", 	"Job Description For Postal Workers", 	"Pallor-Inducing Seductive Latin Dance", 	"Good Dance To Fob Off Unwelcome Parting", 	"To Itemise Required Science Experiment Components", 	"Unreliable Timepiece", 	"Dense, In A Big Way", 	"Official Hospital Tissue", 	"Sadistic Miser", 	"Example Of A General Rule", 	"Amuses The Masses", 	"Plumbers Who Put On Quite A Show", 	"Way Down In The Dumps", 	"Pigs Trained For Racing", 	"Chaos In The Panda Cage", 	"Given Up On Dieting", 	"Speckled But Always Delicious Piece Of Fruit", 	"Always Everyone'S Favourite", 	"London Underground Commuters", 	"Capable Of Zen Meditating", 	"Imprecise Alarm Clock", 	"Junior Airhead", 	"Nasal Examination", 	"Exaggerated Praise Of An Apartment", 	"In The Dough, Wasteful, Soon To Face The Heat", 	"To Use Humour To Court A Woman", 	"Mine Not Worth Developing", 	"Will Be Sick Afterwards", 	"Extra Idiotic", 	"A Gathering Of Folk With Their Heads In The Clouds (Cirrusly?)", 	"Publication On Child-Raising", 
"Game Favouring Under-Achievers", 	"Robberies Yielding Little Fruit", 	"Fun In The Field", 	"One Happy To Help", 	"Pleasant Enough Discussion About Picking Up The Bill", 	"Impossible To Navigate", 	"Can Handle Any Emergency", 	"Harmonious (Will Give A Good Account Of Themselves)", 	"At The Top Of One's Game  (We're Told)", 	"Tired Of Theatre Performances", 	"Barracking From Losing Supporters", 	"Little Piece Of Pigeon Pie", 	"To Verbally Clash (Almost A Punch Up)", 	"To Speak To One's Own Advantage", 	"Tired Of The Gem-Fields", 	"To Converse About The Old Times", 	"Dog, Flat Out In A Hurry", 	"Stabled", 	"Shining A Light On Illness", 	"Dude Ranch Of Dubious Reputation", 	"A Class Of Zonked-Out Students ", 	"Place Of Medium Entertainment", 	"Port Appraisal", 	"Aggressive Bulldogs, Pekenese, Etc", 	"State Of Growing More Angry", 	"Hypochondriacal", 	"A Bamboo Maze", 	"Impending Arrival Of Prince/Princess", 	"Royals With A Sense Of Humour", 	"Tattoed, Noisy Rodent", 	"Soccer Players Measuring Up To Their Ambitions", 	"Brought Back By Popular Demand", 	"Where Old Herb Growers Are Laid To Rest", 	"Urgent Trip To Pharmacy For Baby Pacifier", 	"More Spirited Version Of Pickleball", 	"Basically Just Staying Alive (But Still Awesome)", 	"Off-Putting Sort Of Bloke", 	"Equine Sketch", 	"Abusive Form Of Letter Writing", 	"Clearly Incompetent", 	"Back Pack Cum Sleeping Bag", 	"Open-Minded Person", 	"German Highways Prohibiting Motor Vehicles", 	"To Cut Back On Consumerism (Hopeless)", 	"Mind Games", 	"Publicity Campaign", 	"Where The Germs Like To Hang Out Together", 	"Coffee For Fun Times", 	"Alternative Proposition (Deciding Could Be Harrowing)", 	"Romanced Through The Mail", 	"Shonky Travel Packages", 	"Dud Pancake Makers (Too Casual)", 	"Discussions Lasting The Complete Meal", 	"Amateur Cyclist", 	"Muck-Ridden Pathways, For The Gutsy Only", 	"Cow's Secret Guilty Pleasure", 	"Friendly Greeting On The Gem Fields", 	"Sentry On Tea-Break", 	"Elves With Probing Minds", 	"Hesitant About Camping", 	"Healthy Attitude To Golf Score", 	"Horse Meat Pie, No Added Topping", 	"Never At Home", 	"Mimed Chinese 'Whispers'", 	"Closed Hand, Never Raised In Anger", 	"Country Covered By Friendly Royal", 	"Important Phone Calls", 	"Group Owning Barbershop Business (It Is Hardscrabble)", 	"Lullabies For Modern Music Lovers", 	"This Owl Shows It Cares", 	"To Criticise Someone's Fireplace", 	"Coward (No Backbone?)", 	"Mini Loaf", 	"Wearing Navy-Issue Boots", 	"Wearing Inappropriate Shoes", 	"Too Closely Tied To Mother (Ancient Malady)", 	"Elite High-Jumper", 	"Likes To Lead Off At Cards", 	"Lenten Lunches", 	"Retrieved From A Long Distance (Incredible)", 	"Essential Vehicle For Revolutionary General", 	"On Nodding Terms With Old Folks", 	"Where Grandparents Go To Seed", 	"Event Where Two Things Go Wrong (The Inevitable Fireworks Following)", 	"Complaining, But Detached", 	"Tops In Addition", 	"Dark Horse Having Dream Run But No Happy Result", 	"Carefully Thought Out Road Toll", 	"Moss-Banked Rivulet", 	"Members Of The Mensa Society", 	"Wavering About Having A Child", 	"Ban On Frequenting Public Houses", 	"Stringed Instrument Of Italian Origin With A Bitter-Sweet Tone", 	"Seriously Thick Gravy", 	"Cat's Quickest Mode Of Transport", 	"Efficient Automobile Repair Shop", 	"'Principal Goes Beserk At Assembly!'", 	"Worn-Out Top Shearer (Could Be Fired)", 	"Destructive Little Monster Of The Nursery", 	"The Final Total", 
"A Cold Snap", 	"Well Thought-Out Lifestyle", 	"City Cattle Market", 	"Small Change In Foreign Currency", 	"Principals Upholding Discipine", 	"Noisy Toilet", 	"Dishes For Model Kitchens", 	"Half Price At The Roller Drome", 	"They Support Your Castle In The Air", 	"In Charge Of Breakfast Preparations", 	"Bonbons Containing Smart Jokes", 	"Billboard Prophet", 	"To Press The Country Cousins For The Goss", 	"Follicle Farming", 	"Up Tempo Music Group; Wide Repetoire", 	"Digital Portrait Gallery", 	"Street Entertainer Half Ready For Cheesy Performance", 	"They Have A Matter Of Fact Approach To Their Profession", 	"Nattiy Dressed Western Gunslinger", 	"Litigation Expert'S Attire", 	"Insists On Choosing The Pizzas", 	"Down To Earth Nickname Of Irish Dairy Farmer", 	"Elephant With Diction Problems", 	"Getting Your Own Back", 	"Believing Seagulls Are Tasty", 	"Plain-Fare Short Order Menu", 	"Undergarment Appropriate For Intimate, Soft-Lit Occasion", 	"Music Plagarist", 	"Righteous Male Goose (Not Above Self Promotion)", 	"Barber'S Appointment List", 	"Shot In The Dark", 	"Rest Homes For Retired Champions", 	"Devoted To Coconut Growing", 	"Not To Scale", 	"Beloved Hollywood Buzz Word", 	"To Offend Ufo Visitors", 	"Sounds Like A 'Porky' That Just Might Float", 	"Attitude Of Flat-Earther", 	"Fake Irish U2 Sound", 	"Broom Handles", 	"Where Watchmakers Gather To Eat", 	"Ant Who Left The Nest To Wander", 	"Ocean Liner Where Everyone Competes To Be With The Captain At The Top Of The Table", 	"Sarcastic Citrus (Faking It?)", 	"American Oxymoron (Trigger Warning)", 	"Determined Not To Marry", 	"Suitable Timber For House Boats", 	"Ornate Production, Causing Maker Anxiety", 	"We Can Last Just One More Half Semester", 	"Mountain Viewed On Film By Millions", 	"Pirates Of Yore", 	"Deserving Of Infrastructure", 	"Location For Over Sentimental Lovers", 	"Bit Of A Frowner", 	"Builder Not Working Off The Plan", 	"Retirement Home For Baggage Handlers (Food Is Good)", 	"Little Critters That Can Easily Create Angst", 	"Finding Car Trip Monotonous", 	"Never Beaten At Addition", 	"Guardian Of The Dessert Table", 	"Home Schooling", 	"Has A Point Of View That Wears You Down", 	"A Little Worse Than Nine Ants Residing In The Sugar Bowl", 	"Home Location Of Techno-Savvy Spider", 	"One With A Head For Figures", 	"They Won'T Share Brushcutters, Clippers Etc", 	"Going Dutch At The Ball", 	"Precise Straight Talkers, Staying On Track", 	"Boat Constructed By Hobbyist", 	" Garment Industry With A Seamy Side To It", 	"Seen The Doctor", 	"Intellect Of Statuesque Proportions", 	"Competent Juvenile", 	"Nose First Parking Approach", 	"Garment Reducing Effects Of Flatulence", 	"Messed-Up, Ground Level Construction", 	"Bankruptcy Leads To This Result", 	"Little Nuisance With Grinding Personality", 	"To Bathe A Pig ", 	"Home Done Tattoo", 	"Door Fasteners Feared By Burglars", 	"Attitude Of Darts Player With Potential", 	"Town With Potential To Expand", 	"Just An Average Degree", 	"Provides Music At Sauna", 	"Father Whose Heart Is Easy To Melt", 	"Secretarial Position With Standard Job Requirement", 	"A Class Action", 	"Final Wrap Up Of Scottish Sports News", 	"Mid-European Patriot", 	"Gave Over The Top (But Justified) Call To Arms", 	"Journalists For Grapegrowers' Publication", 	"Stubby Fingered", 	"Black And White Sea Bird With A Reflux Breathing Condition", 	"Exultation At Getting Rubbish Out On Time", 	"Country Infamous For Suggestive Language", 	"To Go Commando", 	"Singer At The Checkout", 	"Sounds Like Punctual Little Fella On Paris Subway", 	"Emu Not Mixing In Well With The Mob", 
"Duck For Cover", 	"How To Detect Fake Female Centipede", 	"Dwelling Place For The Shamed And Fallen", 	"Perpetual State Of Regret (American)", 	"Kitchen Air Conditioner (Warm Cycle Only)", 	"Male, Grown Older", 	"Strong Wine For Besieged French Foreign Troops", 	"Praised For Fair Mangement", 	"Use Of Old Photography Skills", 	"A Measure Of Stupidity", 	"Group Practice Owned By Surgeons", 	"Equine Comic Production", 	"Trousers For The Involved", 	"Results Of Modern Phone Breakdowns", 	"Brief Rest Period For Working Model", 	"Proposal By Phone", 	"Scuba Diving Fee", 	"To Pack Away Curtains", 	"Palace Guards' Professional Performance", 	"They Fly The Flag For Censorship", 	"Sound But Lightweight Comedian's Routine", 	"Astute In One's Choices", 	"Dream Desserts For A True Pudding Lover", 	"Their Arguments Are Often Simply Over The Fence", 	"Narure's Men's Shed (Coastal)", 	"Apt Wine To Welcome Home The Fleet", 	"Dentures Costing More Than The Common Fee", 	"Bird, Timid But Always Still Game", 	"Camels' Milk Farms", 	"Scam In The Honey Industry", 	"Twenty-Four Hour Holiday", 	"Employment In A Perfumery", 	"Book Printers With All The Odds In Their Favour", 	"Mantras Of A Yes Man", 	"Angry Milliner", 	"Mirror To The Immediate Passed", 	"Stupid From Its Very Beginning", 	"Spanish Anti-Propagandist", 	"Receiving Depots For Packages", 	"Dismissal At The Coal Face", 	"A Withdrawn Assertion", 	"Inept Detective", 	"Cherished At Church Wedding But Expensive", 	"Could Be Shaped Into A Shopping Centre ", 	"A Repealed Law", 	"Nurse's Old-Fashioned Uniform", 	"An Isolated Few", 	"Position At The Optometrist's", 	"Ill Fitting Tennis Shoes", 	"Having A Forked Tongue", 
];



var now = new Date();
var start = new Date(2023, 6, 27);
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

//onload
window.onload = function () {
    chooselevel();
}


function chooselevel() {
    //create levelselect dropdown
    document.getElementById("question").innerText = "Enter a Puzzle Number Above to Get Started!"
    var levelselect = document.getElementById("levelselect");
    levelselect.innerText = "Want to try a Previous Question?\nEnter a Puzzle Nummber Between 1 - " + day + ":  ";
    var input = document.createElement("input");
    input.type = "text";
    input.id = "levelinput"
    input.placeholder = "Click Here";
    input.classList.add("levelselect");// need to set CSS style
    levelselect.appendChild(input);
    var levelbutton = document.createElement("button");
    levelbutton.innerText = "Choose!"
    levelbutton.classList.add("levelbutton");
    levelbutton.addEventListener("click", function () {
        day = document.getElementById("levelinput").value;
        //alert("In event listner");
        console.log(day);
        ///variables
        word = wordarray[day];
        question = questionarray[day];
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


