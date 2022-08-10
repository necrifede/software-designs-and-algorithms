import { IShipper } from './IShipper';

export class AirEastShipper implements IShipper {
    getCost = (weight: number, shipment: string) => {
        switch (shipment) {
            case 'letter':
                return weight * 0.39;
            case 'package':
                return weight * 0.25;
            case 'oversize':
                return weight * 0.25 + 10;
            default:
                return 0;
        }
    };
}
