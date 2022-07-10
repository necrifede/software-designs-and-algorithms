import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("sword", baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        /**
            TODO: fix this observation from revisor:
            Example of how I understood it.

            // We are checking polishedDmgModifier
            const polishedDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
            // Maximum modifier what we should polish up to
            const maximumDamageModifier = this.getDamageModifier() * 0.25;
            // If we exceeded it we capping it up to maximum, otherwise we polishing it as it is
            const newDamageModifier =
            polishedDamageModifier >= maximumDamageModifier
            ? maximumDamageModifier
            : polishedDamageModifier;
            // setting polished modifier
            this.setDamageModifier(newDamageModifier);

            explanation 2: 
            If the base damage of a sword were to be 100, then the maximum that the effective damage could be increased to would be 125
            Let's say we have 100 base damage , so by increasing the damageModifier we can't exceed 25% (0.25 is maximum). It is similar as with bow.

            explanation 3: 
            Let's say our baseDamage is 100, primary damage modifier is 10 and our modifier change rate is 10.
            We will polish Sword 3 times. We will get modifier 30 which is already more then 25% of base damage. We don't need to set baseDamage here. We are only updating damage modifier up to 25% of base damage.
         */
        const polishedDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDamageModifier =
            polishedDamageModifier >= Weapon.MAXIMUM_DAMAGE_MODIFIER
                ? Weapon.MAXIMUM_DAMAGE_MODIFIER
                : polishedDamageModifier;
        this.setDamageModifier(newDamageModifier);
    }
}
