import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
// import { ValueComparator } from "./ValueComparator";

function compareByValue(itemA: Item, itemB: Item) {
    return itemA.getValue() - itemB.getValue();
}

export class Inventory {
    private items: Array<Item>;

    constructor() {
        this.items = [];
    }

    // public sort(): void {}
    public sort(comparator?: ItemComparator): void {
        this.items.sort(comparator ? comparator.compare : compareByValue);
    }
    public addItem(item: Item): void {
        this.items.push(item);
    }
    public toString(): string {
        return this.items.join(",\n");
    }
}
