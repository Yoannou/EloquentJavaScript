/* 
The crow nest system technology from Eloquent JS chapter 11 (as a module)
Defines the Nest class. Each nest can communicate with others and has caches of food and supplies.
*/

export default class Nest{
    constructor(nestName, caches) {
        this.nestName = nestName;
        this.caches = caches;
        this.mailbox = [];
    };

    confirmAccess() {
        let confirmation = document.createElement("P");
        confirmation.innerText=`${this.nestName} root access granted`;
        confirmation.style = "color: white; font-weight: 600";
        document.querySelector('body').appendChild(confirmation);
    };

    get name(){
        return this.name;
    };

    get chaches(){
        return this.caches;
    };

    // Reading storage from a nest takes some time, so this is async (using callback)
    readStorage(locationsArray, callback) {
        callback(locationsArray);
    };

    // Promise-based storage reading for async
    storage(nest, name){
        return new Promise(resolve => {
            nest.readStorage(name, result => resolve(result));
        });
    }

    // Sends message to other nest, callback when response received
    send(targetNest, message) {
        targetNest.receive(this.nestName, message);
        console.log("Message sent");
    };

    // Confirms that current nest has received a message
    receive(sender, message){
        setTimeout(()=>{
            let response = false;
            try {
                if(response !== true) throw "Communication failed - message not received";
                this.mailbox.push(message);
                console.log(this.nestName + " successfully received message from: " + sender);
            }
            catch(err){
                console.log("ERROR: " + err);
            }
        }, 3000);
    }
}