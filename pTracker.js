
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