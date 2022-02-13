/* Testing Button Features */

// Delete Character Button
function deleteChar() {
    if (currentWord.length > 0) {
        currentWord = currentWord.slice(0, -1);
        renderCurrentWord();
    }
}

// Enter Button
 function enterCurrentWord() {
    if (currentWord.length < 4) {
        flashMsg("too few letters 😬");
        currentWord = "";
        renderCurrentWord();
        return;
    }

    if (!currentWord.includes(keyLetter)) {
        currentWord = "";
        flashMsg('need middle letter 😬');
        renderCurrentWord();
        return;
    }

    if (foundWords.includes(currentWord)) {
        flashMsg('already found that one 😬');
        currentWord = "";
        renderCurrentWord();
        return;
    }

    if (checkWord(currentWord)) {
        let score = scoreWord(currentWord);
        points += score;
        foundWords.push(currentWord);
        currentWord = "";
        renderCurrentWord();
        renderPoints();
        renderFoundWords();
        saveGame();
        postData('/bumblewords/update');
        if(foundWords.length === VALID_WORDS.length){
            alert("great job! you found all the words!")
        }
    
    } else {
        flashMsg('word not found 😬');
        currentWord = "";
        renderCurrentWord();
    }
};

document.querySelector('#enter-btn').addEventListener('click', enterCurrentWord);

document.querySelector('#del-btn').addEventListener('click', deleteChar);


    
