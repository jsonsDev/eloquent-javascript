// V1 as loop
function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    } 
    return true;
}

// V2 with some method:
function every(array, predicate) {
    return !array.some(element => !predicate(element));
}

// Eloquent Javascript code:
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true