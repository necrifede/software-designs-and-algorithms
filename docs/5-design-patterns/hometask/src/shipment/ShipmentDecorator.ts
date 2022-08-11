import { IShipment } from './IShipment';

export class ShipmentDecorator implements IShipment {
    wrappee: IShipment;

    constructor(wrappee: IShipment) {
        this.wrappee = wrappee;
    }

    getPrice = () => this.wrappee.getPrice();
    ship = () => this.wrappee.ship();
}
