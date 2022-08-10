import { Shipment } from './Shipment';

export class Letter extends Shipment {
    calculatePrice = () => {
        this.price = this.shipper.getCost(this.weight, 'letter');
    };
}
