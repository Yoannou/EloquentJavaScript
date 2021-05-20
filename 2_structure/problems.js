// 1) LOOPING TRIANGLE:
// Make a triangle out of pound signs in a single loop

console.log("Looping Triangle:\n");

function loopingTriangle(){
    let string = "";
    let ink = "#";
    for (let i=0; i < 7; i++) {
        string += ink;
        console.log(string);
    }
}

loopingTriangle();

// 2) FizzBuzz:
// Print numbers 0-100, but replace multiples of 3 with "Fizz", 5 with "Buzz", both with "FizzBuzz"

console.log("\nFIZZBUZZ:\n");

function fizzBuzz(num) {
    let output = "";
    if(num % 3 == 0) {
        output += "Fizz";
    }
    if(num % 5 == 0) {
        output += "Buzz";
    }
    if((num % 3 != 0) && (num % 5 != 0)) {
        output += num;
    }
    console.log(output);
}

for (let i = 1; i < 100; i++) {
    fizzBuzz(i);
}

// 3) Chessboard:
// Create a chessboard grid of black/white squares from a stringe of any length

console.log("\nCHESSBOARD:\n");

function chessBoard(num) {
    white = " ";
    black = "#";
    newline = "\n";
    shifter = true;
    output = "";

    for(let i = 0; i < num; i++) {
        for(let i = 0; i < num; i++) {
                if(i % 2 == 0) {
                    if (shifter) {
                        output += white;
                    }
                    else {
                        output += black;
                    }
                }
                else {
                    if(shifter) {
                        output += black;
                    }
                    else {
                        output += white;
                    }
                }
        }
        shifter = !shifter;
        output += newline;
    }
    return output;
}

console.log(chessBoard(18));