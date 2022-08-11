let counter = 0;

export const getSequencialNumber = () => ++counter;

export const validateZipCode = (zipCode: string) => {
    if (zipCode.length === 5) {
        return zipCode;
    } else {
        throw new Error(`Invalid Zip Code: ${zipCode}`);
    }
};
