//乱序
function mixArr(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5;
    })
}

//升序
function ascArr(arr) {
    return arr.sort((a, b) => {
        return a - b;
    })
}

//降序
function descArr(arr) {
    return arr.sort((a, b) => {
        return b - a;
    })
}

//数组对象排序
function objSort(arr, description) {
    return arr.sort((a, b) => {
        if (a[description] > b[description]) {
            return 1;
        } else if (a[description] < b[description]) {
            return -1;
        } else {
            return 0
        }
    });
}

const arr = [1, 2, 3, 5, 6, 8];

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];



console.log('乱序：' + mixArr(arr));

console.log('升序：' + ascArr(arr));

console.log('降序：' + descArr(arr));

console.log('根据年龄排序：', objSort(items, 'value'));