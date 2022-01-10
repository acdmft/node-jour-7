const prompt = require("prompt");

prompt.start();

let secretWord = "ballon";
let numOfAttempts = 10;
let guessWord = secretWord.split('').map(i=> {return "_" });

console.log("Devinez le mot mystère!", guessWord.join(' '));

function play() { prompt.get(
    {name: "propLettre", description: "Proposez une lettre: "}, 
    function(err, res) {
        if (err) {
            return console.error(err);
        }
        let success = false;
        if (numOfAttempts > 0) {
            secretWord.split('').forEach((el,i)=>{
                if (el === res.propLettre) {
                    guessWord[i] = el;
                    success = true;
                }
            })
            console.log(guessWord.join(' '))
            if (guessWord.join('') === secretWord) {
                return console.log("Bravo!");
            }
            if (!success) {
                numOfAttempts--;
                console.log("Oups...plus que ", numOfAttempts, "chances!");
            }
            play();
        } else { 
            return console.log("Vous avez perdu!");
        }
    });
}
play();