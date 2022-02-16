import {words} from "./wordsObj.js";
document.addEventListener("DOMContentLoaded", () => {
    displayLetters();   
    checkUserInput(); 
    deleteLetterBtn();
    newGame();
})

const pluralS = createElId("plural-s");
const submitForm = createElId("submit-form")
const userGuess = createElId("user-guess");
const enter = createElId("enter-btn");
const deleteBtn = createElId("del-btn");
const wordsFound = createElId("words-found");
const counter = createElId("counter");

const letterCell = document.getElementsByClassName("letter");
//Create list for words that are create and append to white box
const wordsFoundUl = document.createElement("ul");
const alert = createElId("wrong-alert");
alert.style.visibility = 'hidden';
//Create lists for words that are create and append to white box
const column1 = createElId("column-1");

//Array to keep track of guessed words
let guessedWordsArr = [];
// holds current score
let currentScore = 0;
//extract groups of letters from words object to display in hexagons
//Extract word list for that group of letters
let letterGroups = [];
for(let prop in words){
    letterGroups.push(prop);
}
let num = 0;
let currentGameLetters = letterGroups[num]
let wordList = getWordList(currentGameLetters);

//Create variable for tags using id
function createElId(id){
    return document.getElementById(id);
}

//Display letters that are clicked on in display cell
function displayLetters(){
    for(let i = 0; i < letterCell.length; i++){
        //Display letters on the cells
        letterCell[i].innerText = currentGameLetters[i];
        //Handle click event on the letter cells
        console.log(`${userGuess.value}`);

    letterCell[i].addEventListener("click", () =>{
        console.log( userGuess.value);
        userGuess.value += `${letterCell[i].innerText}`;
        
    });
    }
}



const enterForm = createElId("enter-form");



function updateCurrentScore(word) {
    // get the length of workd
    // add to the current score
    // update the container that displays current score
    const points = word.length;
    currentScore = points + currentScore;
    const pointsTracker =document.getElementById('progress-tracker')
    pointsTracker.innerText = currentScore;
}

//Take user input and check to see of the word is correct when they click the enter button
//If it is correct, take the word and display it in the white right-side box and
//increment amount of words found in the sentence on top 
function checkUserInput(){
    submitForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        //check for proper length, correct word and if word has been guessed already
        if((userGuess.value).length > 3 && isCorrect(userGuess.value) && !alreadyGuessed(userGuess.value)){
            updateCurrentScore(userGuess.value)
            const par = document.createElement("p");
            par.innerText = userGuess.value.toUpperCase();
            column1.appendChild(par);
            guessedWordsArr.push(userGuess.value.toUpperCase());
            if(guessedWordsArr.length > 1){
                pluralS.innerText = "s";
            }
            counter.innerText = Number(counter.innerText) + Number(1);
            alert.innerText = "Yaass!"
            alert.style.visibility = 'visible';
            setInterval((() => {alert.style.visibility = 'hidden'}), 1550); 
            userGuess.value = "";
            win();
        }else if(alreadyGuessed(userGuess.value)){
            userGuess.value = "";
            alert.innerText = "You already guessed that!"
            alert.style.visibility = 'visible';
            setInterval((() => {alert.style.visibility = 'hidden'}), 1500); 
        }else if((userGuess.value).length > 4){
            userGuess.value = "";
            alert.innerText = "Eh Wrong!😬"
            alert.style.visibility = 'visible';
            setInterval((() => {alert.style.visibility = 'hidden'}), 1500);
        }else{
            userGuess.value = "";
            alert.innerText = "Too short!😬"
            alert.style.visibility = 'visible';
            setInterval((() => {alert.style.visibility = 'hidden'}), 1500);
        }
    })
}

//Pulls the list of words for the set of letters currently being shown in game  
function getWordList(letters){
    for(let prop in words){
        if(letters === prop){
          return words[prop];
        }
    }
};

//Check to make sure the user input matches one of the words in the array for that set of letters
//Takes in array of words for the current game letters and the word guessed by user
function isCorrect(userInput){
    return wordList.includes(userInput.toLowerCase());
}

//Check to see if the word has already been guessed by looking through the array
function alreadyGuessed(userInput){
    return guessedWordsArr.includes(userInput.toUpperCase());
}

//DeleteBtn button events
//Deletes a character from input display box when delete button is clicked on
function deleteLetterBtn(){
    deleteBtn.addEventListener("click", () =>{
        let input = (userGuess.value).split("");
        input.pop();
        userGuess.value = input.join("");
    })
}

//when user clicks new game button, new letters are placed in letter cells
//right side container holding the guessed words is cleared and sentence
//restarts at 0 words
const newGameBtn = createElId("new-game-btn");
function newGame(){
    newGameBtn.addEventListener("click",()=>{
        userGuess.value = "";
        guessedWordsArr = [];
        let column1Words = column1.children;
        // for(let i = 0; i < (column1.children).length; i++){
        //     (column1.children[i]).innerText ="";
        // }
        if(num < letterGroups.length){
            num++;
            currentGameLetters = letterGroups[num];
            wordList = getWordList(currentGameLetters);
            displayLetters();
            counter.innerText = Number(0)
        }else if(num === (letterGroups.length)){
            num = 0;
            currentGameLetters = letterGroups[num];
            wordList = getWordList(currentGameLetters);
            displayLetters();
            counter.innerText = Number(0)
        }
    })
    
}

// const winContainer = getElementsByClassName("win-container");
// function win(){
//     if(guessedWordsArr.length === 10){//fvd
        
//     }
// }
