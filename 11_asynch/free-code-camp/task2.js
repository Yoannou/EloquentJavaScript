// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const start = () => {};

start();

// Function for number input. Returns a promise -
// (Promise can be either pending, resolved (good input), or rejected (bad input))
const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNum = Number(window.prompt("Enter a number from 1 - 6:"));
        const randomNum = Math.floor(Math.random() * 6 + 1);

        if(userNum < 1 || userNum > 6) {
            reject(new Error("Number out of bounds."))
        }
        if(userNum === randomNum) {
            resolve({
                points: 2,
                randomNum,
            })
        }
        else if (
            userNum === randomNum-1 || userNum === randomNum+1
        ) {
            resolve({
                points: 1,
                randomNum,
            })
        }
        else {
            resolve({
                points: 0,
                randomNum,
            })
        }
    });
};

// Asks user if they want to continue the game, also returns a prom:
const continueGame = () => {
    
}