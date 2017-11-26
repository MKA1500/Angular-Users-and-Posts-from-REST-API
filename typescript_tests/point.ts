export class Point {
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