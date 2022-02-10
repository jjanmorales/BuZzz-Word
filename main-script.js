/* Testing Features */

function enterCurrentWord() {
    if (currentWord.length < 4) {
        flashMsg("too few letters 😬");
        currentWord = "";
        renderCurrentWord();
        return;
    }