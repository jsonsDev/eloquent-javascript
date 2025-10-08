function countBs(string) {
    let bCount = 0;
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === "B") {
            bCount += 1;
        }
    }
    return bCount;
}

function countChar(string, char) {
    let charCount = 0;
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === char) {
            charCount += 1;
        }
    }
    return charCount;
}

// Eloquent JavaScript provided logs:
console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4