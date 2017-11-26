"use strict";
exports.__esModule = true;
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
exports.Point = Point;
