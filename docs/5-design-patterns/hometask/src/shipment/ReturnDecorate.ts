import { ShipmentDecorator } from './ShipmentDecorator';

export class ReturnDecorate extends ShipmentDecorator {
    ship: () => string = () => `${this.wrappee.ship()}\n**MARK RETURN RECEIPT REQUESTED**`;
}
