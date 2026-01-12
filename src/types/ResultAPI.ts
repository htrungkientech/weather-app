import type { WeatherAPI, MainAPI, WindAPI } from "./ResponseAPI";

export interface ResultAPI{
    weather: WeatherAPI[],
    main: MainAPI,
    wind: WindAPI,
    name: string,
}