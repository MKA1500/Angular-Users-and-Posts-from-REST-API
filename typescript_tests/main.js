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
    return Point;
}());
var point = new Point(33, 27);
point.draw();
