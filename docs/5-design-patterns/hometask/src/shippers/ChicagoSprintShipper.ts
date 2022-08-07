import { IShipper } from './IShipper';

const pricePerOunce = 0.42;

export class ChicagoSprintShipper implements IShipper {
    getCost = (weight: number) => weight * pricePerOunce;
}
