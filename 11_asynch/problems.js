/* 
NOTE THAT CODE SHOULD BE RUN HERE FOR CONTEXT: https://eloquentjavascript.net/code/#11
Common JS does not run in browsers.
*/

//chicks(bigOak, 1990).then((n)=>console.log(n));

async function locateScalpel() {
    console.log("Before");
    await new Promise(resolve => {
        setTimeout(()=>{
            console.log('resolved!');
        }, 3000)
    });
    // Why is this line of code not being run. Why isn't it waiting for the above promise to come back?
    console.log("Waited");
}



function countToThree(){
    setTimeout(()=>{console.log('3 seconds have passed.')}, 3000);
    return "This should come after";
}

// This somehow works. How can I await a normal setTimeout?
// If setTimeout is asynchronous, that's obviously something I would want to wait for.
// But it doesn't return a promise, and therefore can't be used here.
// What do I do?
async function countToThreeAsync(){
    let res = await longProm();
    console.log(res);
    console.log("This should come after");
}


function longProm(){
    return new Promise((resolve) => {
        setTimeoutCustom(()=>{console.log('In set timeout...')}, 3000);
        resolve('Waited 3 seconds');
    })
}

function setTimeoutCustom(callback, milliseconds) {
    // Takes up a bunch of time
    function timeSink(time) {
        while(time > 0) {
            let sink = 0;
            while(sink < 800000) {
                sink++;
            }
            time --;
        }
    }
    timeSink(milliseconds);
    callback();
}