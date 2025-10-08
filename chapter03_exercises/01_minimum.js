function min(one, two) {
    if (one < two) {
        return one;
    } else {
        return two;
    }
}

// Eloquent JavaScript provided logs:
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10