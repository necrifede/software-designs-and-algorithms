import { State } from './types';
import { getSequencialNumber, validateZipCode } from './utils';

const pricePerWeight = 0.39;

export class Shipment {
    shipmentID: number; // if 0 (zero) generate a new one
    toAddress: string; // has street, city, and state
    fromAddress: string; // has street, city, and state
    toZipCode: string; // control exactly 5 characters
    fromZipCode: string; // control exactly 5 characters
    weight: number; // in ounces
    price: number;

    constructor({ shipmentID, weight, toAddress, fromAddress, toZipCode, fromZipCode }: State) {
        this.shipmentID = shipmentID === 0 ? getSequencialNumber() : shipmentID;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.toZipCode = validateZipCode(toZipCode);
        this.fromZipCode = validateZipCode(fromZipCode);
        this.weight = weight;
        this.price = this.weight * pricePerWeight;
    }

    getInstance = () => this;

    getShipmentID = () => this.shipmentID;

    ship = () => `${this.shipmentID}; ${this.fromAddress}; ${this.toAddress}; ${this.price} USD`;
}
