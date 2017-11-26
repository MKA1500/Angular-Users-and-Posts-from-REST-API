export class Point2 {
    constructor(public a?: number, private b?: number) {
    }

    draw() {
        console.log('A: ' + this.a + ', B: ' + this.b);
    }

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