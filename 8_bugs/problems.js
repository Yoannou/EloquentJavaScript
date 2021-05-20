// When console.log is given an invalid input, it throws a ReferenceError
try {
    console.log(noSuchObj);
} 
// We now catch the error and do something according to the error-type's "throw" handler
catch (e) {
    console.log("Problem: " + e);
}
/*
Now the program will proceed whether there was a problem or not.
It will either run smoothly, or the error is caught and handled then run smoothly on.
 */


// EXERCISES:

// 1) Retry
// Create a program that works 20% of the time and otherwise raises exception, and another program that runs it until it works

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    let chance = Math.random() * 100;
    if(chance < 20) {
        return a*b;
    }
    else {
        throw new MultiplicatorUnitFailure("RNG must be under 20. Current: " + chance);
    }
}

function patientMultiply(a, b) {
    try{
        return primitiveMultiply(a, b);
    }
    catch {
        // Theoretically if this fails too many times it will overflow the stack but the odds are extremely small
        return patientMultiply(a, b);
    }
}

// 2) The Locked Box
// Write a function that unlocks box, runs its arg function, then locks the box whether the function had an error or not
const box = {
    locked: true,
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) {throw new Error("Locked!");}
        return this._content;
    }
};

// My function WITHOUT error-checking - if the body function throws error, box won't be locked.
function withBoxUnlockedBad(body) {
    if (box.locked) {
        box.unlock();
    }
    res = body();
    box.lock();
    return res;
}

// My function WITH error-checking: regardless of body, function will handle error and always lock box.
function withBoxUnlocked(body) {
    if (box.locked) {
        box.unlock();
    }
    try {
        return body();
    }
    finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    // 1) box unlocks
    box.content.push("gold piece"); // 2) box executes this function
    // 3) box locks
});

console.log(box.locked); // Must return true;

try {
    withBoxUnlocked(function() {
        // 1) box unlocks
        throw new Error("Pirates on the horizon! Abort!"); // 2) function throws error, goes to handler
        // 3) box still locks BEFORE error is handled
    });
} catch (e) {
    console.log("Error raised: ", e);
    console.log(box.locked); // Must return true;
}