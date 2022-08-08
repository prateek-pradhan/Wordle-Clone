import { useEffect, useState } from "react";
import "./App.css";

const API_URL = [
  "ALBUM",
  "HINGE",
  "MONEY",
  "SCRAP",
  "GAMER",
  "GLASS",
  "SCOUR",
  "BEING",
  "DELVE",
  "YIELD",
  "METAL",
  "TIPSY",
  "SLUNG",
  "FARCE",
  "GECKO",
  "SHINE",
  "CANNY",
  "MIDST",
  "BADGE",
  "HOMER",
  "TRAIN",
  "STORY",
  "HAIRY",
  "FORGO",
  "LARVA",
  "TRASH",
  "ZESTY",
  "SHOWN",
  "HEIST",
  "ASKEW",
  "INERT",
  "OLIVE",
  "PLANT",
  "OXIDE",
  "CARGO",
  "FOYER",
  "FLAIR",
  "AMPLE",
  "CHEEK",
  "SHAME",
  "MINCE",
  "CHUNK",
  "ROYAL",
  "SQUAD",
  "BLACK",
  "STAIR",
  "SCARE",
  "FORAY",
  "COMMA",
  "NATAL",
  "SHAWL",
  "FEWER",
  "TROPE",
  "SNOUT",
  "LOWLY",
  "STOVE",
  "SHALL",
  "FOUND",
  "NYMPH",
  "EPOXY",
  "DEPOT",
  "CHEST",
  "PURGE",
  "SLOSH",
  "THEIR",
  "RENEW",
  "ALLOW",
  "SAUTE",
  "MOVIE",
  "CATER",
  "TEASE",
  "SMELT",
  "FOCUS",
  "TODAY",
  "WATCH",
  "LAPSE",
  "MONTH",
  "SWEET",
  "HOARD",
  "CLOTH",
  "BRINE",
  "AHEAD",
  "MOURN",
  "NASTY",
  "RUPEE",
  "CHOKE",
  "CHANT",
  "SPILL",
  "VIVID",
  "BLOKE",
  "TROVE",
  "THORN",
  "OTHER",
  "TACIT",
  "SWILL",
  "DODGE",
  "SHAKE",
  "CAULK",
  "AROMA",
  "CYNIC",
  "ROBIN",
  "ULTRA",
  "ULCER",
  "PAUSE",
  "HUMOR",
  "FRAME",
  "ELDER",
  "SKILL",
  "ALOFT",
  "PLEAT",
  "SHARD",
  "MOIST",
  "THOSE",
  "LIGHT",
  "WRUNG",
  "COULD",
  "PERKY",
  "MOUNT",
  "WHACK",
  "SUGAR",
  "KNOLL",
  "CRIMP",
  "WINCE",
  "PRICK",
  "ROBOT",
  "POINT",
  "PROXY",
  "SHIRE",
  "SOLAR",
  "PANIC",
  "TANGY",
  "ABBEY",
  "FAVOR",
  "DRINK",
  "QUERY",
  "GORGE",
  "CRANK",
  "SLUMP",
  "BANAL",
  "TIGER",
  "SIEGE",
  "TRUSS",
  "BOOST",
  "REBUS",
  "UNIFY",
  "TROLL",
  "TAPIR",
  "ASIDE",
  "FERRY",
  "ACUTE",
  "PICKY",
  "WEARY",
  "GRIPE",
  "CRAZE",
  "PLUCK",
  "BRAKE",
  "BATON",
  "CHAMP",
  "PEACH",
  "USING",
  "TRACE",
  "VITAL",
  "SONIC",
  "MASSE",
  "CONIC",
  "VIRAL",
  "RHINO",
  "BREAK",
  "TRIAD",
  "EPOCH",
  "USHER",
  "EXULT",
  "GRIME",
  "CHEAT",
  "SOLVE",
  "BRING",
  "PROVE",
  "STORE",
  "TILDE",
  "CLOCK",
  "WROTE",
  "RETCH",
  "PERCH",
  "ROUGE",
  "RADIO",
  "SURER",
  "FINER",
  "VODKA",
  "HERON",
  "CHILL",
  "GAUDY",
  "PITHY",
  "SMART",
  "BADLY",
  "ROGUE",
  "GROUP",
  "FIXER",
  "GROIN",
  "DUCHY",
  "COAST",
  "BLURT",
  "PULPY",
  "ALTAR",
  "GREAT",
  "BRIAR",
  "CLICK",
  "GOUGE",
  "WORLD",
  "ERODE",
  "BOOZY",
  "DOZEN",
  "FLING",
  "GROWL",
  "ABYSS",
  "STEED",
  "ENEMA",
  "JAUNT",
  "COMET",
  "TWEED",
  "PILOT",
  "DUTCH",
  "BELCH",
  "OUGHT",
  "DOWRY",
  "THUMB",
  "HYPER",
  "HATCH",
  "ALONE",
  "MOTOR",
  "ABACK",
  "GUILD",
  "KEBAB",
  "SPEND",
  "FJORD",
  "ESSAY",
  "SPRAY",
  "SPICY",
  "AGATE",
  "SALAD",
  "BASIC",
  "MOULT",
  "CORNY",
  "FORGE",
  "CIVIC",
  "ISLET",
  "LABOR",
  "GAMMA",
  "LYING",
  "AUDIT",
  "ROUND",
  "LOOPY",
  "LUSTY",
  "GOLEM",
  "GONER",
  "GREET",
  "START",
  "LAPEL",
  "BIOME",
  "PARRY",
  "SHRUB",
  "FRONT",
  "WOOER",
  "TOTEM",
  "FLICK",
  "DELTA",
  "BLEED",
  "ARGUE",
  "SWIRL",
  "ERROR",
  "AGREE",
  "OFFAL",
  "FLUME",
  "CRASS",
  "PANEL",
  "STOUT",
  "BRIBE",
  "DRAIN",
  "YEARN",
  "PRINT",
  "SEEDY",
  "IVORY",
  "BELLY",
  "STAND",
  "FIRST",
  "FORTH",
  "BOOBY",
  "FLESH",
  "UNMET",
  "LINEN",
  "MAXIM",
  "POUND",
  "MIMIC",
  "SPIKE",
  "CLUCK",
  "CRATE",
  "DIGIT",
  "REPAY",
  "SOWER",
  "CRAZY",
  "ADOBE",
  "OUTDO",
  "TRAWL",
  "WHELP",
  "UNFED",
  "PAPER",
  "STAFF",
  "CROAK",
  "HELIX",
  "FLOSS",
  "PRIDE",
  "BATTY",
  "REACT",
  "MARRY",
  "ABASE",
  "COLON",
  "STOOL",
  "CRUST",
  "FRESH",
  "DEATH",
  "MAJOR",
  "FEIGN",
  "ABATE",
  "BENCH",
  "QUIET",
  "GRADE",
  "STINK",
  "KARMA",
  "MODEL",
  "DWARF",
  "HEATH",
  "SERVE",
  "NAVAL",
  "EVADE",
  "FOCAL",
  "BLUSH",
  "AWAKE",
  "HUMPH",
  "SISSY",
  "REBUT",
  "CIGAR",
];

const WORD_LENGTH = 5;

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }
      if (event.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
      }
      if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5) {
        return;
      }

      setCurrentGuess((oldGuess) => oldGuess + event.key);
    };

    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution, guesses]);

  useEffect(() => {
    const fetchWord = async () => {
      const randomWord = API_URL[Math.floor(Math.random() * API_URL.length)];
      setSolution(randomWord);
    };
    fetchWord();
  }, []);

  return (
    <div className="board">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        return (
          <Line
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
            isFinal={!isCurrentGuess && guess != null}
            solution={solution}
          />
        );
      })}
    </div>
  );
}

function Line({ guess, isFinal, solution }) {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let className = "tile";

    if (isFinal) {
      console.log(solution);
      if (char.toUpperCase() === solution[i]) {
        className += " correct";
      } else if (solution.includes(char.toUpperCase())) {
        className += " close";
      } else {
        className += " incorrect";
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {" "}
        {char}{" "}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}

export default App;
