// 1: Use reduce and concat methods to flatten multiple arrays into one //

/* Note that when using reduce without an Initial_Value argument, the
accumulator is by default the first element, and current value the second */
let arr0 = [0, 1];
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arrList = [arr1, arr2, arr3];

function flattenArrays(arrayList) {
    return arrayList.reduce((accumulator, current) => accumulator.concat(current))
}

let answer1 = flattenArrays(arrList);


// 2: Write a higher-order function that resembles a for-loop //

/* The value is first tested, then if true body is executed, then val is updated. */

function loop(val, test, update, body) {
    console.log("James answer:");
    while (test(val) == true) {
        body(val);
        val = update(val);
    }
}

/* And the official textbook answer: */
function loop2(start, test, update, body) {
    console.log("Official answer:");
    for (let val = start; test(val); val = update(val)) {
        body(val);
    }
}

let answer2 = loop(3, n => n > 0, n => n-1, console.log);
let answer3 = loop2(3, n => n > 0, n => n-1, console.log);


// 3: Recreating the "every" array prototype method in two ways //

/* With a loop: */
function everyLoop(array, test) {
    for (let i=0; i<array.length; i++) {
        if (!test(array[i])) {return false;}
    }
    return true;
}

/* With the "some" array prototype method (every is basically the same as NOT some): */
function everySome(array, test) {
    return !array.some(element => !test(element));
}


// 4: Dominant writing direction from string of text //

/* First define some helper functions: */

/* Returns script of a given charcode */
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

/* Count characters that fill the given groupName condition function */
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        }
        else {
            counts[known].count++;
        }
    }
    return counts;
}


/* MY SOLUTION */
function dominantDirection(string) {
    // Get number of letters of each script
    let scripts = countBy(string.split(''), letter => {
        return characterScript(letter.codePointAt(0));
    });
    console.log(scripts);
    // Return direction of script w most letters present
    let result = "none";
    let biggest = 0;
    for (script of scripts) {
        console.log(biggest);
        if (script.count > biggest) {
            biggest = script.count;
            result = script.name;
        }
    }
    return result.direction;
}


/* THEIR SOLUTION */
function dominantDirection2(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        // returns either the direction or nothing depending on if it exists
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    // filters out all those with null names

    // default case
    if (counted.length == 0) return "ltr";

    // DOES THE REDUCTION FIRST, and only adds .name OUTSIDE of the reduce function
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

