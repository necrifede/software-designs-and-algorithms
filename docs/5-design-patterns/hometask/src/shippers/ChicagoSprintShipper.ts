import { IShipper } from './IShipper';

const pricePerOunce = 0.42;

export class ChicagoSprintShipper implements IShipper {
    getCost = (weight: number, shipment: string) => {
        switch (shipment) {
            case 'letter':
                return weight * 0.42;
            case 'package':
                return weight * 0.2;
            case 'oversize':
                return weight * 0.2;
            default:
                return 0;
        }
    };
}
