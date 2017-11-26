// run it with:

// tsc typescript_tests/main.ts && node typescript_tests/main.js

class Point {
    private x: number;
    y: number;

    constructor(x?: number, y?: number) {
        // '?' makes the parameter optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    // option 1. of get and set:

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('Value can not be less then 0.');

        this.x = value;
        console.log('X: ' + this.x);
    }
}


class Point2 {
    constructor(public a?: number, private b?: number) {
    }

    draw() {
        console.log('A: ' + this.a + ', B: ' + this.b);
    }

    // option 2. of get and set:

    getB() {
        return this.b;
    }

    setB(value) {
        if (value < 0)
            throw new Error('Value can not be less then 0.');

        this.b = value;
        console.log('B: ' + this.b);
    }
}

let point = new Point(33, 27);
point.y = 7;
point.draw();
let x = point.X;
console.log('X: ' + x);
point.X = 300;

let point2 = new Point2(6, 15);
point2.a = 13;
point2.draw();
let b = point2.getB();
console.log('B: ' + b);
point2.setB(700);
// point2.setB(-1);