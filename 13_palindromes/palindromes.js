const palindromes = function (word) {
    word = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    let array = word.split("");
    let reversedWord = array.reverse().join("");
    if(reversedWord == word){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
