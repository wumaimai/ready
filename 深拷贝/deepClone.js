function deepClone_01(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof key == 'object' && obj[key] !== null) {
                result[key] = deepClone(obj[key]);
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

function deepClone_02(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function deepClone_03(array) {
    return array.slice();
}

const objA = { a: 1, b: 2 };
const arr = [0, 1, 2];

const cloneObjA_01 = deepClone_01(objA);
const cloneObjA_02 = deepClone_02(objA);
const cloneArr = deepClone_03(arr);
cloneArr[0] = -1;
cloneObjA_01.a = 2;
cloneObjA_02.a = 3;
console.log(objA);
console.log(cloneObjA_01);
console.log(cloneObjA_02);


console.log(arr);
console.log(cloneArr);
