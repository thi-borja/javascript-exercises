const repeatString = function(word, times) {
    if (times < 0){
        return "ERROR"
    } else {
        repeatedWord = []
        for(i=0;i<times;i++){
        repeatedWord.push(word);
        }
        return repeatedWord.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
