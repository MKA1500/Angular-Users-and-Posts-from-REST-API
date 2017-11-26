"use strict";
// run it with:
exports.__esModule = true;
// tsc typescript_tests/main.ts && node typescript_tests/main.js
var point_1 = require("./point");
var point2_1 = require("./point2");
var point = new point_1.Point(33, 27);
point.y = 7;
point.draw();
var x = point.X;
console.log('X: ' + x);
point.X = 300;
var point2 = new point2_1.Point2(6, 15);
point2.a = 13;
point2.draw();
var b = point2.getB();
console.log('B: ' + b);
point2.setB(700);
// point2.setB(-1); 
