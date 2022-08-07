import { IShipper } from './IShipper';

const pricePerOunce = 0.39;

export class AirEastShipper implements IShipper {
    getCost = (weight: number) => weight * pricePerOunce;
}
