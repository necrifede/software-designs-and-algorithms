import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ValueComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        return first.getValue() - second.getValue();
    }
}
