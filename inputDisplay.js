import {words} from "./wordsObj.js";
// import {enterCurrentWord} from "./main-script.js";
document.addEventListener("DOMContentLoaded", () => {
   //extract groups of letters from words object to display in hexagons
    let letterGroups = [];
    for(let prop in words){
     letterGroups.push(prop);
     }
    let currentGameLetters = letterGroups[0]
    const userGuess = document.getElementById("user-guess");
    const letterCell = document.getElementsByClassName("letter-cell");
    const enter = document.getElementById("enter-btn");
    const wordsFound = document.getElementById("words-found");
    const wordsFoundUl = document.createElement("ul");
    const counter = document.getElementById("counter");
    wordsFound.appendChild(wordsFoundUl);
    for(let i = 0; i < letterCell.length; i++){
        letterCell[i].innerText = currentGameLetters[i];
        letterCell[i].addEventListener("click", () =>{
            let chosenLetter = letterCell[i].innerText;
            userGuess.value += `${chosenLetter}`;
        });
    }
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
     //for loop closing bracket targeting each cell 
  
    // enter.addEventListener("click", enterCurrentWord());

    
    
})













 