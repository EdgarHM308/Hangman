// Global Variables
// ============================================================
// create an array of words
const words = ['red','orange','yellow','green','blue','indigo','violet'];
// choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Dom Manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
// =============================================================
console.log(choosenWord);
// create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keycode);
//  if users guess right 
    if(choosenWord.indexOf(keyword) > -1){
        // add to right words of array
        rightWord.push(keyword);
        docunderScore.innerHTML = underScore.join('');
        // replace underscore with the right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
        // checks to see if user word matches guesses
        if (underScore.join('') == choosenWord) {
            alert('You Win!');
        }
        
        else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        }
         
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join('');
// check if guess is right 
// if right push to right array 
// if wrong push to wrong array 
