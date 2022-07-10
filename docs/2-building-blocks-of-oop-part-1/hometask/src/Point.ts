const sqrt = Math.sqrt;
const round = Math.round;
const pow = Math.pow;

export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString = () => `(${this.x}, ${this.y})`;

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(x: Point | number = 0, y: number = 0): number {
        // TODO: ask why instead "number" cannot be "Point"
        if (typeof x === "number") {
            return sqrt(round(pow(this.x - x, 2)) + round(pow(this.y - y, 2)));
        } else {
            const point = x;
            return this.distance(point?.x, point?.y);
        }
    }
}
