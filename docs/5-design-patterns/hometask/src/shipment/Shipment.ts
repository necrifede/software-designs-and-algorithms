import { State } from '../types';
import { getSequencialNumber, validateZipCode } from '../utils';
import { AirEastShipper, ChicagoSprintShipper, IShipper, PacificParcelShipper } from '../shippers';

const airEastShipper = new AirEastShipper();
const chicagoSprintShipper = new ChicagoSprintShipper();
const pacificParcelShipper = new PacificParcelShipper();
const shipperOptions = [
    airEastShipper,
    airEastShipper,
    airEastShipper,
    chicagoSprintShipper,
    chicagoSprintShipper,
    chicagoSprintShipper,
    pacificParcelShipper,
    pacificParcelShipper,
    pacificParcelShipper,
];

const getShipper = (code = 1) => shipperOptions?.[code - 1] || airEastShipper;

const getFirstCharAsInt = (word: string) => (isNaN(Number(word?.[0])) ? undefined : Number(word?.[0]));

export abstract class Shipment {
    shipmentID: number; // if 0 (zero) generate a new one
    toAddress: string; // has street, city, and state
    fromAddress: string; // has street, city, and state
    toZipCode: string; // control exactly 5 characters
    fromZipCode: string; // control exactly 5 characters
    weight: number; // in ounces
    shipper: IShipper;
    price: number;

    constructor({ shipmentID, weight, toAddress, fromAddress, toZipCode, fromZipCode }: State) {
        this.shipmentID = shipmentID === 0 ? getSequencialNumber() : shipmentID;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.toZipCode = validateZipCode(toZipCode);
        this.fromZipCode = validateZipCode(fromZipCode);
        this.weight = weight;
        this.shipper = getShipper(getFirstCharAsInt(fromZipCode));
        this.price = -1;
    }

    getPrice: () => number = () => {
        if (this.price < 0) {
            this.calculatePrice();
        }
        return this.price;
    };

    abstract calculatePrice: () => void;

    getInstance = () => this;

    getShipmentID = () => this.shipmentID;

    ship = () => `${this.shipmentID}; ${this.fromAddress}; ${this.toAddress}; ${this.price} USD`;
}
