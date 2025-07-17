const leapYears = function(year) {

    // Divisible by 4
    // not by 100
    // yes if 400

    if (year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0)) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
