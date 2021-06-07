// All of the nests in the crow communication grid

import Nest from './crow-tech.js';

// Big Oak
export const bigOak = new Nest("Big Oak", [{
    name: "Underbelly",
    rations: 1204
}, {
    name: "Trunk",
    rations: 22
},{
    name: "Upper branches",
    rations: 20
}]);

// Big Maple
export const bigMaple = new Nest("Big Maple", [{
    name: "Underbelly",
    rations: 200
}, {
    name: "Trunk",
    rations: 230
},{
    name: "Middle branches",
    rations: 100
},
    {
    name: "Upper branches",
    rations: 32
}]);

// Cow Pasture