import { Comparable } from "./Comparable";

let counter = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;
    private name: String;
    private value: number;
    private weight: number;
    static numberOfItems: number = 0;

    constructor(name: String, value: number, weight: number) {
        this.id = counter++;
        Item.numberOfItems = counter;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        }
        if (this.value < other.value) {
            return -1;
        }

        return other.name.toUpperCase().localeCompare(this.name.toUpperCase());
    }

    public toString(): String {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public abstract use(): String;

    public reset(): void {
        counter = 0;
    }
    public getName(): String {
        return this.name;
    }
    public getWeight(): number {
        return this.weight;
    }
    public getValue(): number {
        return this.value;
    }
}
