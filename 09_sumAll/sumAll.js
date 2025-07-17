const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";
    
    const min = num1 < num2 ? num1 : num2;
    const max = num1 > num2 ? num1 : num2;
    let sum = 0;

    for(i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
