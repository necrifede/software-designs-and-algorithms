import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
    constructor(pA: Point, pB: Point, pC: Point);
    constructor(pA: Point, pB: Point, pC: Point, color: string, filled: boolean);
    constructor(pA: Point, pB: Point, pC: Point, color?: string, filled?: boolean) {
        super([pA, pB, pC], color ?? "green", filled ?? true);
    }

    toString = () => `Triangle[${this.points.map((p, i) => `v${i + 1}=(${p.x}, ${p.y})`).join(",")}]`;

    getType = () => {
        const distances = this.getDistances().reduce((acc, d) => ({ ...acc, [d]: (acc[d] ?? 0) + 1 }), {});

        switch (Object.keys(distances).length) {
            case 1:
                return "equilateral triangle";
            case 2:
                return "isosceles triangle";
            case 3:
                return "scalene triangle";
            default:
                throw new Error("Invalid triangle type");
        }
    };
}
