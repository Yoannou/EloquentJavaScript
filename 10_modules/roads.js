// A module that contains an array of roads and exports them as a graph data structure

const graph = require('./graph.js');

// All roads:
const roadsOldString = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

let roads = [];
for (let i = 0; i < roadsOldString.length; i++) {
    roads[i] = roadsOldString[i].split("-");
}

// This won't work since buildGraph hasn't been tweaked to work with an roads, works for roadsOldString
console.log(exports.roadGraph = graph.buildGraph(roads));