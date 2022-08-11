import { IShipper } from './IShipper';

const pricePerOunce = 0.51;

export class PacificParcelShipper implements IShipper {
    getCost = (weight: number, shipment: string) => {
        switch (shipment) {
            case 'letter':
                return weight * 0.51;
            case 'package':
                return weight * 0.19;
            case 'oversize':
                return weight * 0.21;
            default:
                return 0;
        }
    };
}
