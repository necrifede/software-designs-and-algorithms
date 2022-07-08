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
        if (typeof x === "number") {
            return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
        } else {
            const point = x;
            return this.distance(point?.x, point?.y);
        }
    }
}
