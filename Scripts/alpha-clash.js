// function play() {
//     //hide the home screen.to hid e the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection = document.getElementById('Playground');
//     playgroundSection.classList.remove('hidden');
// }

function handlekeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('You get a point')
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
else{
    console.log('you missed')
}

}

document.addEventListener('keyup',handlekeyboardButtonPress)


function continueGame() {
    // step:1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);



}

 
function play() {
    hideElementById('home-screen');
    showElementById('Playground');
    continueGame();

}