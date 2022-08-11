export interface IShipper {
    getCost(weight: number, shipment: string): number;
}
