import * as ClientType from '../Client';
import { State } from '../types';
const { Client } = jest.requireActual<typeof ClientType>('../Client');
// TODO: Question: how to mock only for one test, not for all file
// jest.mock('../utils');
// const { getSequencialNumber } = require('../utils');

describe('Client', () => {
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

// to make the isolatedModules config works
export {};
