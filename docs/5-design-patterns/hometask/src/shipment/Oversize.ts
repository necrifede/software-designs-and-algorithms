import { Shipment } from './Shipment';

export class Oversize extends Shipment {
    calculatePrice = () => {
        this.price = this.shipper.getCost(this.weight, 'oversize');
    };
}
