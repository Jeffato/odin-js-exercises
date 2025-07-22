/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased. */

function camelize(str){
    return str
        .split('-')
        .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a a
nd lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array. */

  function filterRange(arr, a, b){
    return arr
      .filter((num) => num >= a)
      .filter((num) => num <= b)
  }

/* Same as above but in place 
*/

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        let currNum = arr[i];

        if (currNum < a || currNum > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

// Sort in dec order
function decSort(arr){
    arr.sort((a, b) => b - a);
}

/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy. 
*/

function copySorted(arr){
    return arr.slice().sort()
}

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// All element orders should have an equal probability.
// Fisher Yates Alg

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }

    return array;
}

// Find unique elements in arr
// No hashmap
function unique(arr) {
    let uniqueArr = [];

    for(let name of arr){
        if(!uniqueArr.includes(name)){
            uniqueArr.push(name);
        }
    }

    return uniqueArr;
}