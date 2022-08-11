import { ShipmentDecorator } from './ShipmentDecorator';

export class FragileDecorate extends ShipmentDecorator {
    ship: () => string = () => `${this.wrappee.ship()}\n**MARK FRAGILE**`;
}
