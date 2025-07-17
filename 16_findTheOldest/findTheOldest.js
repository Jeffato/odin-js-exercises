const getAge = function(birth, death){
    if (!death) { death = new Date().getFullYear();}
    return death - birth;
}


const findTheOldest = function(peopleList) {
    return peopleList.reduce(
        (oldestPerson, currentPerson) => {
            const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
            const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

            return currentAge > oldestAge ? currentPerson : oldestPerson;
    });


    //reduce function
    // Callback Function : Accumulator, currentValue (item in the array)
    // Initial value of the accumulator
    // => block of code to do, or function to run
};

// Do not edit below this line
module.exports = findTheOldest;
