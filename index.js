var Word = require('./word');
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var Pokemon = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran",
    "nidorina",
    "nidoqueen",
    "nidoran",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume"
];

var randomIndex = Math.floor(Math.random() * Pokemon.length);
var randomWord = Pokemon[randomIndex];

var computerWord = new Word(randomWord);

var requiredNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
    if (requiredNewWord) {
        var randomIndex = Math.floor(Math.random() * Pokemon.length);
        var randomWord = Pokemon[randomIndex];

        computerWord = new Word(randomWord);
        requiredNewWord = false;
    }

    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select letter from A to Z",
                name: "userinput"
            }
        ]).then(function (input) {
            if (
                !letterArray.includes(input.userinput) ||
                input.userinput.length > 1

            ) {
                console.log("\nPlease try again!\n");
                theLogic();
            } else {
                if (
                    incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === ""
                ) {
                    console.log("\nAlready Guessed or Nothing was Entered\n");
                    theLogic();
                } else {
                    var wordCheckArray = [];

                    computerWord.userGuess(input.userinput);

                    computerWord.objArray.forEach(wordCheck);
                    if (wordCheckArray.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect|n");

                        incorrectLetters.push(input.userinput);
                        guessesLeft--;
                    } else {
                        console.log("\nCottect|n");

                        correctLetters.push(input.userinput);
                    }
                    computerWord();

                    console.log("Guesses Left: " + guessesLeft + "\n");
                    console.log("Letter Guessed: " + incorrectLetters.join(" ") + "\n");

                    if (guessesLeft > 0) {
                        theLogic();
                    } else {
                        console.log("You have Lost!\n");
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed);
                    }
                }
            }
        });
    } else {
        console.log("You Win!\n")
    }
    function completecCheck(key) {
        wordComplete.push(key.guessed);
    }
}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: " Would you  like to: ",
                choices: ["play again", " exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "play again") {
                requiredNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                theLogic();
            } else {
                return;
            }
        });
}

theLogic();