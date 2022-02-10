//Pulls the list of words for the set of letters currently being shown in game  
function getWordList(letters, obj){
    let words;
    for(prop in obj){
        if(letters === prop){
          words = obj[prop];
        }
    }
    return words;
};
let wordList = getWordList();
//Check to make sure the user input matches one of the words matches 
//in the array for that set of letter
function isCorrect(userInput, wordList){
    for(let i = 0; i < wordList.length; i++){
        if(userInput === wordList[i]){
           return true;
        }
    }
    return false;
}

//Update message for when user gets correct word
let gotWord = isCorrect();  
let count = 0;
function updateWordsFoundString(gotWord){
    if(gotWord){   //Make sure string is not empty
        count++;
        console.log(`You have found ${count} words.`)
    }
}
