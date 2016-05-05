max = 10;
for (a = 2; a <= max; a++) {
    n = 0;
    for (b = 2; b < a; b++ ) {
        if (a % b === 0) {
            n++;
            break;
        }
    }
    if (n === 0) {
        console.log(a);
    }
}