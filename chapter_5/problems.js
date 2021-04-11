// 1: Use reduce and concat methods to flatten multiple arrays into one

/* Note that when using reduce without an Initial_Value argument, the
accumulator is by default the first element, and current value the second */
let arr0 = [0, 1];
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arrList = [arr1, arr2, arr3];

function flattenArrays(arrayList){
    let result = [];
    result = arrayList.reduce((accumulator, current) => {
        return accumulator.concat(current);
    })
    return result;
}

let answer1 = flattenArrays(arrList);