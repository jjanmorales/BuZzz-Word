import {words} from "./wordsObj.js";
document.addEventListener("DOMContentLoaded", () => {
    displayLetters();   
    checkUserInput(); 
    console.log(wordList)
    
})


const userGuess = createElId("user-guess");
const enter = createElId("enter-btn");
const wordsFound = createElId("words-found");
const counter = createElId("counter");
const letterCell = document.getElementsByClassName("letter-cell");
//Create list for words that are create and append to white box
const wordsFoundUl = document.createElement("ul");
wordsFound.appendChild(wordsFoundUl);
//Array to keep track of guessed words
let guessedWordsArr = [];

//extract groups of letters from words object to display in hexagons
//Extract word list for that group of letters
let letterGroups = [];
for(let prop in words){
    letterGroups.push(prop);
}
let currentGameLetters = letterGroups[0]
const wordList = getWordList(currentGameLetters);

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
        letterCell[i].addEventListener("click", () =>{
            userGuess.value += `${letterCell[i].innerText}`;
        });
    }
}

//Take user input and check to see of the word is correct when they click the enter button
//If it is correct, take the word and display it in the white right-side box and
//increment amount of words found in the sentence on top 
function checkUserInput(){
    enter.addEventListener("click", () =>{
        //check for proper length, correct word and if word has been guessed already
        if((userGuess.value).length > 3 && isCorrect(userGuess.value) && !alreadyGuessed(userGuess.value) ){
         const wordsFoundLi = document.createElement("li");
         wordsFoundLi.innerText = userGuess.value.toUpperCase();
         wordsFoundUl.appendChild(wordsFoundLi);
         guessedWordsArr.push(userGuess.value.toUpperCase());
         wordsFoundLi.style.listStyle = 'none';
         counter.innerText = Number(counter.innerText) + Number(1);
         userGuess.value = "";
       }else{
        userGuess.value = "";
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





 