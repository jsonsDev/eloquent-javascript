function reverseArray(myArray) {
    let newArray = [];
    
    for (let i = myArray.length -1; i >= 0; i--) newArray.push(myArray[i]);
    return newArray;
} 

function reverseArrayInPlace(myArray) {
    let arrayLength = myArray.length;
    
    for (let i = myArray.length -1; i >= 0; i--) myArray.push(myArray[i]);
    for (let i = 0; i < arrayLength; i++) myArray.shift(myArray[i]);
    return myArray;
}


// Eloquent JavaScript provided logs:
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]