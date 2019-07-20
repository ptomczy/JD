export interface IDemoItem {
    name: string,
    age: number,
    district: string,
    carMake: string,
    fuelType: string
}

export const FuelType = {
    PETROL: 'petrol',
    DIESEL: 'diesel',
    GAS: 'gas'
}

export interface ICitiInfo {
    district: string,
    info: string
}