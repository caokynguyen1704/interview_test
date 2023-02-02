function sumInRange(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

function calculate(start, end, isDouble) {
    let result = sumInRange(start, end);
    if (isDouble) {
        result *= 2;
    }
    return result;
}