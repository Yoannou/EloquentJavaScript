/* Testing out asynch functions */

// Which will run first?
let slow = function(order) {
    setTimeout(() => {
        console.log(order + ': A 2s setTimeout call inside a function');
    }, 2000);
}

let fast = function(order) {
    console.log(order + ': A function call made at the end of the program');
}

slow(1);

setTimeout(()=>{console.log('2: A normal 4s setTimeout call')}, 4000);

fast(3);

/* Conclusion: an async operation like setTimeout will always relinquish control
and let the program proceed as normal while it operates asyncroniously.
Callback functions are inherently async.
Any time we pass a function as a callback, it won't be called until its parent function
is complete. This removes it from the normal program flow */