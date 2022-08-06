export type State = {
    shipmentID: number; // if 0 (zero) generate a new one
    weight: number; // in ounces
    fromAddress: string; // has street, city, and state
    fromZipCode: string; // control exactly 5 characters
    toAddress: string; // has street, city, and state
    toZipCode: string; // control exactly 5 characters
};
