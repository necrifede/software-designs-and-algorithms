import { IShipper } from './IShipper';

const pricePerOunce = 0.51;

export class PacificParcelShipper implements IShipper {
    getCost = (weight: number) => weight * pricePerOunce;
}
