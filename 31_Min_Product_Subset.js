function minProductSubset(arr) {
    let negativeCount = 0;
    let zeroCount = 0;
    let product = 1;
    let minNegative = Number.MAX_SAFE_INTEGER;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
            continue;
        }

        if (num < 0) {
            negativeCount++;
            minNegative = Math.min(minNegative, Math.abs(num));
        }

        product *= num;
    }

    if (negativeCount % 2 === 0 && negativeCount !== 0) {
        product = product / minNegative;
    }

    if (negativeCount % 2 !== 0 && zeroCount === 0) {
        product = 0;
    }

    return product;
}

const arr = [1, 2, 3, -4, -6];
console.log("Minimum product subset:", minProductSubset(arr));
