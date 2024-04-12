// function play() {
//     //hide the home screen.to hid e the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('Playground');
//     playgroundSection.classList.remove('hidden');
// }

function handlekeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        //update score
        const defaultScore = getTextElementByID('current-score');
        const currentScore = defaultScore + 1;
        setAnewValueById('current-score', currentScore);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed')
        const defaultScore =getTextElementByID('current-life');
        const currentScore = defaultScore -1;
        setAnewValueById('current-life',currentScore);

        if(currentScore === 0){
            gameOver();
        }




        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

    }

}

document.addEventListener('keyup', handlekeyboardButtonPress)


function continueGame() {
    // step:1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('Playground');

    

    setAnewValueById('current-life',5);
    setAnewValueById('current-score',0);
    

    continueGame();
}

function gameOver(){
    hideElementById('Playground');
    showElementById('final-score');
    const finalScore = getTextElementByID('current-score')
    setAnewValueById('game-score',finalScore)
    const removeTextRepeat = getElementTextById('current-alphabet');
    removeBackgroundColorById(removeTextRepeat);

}