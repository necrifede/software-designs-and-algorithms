import { ShipmentDecorator } from './ShipmentDecorator';

export class NoHomeAloneDecorate extends ShipmentDecorator {
    ship: () => string = () => `${this.wrappee.ship()}\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
}
