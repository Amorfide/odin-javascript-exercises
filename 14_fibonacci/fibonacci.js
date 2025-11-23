const fibonacci = function(term) {
    let termOne = 0
    let termTwo = 1
    let fibo = 0;

    const sequence = [0]

    for(let i = 0; i < term; i++){
        sequence.push(termTwo);
        fibo = termOne + termTwo;
        termOne = termTwo;
        termTwo = fibo;
    }
    return sequence[term];
    
};

// Do not edit below this line
module.exports = fibonacci;
