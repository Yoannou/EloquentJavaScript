// 1) MINIMUM:
// Return the smallest of 2 arguments

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

// 2) RECURISON
// Use recursion to see if a number is even or odd by counting down by 2s

function isEven(num) {
    num = Math.abs(num);
    if (num==0) {
        return true;
    }
    else if (num == 1) {
        return false;
    }
    else {
        return isEven(num-2);
    }
}


// 3) BEAN COUNTING
// Counting the "B"s in a string using a function within another

function countBs(string) {
    return countChar(string, 'B');
}

function countChar(string, character) {
    let count = 0;
    for(let i=0; i < string.length; i++) {
        if (string[i]==character) {
            count++
        } 
    }
    return count;
}