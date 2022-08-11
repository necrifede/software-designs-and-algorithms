import { FragileDecorate, Letter, NoHomeAloneDecorate, Oversize, Package, ReturnDecorate, IShipment } from './shipment';
import { Marks, State } from './types';

const markObjects = {
    fragile: FragileDecorate,
    return: ReturnDecorate,
    noHomeAlone: NoHomeAloneDecorate,
};

/**
 * This will interact with the GUI
 */
export class Client {
    shipment: IShipment | undefined;

    createShipment = (state: State) => {
        if (state.weight <= 15) {
            return new Letter(state);
        }
        if (15 < state.weight && state.weight <= 160) {
            return new Package(state);
        }
        return new Oversize(state);
    };

    requestShipment = (state: State, marks: Marks = {}) => {
        this.shipment = Object.entries(marks).reduce(
            (shipment: IShipment, [mark, isPresent]) =>
                isPresent ? new markObjects[mark as keyof Marks](shipment) : shipment,
            this.createShipment(state)
        );
        this.shipment.getPrice();
        const result = this.shipment.ship();
        // console.log('result: ', result);
        return result;
    };

    requestPrice = () => this.shipment?.getPrice() || 0;
}
