// run it with:
// tsc typescript_tests/main.ts && node typescript_tests/main.js
var Point = /** @class */ (function () {
    function Point(x, y) {
        // '?' makes the parameter optional
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        // option 1. of get and set:
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value can not be less then 0.');
            this.x = value;
            console.log('X: ' + this.x);
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var Point2 = /** @class */ (function () {
    function Point2(a, b) {
        this.a = a;
        this.b = b;
    }
    Point2.prototype.draw = function () {
        console.log('A: ' + this.a + ', B: ' + this.b);
    };
    // option 2. of get and set:
    Point2.prototype.getB = function () {
        return this.b;
    };
    Point2.prototype.setB = function (value) {
        if (value < 0)
            throw new Error('Value can not be less then 0.');
        this.b = value;
        console.log('B: ' + this.b);
    };
    return Point2;
}());
var point = new Point(33, 27);
point.y = 7;
point.draw();
var x = point.X;
console.log('X: ' + x);
point.X = 300;
var point2 = new Point2(6, 15);
point2.a = 13;
point2.draw();
var b = point2.getB();
console.log('B: ' + b);
point2.setB(700);
// point2.setB(-1); 
