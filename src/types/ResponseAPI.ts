export interface WeatherAPI{
    id: number,
    main: string,
    description: string,
    icon: string,
}

export interface MainAPI{
    temp: number,
    humidity: number,
}

export interface WindAPI{
    speed: number,
}