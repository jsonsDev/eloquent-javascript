let size = 8;

for (let column = 0; column < size; column = column + 1) {
    let row = '';

    if (column % 2 === 0) {
        while (row.length < size) {
        row += ' ' + '#';
        }
    } else
    while (row.length < size) {
        row += '#' + ' ';
    }
    console.log(row + '\n');
}