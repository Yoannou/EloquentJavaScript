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

    // allow user to pre-fill the array using Group.fromIterable()
    /* YOU CANNOT USE THE 'NEW' KEYWORD WHEN DECLARING GROUPS THROUGH THIS */

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

// 3. Make the group class from the previous exersize iterable