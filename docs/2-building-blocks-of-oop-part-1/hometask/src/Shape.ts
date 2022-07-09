import { Point } from "./Point";

export abstract class Shape {
    protected points: Point[];
    protected color: string;
    protected filled: boolean;

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points: Point[], color: string = "green", filled: boolean = true) {
        if (points.length <= 2) {
            throw new Error("At least 3 points are needed.");
        }
        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    abstract getType(): string;

    toString = () =>
        `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points: ${this.points
            .map((point) => point.toString())
            .join(", ")}.`;

    getDistances = () => this.points.map((point, idx, arr) => point.distance(arr[idx + 1] ?? arr[0]));

    getPerimeter = () => this.getDistances().reduce((total, d) => total + d, 0);
}
