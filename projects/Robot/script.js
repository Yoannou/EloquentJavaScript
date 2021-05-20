/* Project 1: Automated mail delivery robot */

// All roads:
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

// Create data structure to find out what place can be reached from a given place:
function buildGraph(edges) {
    let graph = Object.create(null); //Object that has no prototype, can make from scratch
    function addEdge(from, to) {
        if (graph[from] == null){
            graph[from] = [to];
        }
        else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

// Every time the robot moves, we will compute a NEW village state object of the following class with the updated values:
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    // Robot movement method:
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        // Below, 'map' moves the parcels along with the robot, then 'filter' delivers the parcels to the new location
        else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { 
                    place: destination, address: p.address 
                };}).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// Initial village state (start of program)
let first = new VillageState (
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

// New static method that creates a new state with some parcels, written here by adding method to constructor:
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        }
        while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

// Robot must return where it wants to move, and its memory of where it just was
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

// V1: RANDOM ROBOT
// Random robot - simplest implementation, robot moves randomly until all parcels are gathered and delivered
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
// Doesn't need memory argument:
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

// Start up a virtual world:
// runRobot(VillageState.random(), randomRobot);

// V2: ROUTE ROBOT
// Route robot - has a mail route, follows it a repeatedly (twice) until all parcels are gathered and delivered
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall",
    "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House",
    "Farm", "Marketplace", "Post Office"
];
function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

// Start up a virtual world: 
// runRobot(VillageState.random(), routeRobot, []);

// V3: PATH-FINDING ROBOT
// Path-finding robot - adjusts its behaviour to a given parcel or delivery point based on a route-finding function (search problem)
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// Start up virtual world:
runRobot(VillageState.random(5), goalOrientedRobot, []);


/********** EXERCISES *********/
// 1) Compare 2 robots by giving them the same tasks and seeing who is faster.

function compareRobots(robot1, mem1, robot2, mem2) {

}