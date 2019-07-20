export interface IPowerType {
    combustion: boolean,
    energySource: EnergySources,
    name?: string
}

export interface IextraPowerType extends IPowerType {
    isCool: boolean,
    getFucked(): boolean
}

export enum EnergySources {
    Sun, 
    Wind,
    Water,
    Petroleum
}