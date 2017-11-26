// run it with:

// tsc typescript_tests/main.ts && node typescript_tests/main.js

class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        // '?' makes the parameter optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(33,27);
point.draw();