


function hideElementById(elementId)
 {
    const element = document.getElementById(elementId);
    console.log('elementId')
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addBackgroundColorById(elementId)
{
const element = document.getElementById(elementId);
currentAlphaetElement.innerText = alphabet;

}




function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    // console.log('alphabet')
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabet[index];
    return alphabet;
    
}