"use strict";
exports.__esModule = true;
var Point2 = /** @class */ (function () {
    function Point2(a, b) {
        this.a = a;
        this.b = b;
    }
    Point2.prototype.draw = function () {
        console.log('A: ' + this.a + ', B: ' + this.b);
    };
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
exports.Point2 = Point2;
