// run it with:

// tsc typescript_tests/main.ts && node typescript_tests/main.js

import { Point } from './point';
import { Point2 } from './point2';

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