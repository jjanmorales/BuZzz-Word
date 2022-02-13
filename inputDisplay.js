import {words} from "./wordsObj.js";
document.addEventListener("DOMContentLoaded", () => {
    displayLetters();   
    checkUserInput(); 
})


const userGuess = createElId("user-guess");
const enter = createElId("enter-btn");
const wordsFound = createElId("words-found");
const counter = createElId("counter");
const letterCell = document.getElementsByClassName("letter-cell");
//Create list for words that are create and append to white box
const wordsFoundUl = document.createElement("ul");
wordsFound.appendChild(wordsFoundUl);

//extract groups of letters from words object to display in hexagons
let letterGroups = [];
for(let prop in words){
    letterGroups.push(prop);
}
let currentGameLetters = letterGroups[0]

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
            let chosenLetter = letterCell[i].innerText;
            userGuess.value += `${chosenLetter}`;
        });
    }
}

//Take user input and check to see of the word is correct when they click the enter button
//If it is correct, take the word and display it in the white right-side box and
//Update the sentence at the top of the box to reflect amount of found words 
function checkUserInput(){
    enter.addEventListener("click", () =>{
        if((userGuess.value).length > 3){
         const wordsFoundLi = document.createElement("li");
         wordsFoundLi.innerText = userGuess.value;
         wordsFoundUl.appendChild(wordsFoundLi);
         wordsFoundLi.style.listStyle = 'none';
         counter.innerText = Number(counter.innerText) + Number(1);
         userGuess.value = "";
       }
    })
}











 