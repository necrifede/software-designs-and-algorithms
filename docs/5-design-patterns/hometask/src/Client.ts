import { Shipment } from './Shipment';
import { State } from './types';

/**
 * This will interact with the GUI
 */
export class Client {
    requestShipment = (state: State) => {
        const shipment = new Shipment(state);
        const result = shipment.ship();
        // console.log('result: ', result);
        return result;
    };
    
}
