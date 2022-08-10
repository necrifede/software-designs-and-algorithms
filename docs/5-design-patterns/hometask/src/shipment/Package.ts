import { Shipment } from './Shipment';

export class Package extends Shipment {
    calculatePrice = () => {
        this.price = this.shipper.getCost(this.weight, 'package');
    };
}
