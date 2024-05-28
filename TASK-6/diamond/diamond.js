function printDiamond(height) {
    for (let i = 0; i < height; i++) {
        let row = ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1);
        console.log(row);
    }
    for (let i = height - 2; i >= 0; i--) {
        let row = ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1);
        console.log(row);
    }
}

printDiamond(7);
