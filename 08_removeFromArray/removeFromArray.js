// Note: Rest operator '...' takes all 
// positional arguments after and creates an array

// ForEach Syntax
// arrayName.forEach((element) => function(element));

// Filter Syntax
// arrayName.filter((element) => element conditional);
const removeFromArray = function(list, ...args) {
    const output = [];

    list.forEach(element => {
        if(!args.includes(element)){
            output.push(element)
        }
    });
    
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
