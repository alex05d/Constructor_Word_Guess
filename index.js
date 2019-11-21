var Word = require('./word');
var inquirer = require('inquirer');

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var Pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran",
    "Nidorina",
    "Nidoqueen",
    "Nidoran",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume"
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
                }
            }
        });
    } else {
        console.log("You Win!\n")
    }
    function com
}