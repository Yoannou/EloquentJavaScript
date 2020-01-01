import { bigOak, bigMaple } from "./nests.js";

bigOak.confirmAccess();
bigMaple.confirmAccess();

// Read rations from big oaks first cache with 2 callbacks:
bigOak.readStorage(bigOak.caches, caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, cache => {
        console.log(cache.name + ' rations: ' + cache.rations);
    })
})

bigOak.send(bigMaple, "Sending message to you to test the system.", ()=>{console.log("Sent")});