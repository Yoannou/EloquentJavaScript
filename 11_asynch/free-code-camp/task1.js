// Task 1: Translate the story into code. Kayo promises me a cake on my birthday if he's healthy.

// Create a function that returns a promise after 2 seconds:
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!isKayoSick) {
                resolve(2);
            }
            else {
                reject(new Error("I am sad"));
            }
        }, 2000);
    });
};

// Calling the function.
// Promise is only resolved if Kayo is NOT sick, so changing the argument changes the flow:
// The .finally callback runs whether we resolve or reject.
onMyBirthday(false)
    .then((result) => {
        console.log(`I have ${result} cakes.`)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Party!");
    })