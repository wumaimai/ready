function mixArr(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5;
    })
}

const arr = [1, 2, 3, 5, 6, 8];

console.log(mixArr(arr));