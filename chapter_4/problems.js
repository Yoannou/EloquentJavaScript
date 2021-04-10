// 1) ARRAY OF RANGE:
// Create an array out of range of numbers with a given step value

function range(start, end, step=1) {
    let result = [];
    if (step == 0) {
        return "Error - step cannot be 0"
    }
    else if (step > 0) {
        for(let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    else {
        for(let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}


// 2) REVERSE ARRAY:
// Reverse an array, both as a new array, and in place

function reverseArray(array) {
    let result = [];
    for (let i = array.length-1; i >=0; i--) {
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    let holder = [...array];
    for(num in array) {
        array.pop();
        array.unshift(holder[num]+1);
    }
}

// 3) ARRAYS AND LISTS:
// Create a linked list from array, vice versa, and some helper functions

// Test list
let list = { 
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(array) {
    list = null;
    for (let i = array.length; i > 0; i--) {
        list = {val: i, rest: list};
    }
    return list;
}

function listToArray(list) {
    array = [];
    while(list.rest != null) {
        array.push(list.value);
        list = list.rest;
    }
    array.push(list.value); // For final nested layer
    return array;
}

function prepend(element, list) {
    for(let node = list; node; node = node.rest) {
        node.value += 1;
    }
    element.value = 1;
    element.rest = list;
    return element;
}

function nth(list, num) {
    for(let node = list; node; node = node.rest) {
        if (num+1 == node.value) {
            return node.value;
        }
    }
    return "Out of Bounds";
}

function nthRecursive(list, n) {
    if (!list) {
        return "Out of Bounds";
    }
    else if (n+1 == list.value) {
        return list.value;
    }    
    else {
        return nthRecursive(list.rest, n);
    }
}

// 4) DEEP COMPARISON:
// Boolean that compares two objects and make sure all their properties + values are the same

let obj = {num: 4, name: 'Bert'};
let obj2 = {num: 4, name: 'Bert'};

function deepEqual(a, b) {
    if(isObj(a) && isObj(b)){
        if(Object.keys(a).length != Object.keys(b).length) {
            return false;
        }
        else {
            for(let i = 0; i < Object.keys(a).length; i++) {
                if (!Object.keys(b).includes(Object.keys(a)[i])) {
                    return false;
                }
                else {
                    return deepEqual(Object.values(a)[i], Object.values(b)[i]);
                }
            }
        }
    }
    else {
        if (a !== b) {
            return false;
        }
    }
    return true;
}

function isObj(val) {
    if(typeof val == 'object' && val != null) {
        return true;
    }
    return false;
}