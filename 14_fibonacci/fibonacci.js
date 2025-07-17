const fibonacci = function(input) {
    const nthFib = parseInt(input)
    
    if (nthFib < 0) return "OOPS";
    if (nthFib == 0) return 0;
    if (nthFib == 1 || nthFib == 2) return 1;

    let curr = 1
    let prev = 1
    let temp = curr

    for(i = 2; i < nthFib; i++){
        curr += prev
        prev = temp
        temp = curr
    }
    
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
