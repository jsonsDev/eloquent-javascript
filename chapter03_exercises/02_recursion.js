function isEven(n) {
    if (n < 0) n = n * -1;
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

// Eloquent JavaScript Provided logs:
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false