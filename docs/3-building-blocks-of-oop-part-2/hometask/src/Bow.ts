import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("bow", baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        // TODO: update this function according requirement
        const polishedDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDurabilityModifier =
            polishedDurabilityModifier >= Weapon.MAXIMUM_DURABILITY_MODIFIER
                ? Weapon.MAXIMUM_DURABILITY_MODIFIER
                : polishedDurabilityModifier;
        this.setDurabilityModifier(newDurabilityModifier);
    }
}
