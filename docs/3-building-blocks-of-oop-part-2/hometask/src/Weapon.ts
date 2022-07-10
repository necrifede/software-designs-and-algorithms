import { Item } from "./Item";

export abstract class Weapon extends Item {
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;
    public static MODIFIER_CHANGE_RATE: number = 0.05;
    public static MAXIMUM_DURABILITY_MODIFIER: number = 1;
    public static MAXIMUM_DAMAGE_MODIFIER: number = 0.25;

    constructor(name: String, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.damageModifier = 0.05;
        this.baseDurability = baseDurability;
        this.durabilityModifier = 0.05;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }
    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): String {
        return `${super.toString()}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(
            100 * this.getDurability()
        ).toFixed(2)}%`;
    }

    public use(): String {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()}, it is broken.`;
        }
        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
        const addendum = this.getDurability() <= 0 ? ` The ${this.getName()} breaks.` : "";
        return `You use the ${this.getName()}, dealing ${this.getDurability().toFixed(2)} points of damage.${addendum}`;
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }
    public setDamageModifier(value: number): void {
        this.damageModifier = value;
    }
    public getBaseDamage(): number {
        return this.baseDamage;
    }
    public setBaseDamage(value: number): void {
        this.baseDamage = value;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }
    public setDurabilityModifier(value: number): void {
        this.durabilityModifier = value;
    }
    public getBaseDurability(): number {
        return this.baseDurability;
    }
}
