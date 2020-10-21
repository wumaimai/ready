function flat(arr) {
    let result = [];
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

//自定义层级
function flatByDeep(arr, deep) {
    let result = [];
    for (let i in arr) {
        if (Array.isArray(arr[i]) && deep >= 1) {
            result = result.concat(flatByDeep(arr[i], deep - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}


//使用 es6 reduce
function flatByReduce(arr) {
    return arr.reduce((total, currentValue) => {
        return total.concat(currentValue);
    }, []);
}

const a = [1, [2, 3], [[4, 5], [6, 7]]];

const b = [[1, 2], [3, 4]]

console.log(flatByReduce(a));
//console.log(flat(a));
//console.log(flatByDeep(a, 2));