function removeDup(arr) {
    let result = [];
    let hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (!hashMap[temp]) {
            hashMap[temp] = true;
            result.push(temp);
        }
    }
    return result;
}

var arr = [1, 2, 2, 3, 4, 5];

console.time();
console.log('自定义', removeDup(arr));
console.timeEnd();

console.time();
console.log('new Set', Array.from(new Set(arr)));
console.timeEnd();


