function printTriangle(rows) {
    let output = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            output += '* ';
        }
        output += '\n';
    }
    console.log(output);
}

printTriangle(5);
