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
const wordList = getWordList();
//Check to make sure the user input matches one of the words matches 
//in the array for that set of letters
function isCorrect(userInput, wordList){
    for(let i = 0; i < wordList.length; i++){
        if(userInput === wordList[i]){
           return true;
        }
    }
    return false;
}