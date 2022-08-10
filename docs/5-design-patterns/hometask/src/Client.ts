import { Letter, Oversize, Package, Shipment } from './shipment';
import { State } from './types';

/**
 * This will interact with the GUI
 */
export class Client {
    shipment: Shipment | undefined;

    createShipment = (state: State) => {
        if (state.weight <= 15) {
            return new Letter(state);
        }
        if (15 < state.weight && state.weight <= 160) {
            return new Package(state);
        }
        return new Oversize(state);
    };

    requestShipment = (state: State) => {
        this.shipment = this.createShipment(state);
        this.shipment.calculatePrice();
        const result = this.shipment.ship();
        // console.log('result: ', result);
        return result;
    };

    requestPrice = () => this.shipment?.getPrice() || 0;
}
