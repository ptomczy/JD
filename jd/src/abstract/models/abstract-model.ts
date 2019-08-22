export interface IPowerType {
    combustion: boolean,
    energySource: EnergySources,
    name?: string
}

export interface IextraPowerType extends IPowerType {
    isCool: boolean,
    setNotCool(carModel?: string): void
}

export enum EnergySources {
    Sun, 
    Wind,
    Water,
    Petroleum
}