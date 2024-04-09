function minIncrementDecrement(arr) {
    let totalChanges = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) continue;
        
        const diff = arr[i - 1] - arr[i];
        totalChanges += diff;
        arr[i] += diff;
    }
    
    return totalChanges;
}

const arr = [3, 2, 5, 1, 7];
console.log("Minimum increment/decrement required:", minIncrementDecrement(arr));
console.log("Adjusted array:", arr);
