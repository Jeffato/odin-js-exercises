function sumOfTripledEvens(input){
    return input
        .filter((num) => num % 2 == 0)
        .map((num) => num * 3)
        .reduce((total, currNum) => currNum + total)
}

let arr = [1,2,3,4];

console.log(sumOfTripledEvens(arr))