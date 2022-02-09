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

function isCorrect(userInput, wordList){
    for(let i = 0; i < wordList.length; i++){
        if(userInput === wordList[i]){
           return true;
        }
    }
    return false;
}