import * as ClientType from '../Client';
import { State } from '../types';
const { Client } = jest.requireActual<typeof ClientType>('../Client');
// TODO: Question: how to mock only for one test, not for all file
// jest.mock('../utils');
// const { getSequencialNumber } = require('../utils');

describe('Step 1: Client Shipment relation', () => {
    test('should create a new shipments', () => {
        const client = new Client();
        const state: State = {
            shipmentID: 123,
            weight: 2,
            fromAddress: 'street, city, state',
            fromZipCode: 'ABCDE',
            toAddress: 'street2, city2, state2',
            toZipCode: 'VWXYZ',
        };
        const expected = '123; street, city, state; street2, city2, state2; 0.78 USD';

        expect(client.requestShipment(state)).toBe(expected);
    });

    test('should generate an new ID when shipmentID is zero', () => {
        // getSequencialNumber.mockImplementation(() => 888);
        const client = new Client();
        const state: State = {
            shipmentID: 0,
            weight: 2,
            fromAddress: 'street, city, state',
            fromZipCode: 'ABCDE',
            toAddress: 'street2, city2, state2',
            toZipCode: 'VWXYZ',
        };
        const expected = '1; street, city, state; street2, city2, state2; 0.78 USD';

        expect(client.requestShipment(state)).toBe(expected);
    });

    test('should throw exception when fromZipCode has no five characters', () => {
        const client = new Client();
        const state: State = {
            shipmentID: 2,
            weight: 2,
            fromAddress: 'street, city, state',
            fromZipCode: 'ABC',
            toAddress: 'street2, city2, state2',
            toZipCode: 'VWXYZ',
        };
        const errorMessage = 'Invalid Zip Code: ABC';
        expect.assertions(1);
        try {
            client.requestShipment(state);
        } catch (e: any) {
            expect(e.message).toBe(errorMessage);
        }
    });

    test('should throw exception when toZipCode has no five characters', () => {
        const client = new Client();
        const state: State = {
            shipmentID: 2,
            weight: 2,
            fromAddress: 'street, city, state',
            fromZipCode: 'ABCDE',
            toAddress: 'street2, city2, state2',
            toZipCode: 'VWXYZX',
        };
        const errorMessage = 'Invalid Zip Code: VWXYZX';
        expect.assertions(1);
        try {
            client.requestShipment(state);
        } catch (e: any) {
            expect(e.message).toBe(errorMessage);
        }
    });
});

describe('Step 2: Multiple shippers', () => {
    let baseState: State = {
        shipmentID: 111,
        weight: 2,
        fromAddress: 'street, city, state',
        fromZipCode: 'ABCDE',
        toAddress: 'street2, city2, state2',
        toZipCode: 'VWXYZ',
    };
    const client = new Client();

    beforeEach(() => {
        baseState = { ...baseState };
    });

    test('should use Air Easter Shipper when sender Zip Code Start with 1, 2 or 3', () => {
        const startWith1 = { ...baseState, fromZipCode: '123AB', weight: 1 };
        const startWith2 = { ...baseState, fromZipCode: '222AB', weight: 1 };
        const startWith3 = { ...baseState, fromZipCode: '321AB', weight: 1 };

        const expectedPrice = 0.39;

        client.requestShipment(startWith1);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith2);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith3);
        expect(client.requestPrice()).toBe(expectedPrice);
    });

    test('should use Pacific Parcer Shipper when sender Zip Code Start with 7, 8 or 9', () => {
        const startWith7 = { ...baseState, fromZipCode: '789AB', weight: 1 };
        const startWith8 = { ...baseState, fromZipCode: '888AB', weight: 1 };
        const startWith9 = { ...baseState, fromZipCode: '987AB', weight: 1 };

        const expectedPrice = 0.51;

        client.requestShipment(startWith7);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith8);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith9);
        expect(client.requestPrice()).toBe(expectedPrice);
    });

    test('should use Chicago Sprint Shipper when sender Zip Code Start with 4, 5 or 6', () => {
        const startWith4 = { ...baseState, fromZipCode: '456AB', weight: 1 };
        const startWith5 = { ...baseState, fromZipCode: '555AB', weight: 1 };
        const startWith6 = { ...baseState, fromZipCode: '654AB', weight: 1 };

        const expectedPrice = 0.42;

        client.requestShipment(startWith4);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith5);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWith6);
        expect(client.requestPrice()).toBe(expectedPrice);
    });

    test('should use Air Easter Shipper by default', () => {
        const startWith0 = { ...baseState, fromZipCode: '012AB', weight: 1 };
        const startWithA = { ...baseState, fromZipCode: 'ABCDE', weight: 1 };

        const expectedPrice = 0.39;

        client.requestShipment(startWith0);
        expect(client.requestPrice()).toBe(expectedPrice);

        client.requestShipment(startWithA);
        expect(client.requestPrice()).toBe(expectedPrice);
    });
});

// to make the isolatedModules config works
export {};
