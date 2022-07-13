import { Item } from "./Item";

export class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor(name: String, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
        this.consumed = false;
    }

    public use(): String {
        if (!this.consumed && !this.spoiled) {
            return this.eat();
        }
        return `There is nothing left of the ${this.getName()} to consume.`;
    }

    public eat(): String {
        const addendum = this.spoiled ? "\nYou feel sick." : "";
        return `You eat the ${this.getName()}.${addendum}`;
    }

    public setConsumed(value: boolean): void {
        this.consumed = value;
    }
}
