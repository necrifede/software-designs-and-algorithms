import { Shipment } from './Shipment';
import { State } from './types';

/**
 * This will interact with the GUI
 */
export class Client {
    shipment: Shipment | undefined;

    requestShipment = (state: State) => {
        this.shipment = new Shipment(state);
        const result = this.shipment.ship();
        // console.log('result: ', result);
        return result;
    };

    requestPrice = () => this.shipment?.getPrice() || 0;
}
