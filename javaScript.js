let listOfSavedWords = [];
let wordsInput = document.getElementById("wordAdd");

function buildWordList() {
    listOfSavedWords.push(wordsInput.value);
    showList();
}

function showList() {
    let messageBox = document.getElementById("displayMessage");
    wordsInput.value = "";
    messageBox.innerHTML = "";
    messageBox.innerHTML += "My dictionary words: " + listOfSavedWords.join(", ");
}

function checkWordList() {
    let checkInput = document.getElementById("wordCheck");
    if (listOfSavedWords.indexOf(checkInput.value) !== -1) {
        document.getElementById("displayOutcome").innerHTML = "Word exists!";
        checkInput.value = "";
    } else {
        document.getElementById("displayOutcome").innerHTML = "Word is missing!";
        checkInput.value = "";
    }
}
