const reverseString = function(string) {
    let output = "";
    const length = string.length;

    for(i = length - 1; i >= 0; i--){
        output += string[i]
    }

    return output

};

// Do not edit below this line
module.exports = reverseString;
