import { Injectable } from "@angular/core";
import { FuelType, ICitiInfo, IDemoItem } from '../models/demo';

const personCar: Array<IDemoItem> = [
    {name: 'Zdzisiek', age: 56, district: 'Sochaczew', carMake: 'Opel', fuelType: FuelType.DIESEL},
    {name: 'Wacław', age: 66, district: 'Sochaczew', carMake: 'Fiat', fuelType: FuelType.PETROL},
    {name: 'Marcin', age: 18, district: 'Warszawa', carMake: 'Reno', fuelType: FuelType.DIESEL},
    {name: 'Krzysztof', age: 40, district: 'Pruszków', carMake: 'Volkswagen', fuelType: FuelType.GAS},
    {name: 'Adam', age: 23, district: 'Warszawa', carMake: 'Porsze', fuelType: FuelType.PETROL},
    {name: 'Piotr', age: 29, district: 'Warszawa', carMake: 'Citroen', fuelType: FuelType.DIESEL},
    {name: 'Rafał', age: 18, district: 'Warszawa', carMake: 'Peżot', fuelType: FuelType.GAS},
    {name: 'Paweł', age: 37, district: 'Pruszków', carMake: 'Skoda', fuelType: FuelType.GAS},
    {name: 'Wojtek', age: 18, district: 'Warszawa', carMake: 'Peżot', fuelType: FuelType.GAS},
    {name: 'Stanisław', age: 59, district: 'Pruszków', carMake: 'Opel', fuelType: FuelType.PETROL},
    {name: 'Bogumił', age: 33, district: 'Sochaczew', carMake: 'Skoda', fuelType: FuelType.PETROL},
    {name: 'Daniel', age: 51, district: 'Warszawa', carMake: 'Krajzler', fuelType: FuelType.PETROL},
    {name: 'Stefek', age: 49, district: 'Warszawa', carMake: 'Fiat', fuelType: FuelType.DIESEL},
    {name: 'Janek', age: 30, district: 'Sochaczew', carMake: 'Volkswagen', fuelType: FuelType.DIESEL},
    {name: 'Bronisław', age: 66, district: 'Pruszków', carMake: 'Mercedes', fuelType: FuelType.DIESEL},
    {name: 'Emil', age: 27, district: 'Warszawa', carMake: 'BMW', fuelType: FuelType.PETROL},
    {name: 'Mariusz', age: 43, district: 'Sochaczew', carMake: 'Audi', fuelType: FuelType.DIESEL},
    {name: 'Jarosław', age: 71, district: 'Pruszków', carMake: 'Dacia', fuelType: FuelType.PETROL},
    {name: 'Maks', age: 27, district: 'Sochaczew', carMake: 'Ford', fuelType: FuelType.PETROL},
    {name: 'Jakub', age: 31, district: 'Warszawa', carMake: 'Mitsubiszi', fuelType: FuelType.PETROL},
    {name: 'Seba', age: 26, district: 'Warszawa', carMake: 'BMW', fuelType: FuelType.DIESEL},
    {name: 'Grzesiek', age: 24, district: 'Warszawa', carMake: 'Kia', fuelType: FuelType.PETROL},
    {name: 'Alek', age: 48, district: 'Pruszków', carMake: 'Reno', fuelType: FuelType.PETROL},
    {name: 'Wiesław', age: 58, district: 'Warszawa', carMake: 'Mercedes', fuelType: FuelType.DIESEL},
    {name: 'Bolesław', age: 63, district: 'Warszawa', carMake: 'Saab', fuelType: FuelType.PETROL},
    {name: 'Witek', age: 51, district: 'Sochaczew', carMake: 'Skoda', fuelType: FuelType.GAS},
    {name: 'Ignac', age: 40, district: 'Warszawa', carMake: 'Hjundai', fuelType: FuelType.DIESEL},
    {name: 'Czarek', age: 37, district: 'Warszawa', carMake: 'Peżot', fuelType: FuelType.DIESEL}
]

const citiInfo: Array<ICitiInfo> = [
    {district: 'Warszawa', info: 'stolica'},
    {district: 'Sochaczew', info: 'miasto jak miasto'},
    {district: 'Pruszków', info: 'miasteczko'}
]

@Injectable()
export class TablesService {
    get personCarData(){
        return personCar;
    }

    get citiInfoData() {
        return citiInfo;
    }
}