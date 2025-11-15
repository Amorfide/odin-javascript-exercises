const repeatString = function(text, times) {
    let repeatString = "";
    if(times < 0){
        return "ERROR";
    }
    
    for(let i=0;i<times;i++){
        repeatString += text;
    }
    return repeatString;
};

times = Math.random;

// Do not edit below this line
module.exports = repeatString;
