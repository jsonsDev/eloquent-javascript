let size = 8;

for (let height = 0; height < size; height = height + 1) {
    let width = '';

    if (height % 2 === 0) {
        while (width.length < size) {
        width += ' ' + '#';
        }
    } else
    while (width.length < size) {
        width += '#' + ' ';
    }
    console.log(width + '\n');
}