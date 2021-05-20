// 1: Create a vector (2-dimensional array) that can be added to other vectors and have getters and setters

class Vec {
    constructor(x ,y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let sum = new Vec;
        sum.x = this.x + vector.x;
        sum.y = this.y + vector.y;
        return sum;
    }

    minus(vector) {
        let difference = new Vec;
        difference.x = this.x - vector.x;
        difference.y = this.y - vector.y;
        return difference;
    }

    get length() {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    }
}


// 2: Create a copy of the Set object called Group

/* A set contains a selection of UNIQUE values, no duplicates */

class Group {

    constructor(){
        this.group = [];
    }

    // add unique value to set
    add(value){
        if(!this.group.includes(value)) {
            this.group.push(value);
        }
    }
    // remove unique value from set
    delete(value){
        while(this.group.includes(value)) {
            this.group = this.group.filter((index) => index !== value);
        }
    }

    // check if set contains value
    has(value){
        return this.group.includes(value);
    }

    // allow user to pre-fill the array using Group.from(iterable)
    /* YOU CANNOT USE THE 'NEW' KEYWORD WHEN DECLARING GROUPS THROUGH THIS */

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }

    // 3. Make this Group class from the previous exersize iterable:

    /*
    The Symbol.iterator method returns an object which immediately calls its next() function.
    This function must contain DONE (true if nothing more to iterate),
    and VALUE (what the current value it is testing is).
    Check for doneness first, if not define what it will do with the value.
    */
    [Symbol.iterator]() {
        let current = 0;
        let iterable = this.group;
        let max = this.group.length;
        return {
            next() {
                if(current == max) {
                    return {done: true};
                }
                let value = iterable[current];
                current++;
                return {value, done: false};
            }
        }
    }

}

// 4: Create map that can use the name hasOwnProperty without overriding the method

/*
Note that the 'in' operator searches if a property exists in an object or ANYWHERE in its prototype chain
The "hasOwnProperty just checks the object itself.

In this case you would simply use a symbol instead of a string as the property name.
*/

let obj1 = {
    "property": "yes",
    "hasOwnProperty": false
}

let obj2 = {
    [hasOwnPropertySymbol]() {return "You tell me"}
}