const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let lower = 0;
    let upper = 0;

    //make sure user entered a number
    if(typeof(numOne) != typeof(lower) || typeof(numTwo) != typeof(lower)){
        return "ERROR";
    }

    if(numOne < 0 || numTwo < 0){
        return "ERROR";
    }

    //find the lower number
    if(numOne <= numTwo){
        lower = numOne;
        upper = numTwo
    } else {lower=numTwo; upper=numOne;}


    while (lower <= upper){
        sum += lower;
        lower++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
